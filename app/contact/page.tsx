"use client";

import { useLang } from "@/context/LangContext";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <section className="bg-[#104C36] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-[family-name:var(--font-campaign)] uppercase text-white text-[44px] sm:text-[68px] leading-[1.0]">
            {t.contact.heading}
          </h1>
          <div className="w-9 h-0.5 bg-urvar-green mx-auto my-3.5" />
          <p className="text-white/62 text-base max-w-md mx-auto leading-relaxed">{t.contact.sub}</p>
        </div>
      </section>

      <section className="bg-canvas py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="flex-1 min-w-0 bg-canvas border border-hairline p-7 sm:p-9">
            <h2 className="font-bold text-ink text-lg uppercase tracking-[0.05em] mb-7">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="border border-hairline">
              <div className="bg-canvas px-6 py-5.5 border-b border-hairline">
                <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2.5">{t.contact.or_call}</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919035708943" className="text-urvar-green font-bold text-sm">
                    +91 90357 08943
                  </a>
                  <a href="tel:+918335825566" className="text-urvar-green font-bold text-sm">
                    +91 83358 25566
                  </a>
                </div>
              </div>
              <div className="bg-canvas px-6 py-5.5 border-b border-hairline">
                <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2.5">Email Us</p>
                <a href="mailto:mail.bharatorganics@gmail.com" className="text-urvar-green font-bold text-sm break-all">
                  mail.bharatorganics@gmail.com
                </a>
              </div>
              <div className="bg-canvas px-6 py-5.5 border-b border-hairline">
                <p className="text-[11px] font-bold text-stone tracking-[1.5px] uppercase mb-2.5">{t.contact.address_heading}</p>
                <p className="text-mute text-sm leading-relaxed">
                  Sewli, Telenipara, Bandipara
                  <br />
                  North 24 Parganas
                  <br />
                  West Bengal – 700121
                </p>
              </div>
              <a
                href="https://wa.me/919035708943"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-[15px] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.1 1.504 5.832L0 24l6.335-1.481A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.72.869.934-3.619-.234-.372A9.818 9.818 0 1112 21.818z" />
                </svg>
                {t.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
