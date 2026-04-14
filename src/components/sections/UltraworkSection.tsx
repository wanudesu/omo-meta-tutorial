"use client";

import { useI18n } from "@/i18n";
import { SectionIcon } from "../SectionIcon";
import CodeBlock from "../CodeBlock";

const FEATURE_KEYS = ["autoPlanning", "deepResearch", "aggressiveParallel", "selfCorrection"] as const;
const FLOW_KEYS = ["intentGate", "assessment", "orchestrate", "verify"] as const;

export default function UltraworkSection() {
  const { t } = useI18n();

  return (
    <section id="ultrawork" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon icon={t.ultrawork.icon as any} className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              {t.ultrawork.title}
              <span className="text-accent"> / </span>
              <span className="text-text-secondary">ulw</span>
            </h2>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-4">
            {t.ultrawork.subtitle}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {t.ultrawork.description}
            <br />
            <span className="text-text-muted">{t.ultrawork.description2}</span>
          </p>
        </div>

        <div className="mb-12 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
          <h3 className="text-xl font-medium mb-4">{t.ultrawork.whatIs.title}</h3>
          <p className="text-zinc-400 leading-relaxed">{t.ultrawork.whatIs.description}</p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.ultrawork.usage}</h3>
          <CodeBlock
            language="bash"
            code={`# Activate ultrawork mode
ulw Please refactor error handling under src/api/

# Or use the full command
ultrawork Migrate auth from OAuth2 to OIDC`}
            filename="terminal"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 stagger-children">
          {FEATURE_KEYS.map((key) => {
            const feature = t.ultrawork.features[key];
            return (
              <div
                key={key}
                className="p-6 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">{t.ultrawork.howItWorks}</h3>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent rounded-3xl" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
              {FLOW_KEYS.map((key, index) => {
                const phase = t.ultrawork.phases[key];
                return (
                  <div key={key} className="text-center">
                    <div className="text-4xl font-bold text-accent/20 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm font-medium">{phase.title}</div>
                    <div className="text-xs text-text-muted mt-1">{phase.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-bg-card mb-12">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <div>
              <h4 className="font-medium mb-2">{t.ultrawork.keyDiff.title}</h4>
              <p className="text-text-secondary text-sm">{t.ultrawork.keyDiff.desc}</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
          <h4 className="font-medium mb-2">{t.ultrawork.whenToUse.title}</h4>
          <p className="text-emerald-400 text-sm mb-2">✓ {t.ultrawork.whenToUse.good}</p>
          <p className="text-amber-400 text-sm">✗ {t.ultrawork.whenToUse.bad}</p>
        </div>
      </div>
    </section>
  );
}
