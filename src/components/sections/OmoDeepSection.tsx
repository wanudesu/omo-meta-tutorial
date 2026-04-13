"use client";

import { useI18n } from "@/i18n";

export default function OmoDeepSection() {
  const { t } = useI18n();

  return (
    <section id="omo" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.omoDeep.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.omoDeep.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.omoDeep.subtitle}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">{t.omoDeep.whatIs.title}</h3>
          <p className="text-zinc-400 leading-relaxed">
            {t.omoDeep.whatIs.description}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.omoDeep.keyFeatures.title}</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤖</span>
                <h4 className="text-lg font-medium">{t.omoDeep.keyFeatures.agents.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.omoDeep.keyFeatures.agents.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h4 className="text-lg font-medium">{t.omoDeep.keyFeatures.ultrawork.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.omoDeep.keyFeatures.ultrawork.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔄</span>
                <h4 className="text-lg font-medium">{t.omoDeep.keyFeatures.ralphLoop.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.omoDeep.keyFeatures.ralphLoop.description}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">{t.omoDeep.architecture.title}</h3>
          <p className="text-zinc-400 mb-6">{t.omoDeep.architecture.description}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-indigo-500/30 bg-indigo-500/5">
              <h4 className="font-medium text-indigo-400 mb-2">Sisyphus</h4>
              <p className="text-sm text-zinc-400">{t.omoDeep.architecture.sisyphus}</p>
            </div>
            <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
              <h4 className="font-medium text-amber-400 mb-2">Hephaestus</h4>
              <p className="text-sm text-zinc-400">{t.omoDeep.architecture.hephaestus}</p>
            </div>
            <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5">
              <h4 className="font-medium text-emerald-400 mb-2">Prometheus</h4>
              <p className="text-sm text-zinc-400">{t.omoDeep.architecture.prometheus}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
