"use client";

import { useI18n } from "@/i18n";

export default function FAQSection() {
  const { t } = useI18n();

  return (
    <section id="faq" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.faq.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.faq.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.faq.questions.map((q, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-indigo-500/30 transition-colors"
            >
              <h3 className="text-lg font-medium mb-3">{q.q}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{q.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
