import { promises as fs } from "fs";
import path from "path";
import { randomBytes } from "crypto";
import { isAdmin } from "@/lib/admin/session";
import { MEDIA_DIR } from "@/lib/blog/store";

const MAX_BYTES = 5 * 1024 * 1024;

// Detect type from file contents, not the client-supplied MIME type.
function sniffExtension(buf: Buffer): string | null {
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") return "webp";
  if (buf.toString("ascii", 0, 4) === "GIF8") return "gif";
  return null;
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ error: "Not logged in" }, { status: 401 });

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return Response.json({ error: "No file uploaded" }, { status: 400 });
  if (file.size > MAX_BYTES) return Response.json({ error: "Image must be under 5 MB" }, { status: 413 });

  const buf = Buffer.from(await file.arrayBuffer());
  const ext = sniffExtension(buf);
  if (!ext) return Response.json({ error: "Only JPG, PNG, WebP or GIF images are allowed" }, { status: 415 });

  const name = `${Date.now()}-${randomBytes(6).toString("hex")}.${ext}`;
  await fs.mkdir(MEDIA_DIR, { recursive: true });
  await fs.writeFile(path.join(MEDIA_DIR, name), buf);

  return Response.json({ url: `/blog-media/${name}` });
}
