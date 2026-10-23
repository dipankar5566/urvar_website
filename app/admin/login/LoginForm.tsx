"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <form action={action} className="space-y-4">
      <label className="block">
        <span className="block text-sm font-semibold text-neutral-700 mb-1">Password</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full border border-hairline px-3 py-2.5 focus:outline-none focus:border-urvar-green"
        />
      </label>
      {state?.error && <p className="text-sm text-red-700">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-urvar-green hover:bg-urvar-dark text-white font-semibold py-3 rounded-full disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
