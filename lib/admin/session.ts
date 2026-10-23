import "server-only";
import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

// Single-password admin. Configure in .env.local on the hosting PC:
//   ADMIN_PASSWORD=<long passphrase>
//   ADMIN_SESSION_SECRET=<random string, 32+ chars>
// The session cookie is "<expiry ms>.<HMAC of expiry>" — stateless, so a
// server restart keeps people logged in; rotating the secret logs everyone out.
const COOKIE = "urvar_admin";
const SESSION_MS = 7 * 24 * 60 * 60 * 1000;

function secret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SESSION_SECRET must be set (32+ characters)");
  return s;
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  // Hash first so lengths match and timing doesn't leak length.
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function adminConfigured(): boolean {
  const password = process.env.ADMIN_PASSWORD;
  // "CHANGE-ME" is the placeholder written into .env.local during setup.
  return Boolean(password && password !== "CHANGE-ME" && (process.env.ADMIN_SESSION_SECRET?.length ?? 0) >= 32);
}

export function checkPassword(password: string): boolean {
  if (!adminConfigured()) return false;
  return safeEqual(password, process.env.ADMIN_PASSWORD!);
}

export async function createSession(): Promise<void> {
  const expires = Date.now() + SESSION_MS;
  const store = await cookies();
  store.set(COOKIE, `${expires}.${sign(String(expires))}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expires),
  });
}

export async function destroySession(): Promise<void> {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  // Read the cookie before any early return: that is what marks admin pages
  // as dynamic. Returning first would let `next build` (which has no admin
  // env vars) prerender the pages as a permanent redirect to /admin/login.
  const token = (await cookies()).get(COOKIE)?.value;
  if (!adminConfigured() || !token) return false;
  const [expires, mac] = token.split(".");
  if (!expires || !mac || Number(expires) < Date.now()) return false;
  return safeEqual(mac, sign(expires));
}

/** Call at the top of every admin page and server action. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}

// Login throttle: 10 attempts per 15 minutes per client IP (in-memory;
// resets on restart, which is fine for one PM2 process).
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 10;

export async function loginRateLimited(): Promise<boolean> {
  const h = await headers();
  const ip = h.get("cf-connecting-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}
