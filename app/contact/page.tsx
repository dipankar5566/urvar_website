"use client";

import { useLang } from "@/context/LangContext";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <section className="bg-urvar-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.contact.heading}</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">{t.contact.sub}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-urvar-dark mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-urvar-light rounded-2xl p-6">
                <h3 className="font-bold text-urvar-dark mb-4 flex items-center gap-2">
                  <span>📍</span> {t.contact.address_heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sewli, Telenipara, Bandipara<br />
                  North 24 Parganas<br />
                  West Bengal – 700121<br />
                  India
                </p>
              </div>

              {/* Phone */}
              <div className="bg-urvar-light rounded-2xl p-6">
                <h3 className="font-bold text-urvar-dark mb-4 flex items-center gap-2">
                  <span>📞</span> {t.contact.or_call}
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919035708943"
                    className="flex items-center gap-3 text-urvar-green font-semibold hover:underline"
                  >
                    +91 90357 08943
                  </a>
                  <a
                    href="tel:+918335825566"
                    className="flex items-center gap-3 text-urvar-green font-semibold hover:underline"
                  >
                    +91 83358 25566
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919035708943"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
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
