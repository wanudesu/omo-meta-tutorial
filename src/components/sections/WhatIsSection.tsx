"use client";

import { useI18n } from "@/i18n";
import { SectionIcon } from "../SectionIcon";
import CodeBlock from "../CodeBlock";

export default function WhatIsSection() {
  const { t } = useI18n();

  return (
    <section id="what-is" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon icon={t.whatIs.icon as any} className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.whatIs.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.whatIs.subtitle}
          </p>
        </div>

        <div className="mb-12 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
          <h3 className="text-xl font-medium mb-4">{t.whatIs.overview.title}</h3>
          <p className="text-zinc-400 leading-relaxed">
            {t.whatIs.overview.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="flex items-center gap-3 mb-4">
              <SectionIcon icon="openCodeDeep" className="w-7 h-7 text-indigo-400" />
              <h3 className="text-xl font-medium">{t.whatIs.opencode.title}</h3>
            </div>
            <p className="text-zinc-400 mb-4">{t.whatIs.opencode.description}</p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span>{t.whatIs.opencode.feature1}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span>{t.whatIs.opencode.feature2}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span>{t.whatIs.opencode.feature3}</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <div className="flex items-center gap-3 mb-4">
              <SectionIcon icon="gettingStarted" className="w-7 h-7 text-indigo-400" />
              <h3 className="text-xl font-medium">{t.whatIs.omo.title}</h3>
            </div>
            <p className="text-zinc-400 mb-4">{t.whatIs.omo.description}</p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span>{t.whatIs.omo.feature1}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span>{t.whatIs.omo.feature2}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <span>{t.whatIs.omo.feature3}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.whatIs.howWorks.title}</h3>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                  1
                </div>
                <div>
                  <h4 className="font-medium">{t.whatIs.howWorks.step1.title}</h4>
                  <p className="text-zinc-400 text-sm">
                    {t.whatIs.howWorks.step1.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                  2
                </div>
                <div>
                  <h4 className="font-medium">{t.whatIs.howWorks.step2.title}</h4>
                  <p className="text-zinc-400 text-sm">
                    {t.whatIs.howWorks.step2.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                  3
                </div>
                <div>
                  <h4 className="font-medium">{t.whatIs.howWorks.step3.title}</h4>
                  <p className="text-zinc-400 text-sm">
                    {t.whatIs.howWorks.step3.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-medium">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium">{t.whatIs.howWorks.step4.title}</h4>
                  <p className="text-zinc-400 text-sm">
                    {t.whatIs.howWorks.step4.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">{t.whatIs.example.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-zinc-400 mb-3">{t.whatIs.example.beforeLabel}</p>
              <CodeBlock
                language="bash"
                code={t.whatIs.example.codeBefore}
                filename="without-omo.sh"
              />
            </div>
            <div>
              <p className="text-sm text-zinc-400 mb-3">{t.whatIs.example.afterLabel}</p>
              <CodeBlock
                language="bash"
                code={t.whatIs.example.codeAfter}
                filename="with-omo.sh"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
