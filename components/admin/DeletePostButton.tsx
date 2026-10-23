"use client";

import { useState } from "react";
import { deletePostAction } from "@/app/admin/actions";

// Two-step delete (no browser confirm dialog): first click arms it.
export default function DeletePostButton({ slug }: { slug: string }) {
  const [armed, setArmed] = useState(false);

  if (!armed) {
    return (
      <button type="button" onClick={() => setArmed(true)} className="text-sm text-red-700 hover:text-red-900 px-2">
        Delete
      </button>
    );
  }

  return (
    <form action={deletePostAction} className="flex items-center gap-1">
      <input type="hidden" name="slug" value={slug} />
      <button type="submit" className="text-sm font-semibold text-white bg-red-700 hover:bg-red-800 px-3 py-1 rounded-full">
        Confirm delete
      </button>
      <button type="button" onClick={() => setArmed(false)} className="text-sm text-neutral-500 px-2">
        Cancel
      </button>
    </form>
  );
}
