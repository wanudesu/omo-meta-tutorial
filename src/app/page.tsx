"use client";

import { useI18n } from "@/i18n";
import UltraworkSection from "@/components/sections/UltraworkSection";
import DisciplineAgentsSection from "@/components/sections/DisciplineAgentsSection";
import HashAnchorSection from "@/components/sections/HashAnchorSection";
import RalphLoopSection from "@/components/sections/RalphLoopSection";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      <div className="gradient-hero">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-xs text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {t.hero.title}
              <br />
              <span className="text-text-secondary">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              {t.hero.description}
              <br />
              <span className="text-text-muted">{t.hero.descriptionJp}</span>
            </p>
          </div>

          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/code-yeongyu/oh-my-openagent"
              className="px-4 py-2 rounded-lg border border-border hover:border-text-muted hover:bg-bg-secondary transition-colors"
            >
              {t.hero.github}
            </a>
            <a
              href="https://ohmyopenagent.com"
              className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover transition-colors text-white"
            >
              {t.hero.getStarted}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <UltraworkSection />
        <DisciplineAgentsSection />
        <HashAnchorSection />
        <RalphLoopSection />
      </div>
    </div>
  );
}
