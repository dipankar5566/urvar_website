import Link from "next/link";
import Image from "next/image";
import { requireAdmin } from "@/lib/admin/session";
import { listAllPosts } from "@/lib/blog/store";
import AdminHeader from "@/components/admin/AdminHeader";
import DeletePostButton from "@/components/admin/DeletePostButton";

type Props = { searchParams: Promise<{ saved?: string; deleted?: string }> };

export default async function AdminBlogList({ searchParams }: Props) {
  await requireAdmin();
  const { saved, deleted } = await searchParams;
  const posts = await listAllPosts();

  return (
    <>
      <AdminHeader />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold text-urvar-dark">Blog posts</h1>
          <Link
            href="/admin/blog/new"
            className="bg-urvar-green hover:bg-urvar-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full"
          >
            + New post
          </Link>
        </div>

        {saved && (
          <p className="mb-4 text-sm bg-urvar-light text-urvar-dark border border-urvar-green/30 px-4 py-3">
            Saved.{" "}
            <Link href={`/blog/${saved}`} target="_blank" className="underline font-semibold">
              View on site ↗
            </Link>{" "}
            (drafts are only visible here)
          </p>
        )}
        {deleted && (
          <p className="mb-4 text-sm bg-neutral-100 border border-hairline px-4 py-3">Post deleted.</p>
        )}

        {posts.length === 0 ? (
          <p className="text-neutral-600">No posts yet. Click “New post” to write your first one.</p>
        ) : (
          <ul className="bg-white border border-hairline divide-y divide-hairline">
            {posts.map((post) => (
              <li key={post.slug} className="flex items-center gap-4 p-4">
                <div className="relative w-20 h-14 shrink-0 bg-neutral-100">
                  <Image src={post.image} alt="" fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 ${
                        post.status === "published"
                          ? "bg-urvar-light text-urvar-dark"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {post.status === "published" ? "Live" : "Draft"}
                    </span>
                    {post.bn && <span className="text-[11px] text-neutral-500">EN + বাংলা</span>}
                  </div>
                  <p className="font-semibold text-urvar-dark truncate">{post.en.title}</p>
                  <p className="text-xs text-neutral-500">
                    {post.category} · {post.date}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {post.status === "published" && (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-sm text-neutral-600 hover:text-urvar-dark px-2"
                    >
                      View
                    </Link>
                  )}
                  <Link
                    href={`/admin/blog/${post.slug}/edit`}
                    className="text-sm font-semibold text-urvar-green hover:text-urvar-dark px-2"
                  >
                    Edit
                  </Link>
                  <DeletePostButton slug={post.slug} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
