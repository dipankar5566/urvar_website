import { redirect } from "next/navigation";
import Image from "next/image";
import { adminConfigured, isAdmin } from "@/lib/admin/session";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin/blog");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-hairline p-8">
        <Image src="/logo.svg" alt="Urvar Natural" width={120} height={40} className="mb-6" />
        <h1 className="text-xl font-bold text-urvar-dark mb-1">Blog admin</h1>
        <p className="text-sm text-neutral-600 mb-6">Sign in to write and publish blog posts.</p>
        {adminConfigured() ? (
          <LoginForm />
        ) : (
          <p className="text-sm text-red-700 bg-red-50 border border-red-200 p-3">
            Admin login is not set up. Add <code>ADMIN_PASSWORD</code> and{" "}
            <code>ADMIN_SESSION_SECRET</code> (32+ characters) to <code>.env.local</code> on the
            server, then restart the site.
          </p>
        )}
      </div>
    </div>
  );
}
