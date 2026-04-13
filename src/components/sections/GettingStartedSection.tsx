"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function GettingStartedSection() {
  const { t } = useI18n();

  return (
    <section id="getting-started" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.gettingStarted.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.gettingStarted.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.gettingStarted.subtitle}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.gettingStarted.prerequisites.title}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {t.gettingStarted.prerequisites.items.map((item, i) => (
              <div key={i} className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                <p className="text-sm text-zinc-400">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.gettingStarted.installation.title}</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium">{t.gettingStarted.installation.step1.title}</h4>
                <p className="text-zinc-400 text-sm mb-3">
                  {t.gettingStarted.installation.step1.desc}
                </p>
                <CodeBlock
                  language="bash"
                  code="bunx oh-my-openagent install"
                  filename="terminal"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium">{t.gettingStarted.installation.step2.title}</h4>
                <p className="text-zinc-400 text-sm mb-3">
                  {t.gettingStarted.installation.step2.desc}
                </p>
                <CodeBlock
                  language="json"
                  code={`// oh-my-openagent.jsonc
{
  "models": {
    "primary": "claude-opus-4-6",
    "secondary": "gpt-5.4"
  }
}`}
                  filename="oh-my-openagent.jsonc"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium">{t.gettingStarted.installation.step3.title}</h4>
                <p className="text-zinc-400 text-sm">
                  {t.gettingStarted.installation.step3.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.gettingStarted.firstCommand.title}</h3>
          <p className="text-zinc-400 mb-4">{t.gettingStarted.firstCommand.description}</p>
          <CodeBlock
            language="bash"
            code={t.gettingStarted.firstCommand.example}
            filename="terminal"
          />
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">{t.gettingStarted.whatsNext.title}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {t.gettingStarted.whatsNext.items.map((item, i) => (
              <div key={i} className="p-4 rounded-lg border border-indigo-500/30 bg-indigo-500/5">
                <p className="text-sm text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
