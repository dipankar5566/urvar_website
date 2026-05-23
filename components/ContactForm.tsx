"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";

export default function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.name}</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-urvar-green focus:border-transparent"
          placeholder="Ramesh Kumar"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.phone}</label>
        <input
          type="tel"
          name="phone"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-urvar-green focus:border-transparent"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.message}</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-urvar-green focus:border-transparent resize-none"
          placeholder="I'd like to inquire about..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-urvar-green hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {status === "sending" ? t.contact.sending : t.contact.submit}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm font-medium text-center">{t.contact.success}</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm font-medium text-center">{t.contact.error}</p>
      )}
    </form>
  );
}
