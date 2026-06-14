"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";

const inputCls =
  "w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-urvar-green focus:border-transparent";
const labelCls = "block text-sm font-medium text-neutral-700 mb-1";

export default function DealerEnquiryForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    // Tag the lead so it routes to the channel team (see docs/redesign/07 + 08).
    data.append("audience", "Dealer");
    data.append("_subject", "New Dealership Application — Urvar Natural");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
      : null;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(endpoint, {
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
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="d-name">
            {t.dealer.form_name}
          </label>
          <input id="d-name" type="text" name="name" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="d-business">
            {t.dealer.form_business}
          </label>
          <input
            id="d-business"
            type="text"
            name="business"
            required
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="d-phone">
            {t.dealer.form_phone}
          </label>
          <input
            id="d-phone"
            type="tel"
            name="phone"
            required
            inputMode="tel"
            className={inputCls}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="d-type">
            {t.dealer.form_type}
          </label>
          <select id="d-type" name="business_type" required className={inputCls} defaultValue="">
            <option value="" disabled>
              —
            </option>
            <option>{t.dealer.form_type_dealer}</option>
            <option>{t.dealer.form_type_distributor}</option>
            <option>{t.dealer.form_type_fpo}</option>
            <option>{t.dealer.form_type_other}</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="d-state">
            {t.dealer.form_state}
          </label>
          <input id="d-state" type="text" name="state" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="d-district">
            {t.dealer.form_district}
          </label>
          <input
            id="d-district"
            type="text"
            name="district"
            required
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="d-portfolio">
          {t.dealer.form_portfolio}
        </label>
        <input
          id="d-portfolio"
          type="text"
          name="portfolio"
          className={inputCls}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="d-message">
          {t.dealer.form_message}
        </label>
        <textarea
          id="d-message"
          name="message"
          rows={3}
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Honeypot (spam control — see docs/redesign/07) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-urvar-green hover:bg-urvar-dark disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors min-h-[48px]"
      >
        {status === "sending" ? t.dealer.form_sending : t.dealer.form_submit}
      </button>

      {status === "success" && (
        <p className="text-success text-sm font-medium text-center">
          {t.dealer.form_success}
        </p>
      )}
      {status === "error" && (
        <p className="text-error text-sm font-medium text-center">
          {t.dealer.form_error}
        </p>
      )}
    </form>
  );
}
