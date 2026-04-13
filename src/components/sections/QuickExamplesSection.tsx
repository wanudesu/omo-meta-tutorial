"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function QuickExamplesSection() {
  const { t } = useI18n();

  const examples = [
    { key: "simpleTask", color: "emerald" },
    { key: "complexTask", color: "indigo" },
    { key: "refactoring", color: "amber" },
  ];

  const colorClasses = {
    emerald: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/5",
      text: "text-emerald-400",
    },
    indigo: {
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/5",
      text: "text-indigo-400",
    },
    amber: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      text: "text-amber-400",
    },
  };

  return (
    <section id="examples" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.quickExamples.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.quickExamples.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.quickExamples.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {examples.map((example) => {
            const data = t.quickExamples[example.key as keyof typeof t.quickExamples] as {
              title: string;
              description: string;
              before: string;
              after: string;
              beforeResult: string;
              afterResult: string;
            };
            const colors = colorClasses[example.color as keyof typeof colorClasses];
            
            return (
              <div key={example.key} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <h3 className="text-xl font-medium mb-2">{data.title}</h3>
                <p className="text-zinc-400 text-sm mb-6">{data.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <CodeBlock
                      language="bash"
                      code={data.before}
                      filename="before.sh"
                    />
                    <p className="text-xs text-zinc-500 mt-2">{data.beforeResult}</p>
                  </div>
                  <div>
                    <div className={`p-4 rounded-lg border ${colors.border} ${colors.bg} mb-2`}>
                      <CodeBlock
                        language="bash"
                        code={data.after}
                        filename="after.sh"
                      />
                    </div>
                    <p className={`text-xs ${colors.text} mt-2`}>{data.afterResult}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
