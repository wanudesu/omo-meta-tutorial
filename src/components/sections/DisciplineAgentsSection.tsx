"use client";

import { useI18n } from "@/i18n";
import { SectionIcon } from "../SectionIcon";
import CodeBlock from "../CodeBlock";

const AGENT_IDS = ["sisyphus", "hephaestus", "prometheus"] as const;
const CATEGORY_KEYS = ["visual", "ultrabrain", "quick", "deep", "writing", "git"] as const;

const colorClasses = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
  },
};

const agentColors: Record<string, keyof typeof colorClasses> = {
  sisyphus: "indigo",
  hephaestus: "amber",
  prometheus: "emerald",
};

const phaseKeys: Record<string, readonly string[]> = {
  sisyphus: ["intentGate", "assessment", "orchestration"] as const,
  hephaestus: ["explore", "plan", "execute", "verify"] as const,
  prometheus: ["interview", "metis", "momus", "output"] as const,
};

export default function DisciplineAgentsSection() {
  const { t } = useI18n();

  return (
    <section id="agents" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon icon={t.agents.icon as any} className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              {t.agents.title} <span className="text-accent">{t.agents.titleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-4">
            {t.agents.subtitle}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-4">
            {t.agents.description}
            <br />
            <span className="text-text-muted">{t.agents.description2}</span>
          </p>
        </div>

        <div className="space-y-16">
          {AGENT_IDS.map((agentId) => {
            const agentData = t.agents[agentId as keyof typeof t.agents] as {
              name: string;
              model: string;
              role: string;
              concept: string;
              phases: Record<string, string>;
              example: string;
              whenToUse: string;
            };
            const colorKey = agentColors[agentId];
            const colors = colorClasses[colorKey];
            const keys = phaseKeys[agentId];

            return (
              <div key={agentId} id={agentId} className="scroll-mt-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <span className={`text-lg font-semibold ${colors.text}`}>
                      {agentData.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">{agentData.name}</h3>
                    <p className="text-sm text-text-muted font-mono">{agentData.model}</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border ${colorKey === "indigo" ? "border-indigo-500/20 bg-indigo-500/5" : colorKey === "amber" ? "border-amber-500/20 bg-amber-500/5" : "border-emerald-500/20 bg-emerald-500/5"} mb-6`}>
                  <p className="text-text-primary">
                    <span className={`font-medium ${colors.text}`}>{agentData.role}</span>
                    <span className="text-text-secondary"> — </span>
                    <span className="text-text-secondary">{agentData.concept}</span>
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 mb-4">
                  <p className={`text-sm font-medium ${colors.text}`}>{agentData.whenToUse}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                      {t.agents.phases}
                    </h4>
                    <div className="space-y-3">
                      {keys.map((phaseKey, index) => (
                        <div key={phaseKey} className="flex items-center gap-3">
                          <span className={`text-xs font-mono ${colors.text}`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <span className="text-sm font-medium">{phaseKey.charAt(0).toUpperCase() + phaseKey.slice(1)}</span>
                            <span className="text-text-muted text-sm ml-2">— {agentData.phases[phaseKey]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <CodeBlock
                    language="bash"
                    code={agentData.example}
                    filename={`${agentId}.sh`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-6 rounded-xl border border-border bg-bg-card">
          <h4 className="font-medium mb-4">{t.agents.categoryRouting}</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {CATEGORY_KEYS.map((catKey) => {
              const cat = t.agents.categories[catKey as keyof typeof t.agents.categories];
              return (
                <div key={catKey} className="p-3 rounded-lg bg-bg-secondary">
                  <code className="text-accent">{cat.name}</code>
                  <p className="text-text-muted text-xs mt-1">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
