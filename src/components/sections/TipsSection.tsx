"use client";

import { useI18n } from "@/i18n";

export default function TipsSection() {
  const { t } = useI18n();

  const categories = [
    { key: "writing", color: "indigo" },
    { key: "workflow", color: "emerald" },
    { key: "debugging", color: "amber" },
  ];

  const colorClasses = {
    indigo: {
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/5",
      text: "text-indigo-400",
      dot: "bg-indigo-500",
    },
    emerald: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/5",
      text: "text-emerald-400",
      dot: "bg-emerald-500",
    },
    amber: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      text: "text-amber-400",
      dot: "bg-amber-500",
    },
  };

  return (
    <section id="tips" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.tips.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.tips.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.tips.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const data = t.tips.categories[cat.key as keyof typeof t.tips.categories] as {
              title: string;
              tips: string[];
            };
            const colors = colorClasses[cat.color as keyof typeof colorClasses];
            
            return (
              <div
                key={cat.key}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg}`}
              >
                <h3 className={`text-lg font-medium mb-4 ${colors.text}`}>
                  {data.title}
                </h3>
                <ul className="space-y-3">
                  {data.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
