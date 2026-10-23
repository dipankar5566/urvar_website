import { promises as fs } from "fs";
import path from "path";
import { MEDIA_DIR } from "@/lib/blog/store";

// Serves images uploaded from /admin. They can't go in public/ because
// `next start` only serves files that were in public/ at build time.
const TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
};

export async function GET(_request: Request, ctx: { params: Promise<{ file: string }> }) {
  const { file } = await ctx.params;
  const match = /^[a-z0-9-]+\.(jpg|png|webp|gif)$/.exec(file);
  if (!match) return new Response("Not found", { status: 404 });

  try {
    const data = await fs.readFile(path.join(MEDIA_DIR, file));
    return new Response(data, {
      headers: {
        "Content-Type": TYPES[match[1]],
        // Filenames are unique per upload, so they never change.
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
