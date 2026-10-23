import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/session";
import { getPost } from "@/lib/blog/store";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";
import { postFormProps } from "../../formProps";

type Props = { params: Promise<{ slug: string }> };

export default async function EditPostPage({ params }: Props) {
  await requireAdmin();
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <AdminHeader />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Link href="/admin/blog" className="text-sm text-neutral-500 hover:text-urvar-dark">
          ← All posts
        </Link>
        <h1 className="text-2xl font-bold text-urvar-dark mt-2 mb-6">Edit post</h1>
        <PostForm post={post} {...await postFormProps()} />
      </main>
    </>
  );
}
