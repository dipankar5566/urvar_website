import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { randomBytes } from "crypto";
import { seedPosts } from "@/data/posts";
import { SLUG_PATTERN, type Post } from "./types";

// Posts live as one JSON file each under BLOG_DATA_DIR (default
// ./storage/blog, gitignored), so publishing from /admin needs no git
// commit or rebuild. Back this folder up — it is the source of truth.
const ROOT = process.env.BLOG_DATA_DIR || path.join(process.cwd(), "storage", "blog");
const POSTS_DIR = path.join(ROOT, "posts");
export const MEDIA_DIR = path.join(ROOT, "media");

let ready: Promise<void> | null = null;

function ensureStore(): Promise<void> {
  ready ??= (async () => {
    await fs.mkdir(MEDIA_DIR, { recursive: true });
    try {
      await fs.access(POSTS_DIR);
    } catch {
      // First run: seed the original posts into a temp folder, then rename
      // it into place, so parallel build workers never see a half-filled
      // folder. If another worker wins the rename, discard our copy.
      const tmpDir = `${POSTS_DIR}.${randomBytes(4).toString("hex")}.tmp`;
      await fs.mkdir(tmpDir, { recursive: true });
      for (const post of seedPosts()) {
        await fs.writeFile(path.join(tmpDir, `${post.slug}.json`), JSON.stringify(post, null, 2), "utf8");
      }
      try {
        await fs.rename(tmpDir, POSTS_DIR);
      } catch {
        await fs.rm(tmpDir, { recursive: true, force: true });
      }
    }
  })().catch((err) => {
    ready = null;
    throw err;
  });
  return ready;
}

function postFile(slug: string): string {
  if (!SLUG_PATTERN.test(slug)) throw new Error(`Invalid slug: ${slug}`);
  return path.join(POSTS_DIR, `${slug}.json`);
}

async function writePost(post: Post): Promise<void> {
  const file = postFile(post.slug);
  const tmp = `${file}.${randomBytes(4).toString("hex")}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(post, null, 2), "utf8");
  await fs.rename(tmp, file);
}

async function readAll(): Promise<Post[]> {
  await ensureStore();
  const files = (await fs.readdir(POSTS_DIR)).filter((f) => f.endsWith(".json"));
  const posts = await Promise.all(
    files.map(async (f) => JSON.parse(await fs.readFile(path.join(POSTS_DIR, f), "utf8")) as Post)
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt));
}

/** Published posts, newest first. */
export async function listPublishedPosts(): Promise<Post[]> {
  return (await readAll()).filter((p) => p.status === "published");
}

/** Every post including drafts — admin only. */
export async function listAllPosts(): Promise<Post[]> {
  return readAll();
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!SLUG_PATTERN.test(slug)) return null;
  await ensureStore();
  try {
    return JSON.parse(await fs.readFile(postFile(slug), "utf8")) as Post;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function getPublishedPost(slug: string): Promise<Post | null> {
  const post = await getPost(slug);
  return post?.status === "published" ? post : null;
}

export async function savePost(post: Post): Promise<void> {
  await ensureStore();
  await writePost(post);
}

export async function deletePost(slug: string): Promise<void> {
  await ensureStore();
  await fs.rm(postFile(slug), { force: true });
}
