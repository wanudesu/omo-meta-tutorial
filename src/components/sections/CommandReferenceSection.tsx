"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function CommandReferenceSection() {
  const { t } = useI18n();

  const commandGroups = [
    {
      key: "slashCommands",
      icon: "/",
    },
    {
      key: "prefixes",
      icon: ">",
    },
    {
      key: "shortcuts",
      icon: "*",
    },
  ];

  return (
    <section id="commands" className="py-24 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.commands.icon}</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.commands.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {t.commands.subtitle}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">{t.commands.overview.title}</h3>
          <p className="text-zinc-400">{t.commands.overview.description}</p>
        </div>

        <div className="space-y-8">
          {commandGroups.map((group) => {
            const data = t.commands[group.key as keyof typeof t.commands] as {
              title: string;
              description: string;
              commands: Array<{ name: string; description: string }>;
            };
            
            return (
              <div key={group.key} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono">
                    {group.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{data.title}</h3>
                    <p className="text-sm text-zinc-500">{data.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {data.commands.map((cmd) => (
                    <div
                      key={cmd.name}
                      className="flex items-start gap-4 p-3 rounded-lg bg-zinc-950/50"
                    >
                      <code className="text-indigo-400 font-mono text-sm whitespace-nowrap">
                        {cmd.name}
                      </code>
                      <p className="text-zinc-400 text-sm">{cmd.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
