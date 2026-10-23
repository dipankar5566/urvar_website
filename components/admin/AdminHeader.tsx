import Link from "next/link";
import Image from "next/image";
import { logoutAction } from "@/app/admin/actions";

export default function AdminHeader() {
  return (
    <header className="bg-urvar-dark text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/admin/blog" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="" width={32} height={32} className="brightness-0 invert" />
          <span className="font-semibold">Blog admin</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/blog" target="_blank" className="text-white/70 hover:text-white">
            View blog ↗
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="text-white/70 hover:text-white">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
