"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function UltraworkSection() {
  const { t } = useI18n();

  const features = [
    { title: t.ultrawork.features.autoPlanning.title, description: t.ultrawork.features.autoPlanning.desc },
    { title: t.ultrawork.features.deepResearch.title, description: t.ultrawork.features.deepResearch.desc },
    { title: t.ultrawork.features.aggressiveParallel.title, description: t.ultrawork.features.aggressiveParallel.desc },
    { title: t.ultrawork.features.selfCorrection.title, description: t.ultrawork.features.selfCorrection.desc },
  ];

  const flowSteps = [
    { phase: "01", title: t.ultrawork.phases.intentGate.title, desc: t.ultrawork.phases.intentGate.desc },
    { phase: "02", title: t.ultrawork.phases.assessment.title, desc: t.ultrawork.phases.assessment.desc },
    { phase: "03", title: t.ultrawork.phases.orchestrate.title, desc: t.ultrawork.phases.orchestrate.desc },
    { phase: "04", title: t.ultrawork.phases.verify.title, desc: t.ultrawork.phases.verify.desc },
  ];

  return (
    <section id="ultrawork" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.ultrawork.icon}</span>
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
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">{t.ultrawork.howItWorks}</h3>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent rounded-3xl" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
              {flowSteps.map((step) => (
                <div key={step.phase} className="text-center">
                  <div className="text-4xl font-bold text-accent/20 mb-2">
                    {step.phase}
                  </div>
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-text-muted mt-1">{step.desc}</div>
                </div>
              ))}
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
