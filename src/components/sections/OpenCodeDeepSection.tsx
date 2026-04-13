"use client";

import { useI18n } from "@/i18n";

export default function OpenCodeDeepSection() {
  const { t } = useI18n();

  return (
    <section id="opencode" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.openCodeDeep.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.openCodeDeep.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.openCodeDeep.subtitle}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">{t.openCodeDeep.whatIs.title}</h3>
          <p className="text-zinc-400 leading-relaxed">
            {t.openCodeDeep.whatIs.description}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.openCodeDeep.coreFeatures.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💬</span>
                <h4 className="text-lg font-medium">{t.openCodeDeep.coreFeatures.chat.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.openCodeDeep.coreFeatures.chat.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📁</span>
                <h4 className="text-lg font-medium">{t.openCodeDeep.coreFeatures.fileOperations.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.openCodeDeep.coreFeatures.fileOperations.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🖥️</span>
                <h4 className="text-lg font-medium">{t.openCodeDeep.coreFeatures.terminal.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.openCodeDeep.coreFeatures.terminal.description}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔌</span>
                <h4 className="text-lg font-medium">{t.openCodeDeep.coreFeatures.extensions.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm">{t.openCodeDeep.coreFeatures.extensions.description}</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.openCodeDeep.howItWorks.title}</h3>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <p className="text-zinc-400 mb-4">{t.openCodeDeep.howItWorks.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">1. {t.openCodeDeep.howItWorks.step1}</span>
              <span className="text-zinc-600">→</span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">2. {t.openCodeDeep.howItWorks.step2}</span>
              <span className="text-zinc-600">→</span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">3. {t.openCodeDeep.howItWorks.step3}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">{t.openCodeDeep.vsTraditionalIDE.title}</h3>
          <p className="text-zinc-400 mb-4">{t.openCodeDeep.vsTraditionalIDE.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <h4 className="font-medium mb-4">{t.openCodeDeep.vsTraditionalIDE.traditional.title}</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                {t.openCodeDeep.vsTraditionalIDE.traditional.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-zinc-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
              <h4 className="font-medium mb-4 text-indigo-400">{t.openCodeDeep.vsTraditionalIDE.opencode.title}</h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                {t.openCodeDeep.vsTraditionalIDE.opencode.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
