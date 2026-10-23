import Link from "next/link";
import { requireAdmin } from "@/lib/admin/session";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";
import { postFormProps } from "../formProps";

export default async function NewPostPage() {
  await requireAdmin();

  return (
    <>
      <AdminHeader />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Link href="/admin/blog" className="text-sm text-neutral-500 hover:text-urvar-dark">
          ← All posts
        </Link>
        <h1 className="text-2xl font-bold text-urvar-dark mt-2 mb-6">New post</h1>
        <PostForm {...await postFormProps()} />
      </main>
    </>
  );
}
