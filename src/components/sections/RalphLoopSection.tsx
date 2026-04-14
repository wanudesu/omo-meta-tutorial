"use client";

import { useI18n } from "@/i18n";
import { SectionIcon } from "../SectionIcon";
import CodeBlock from "../CodeBlock";

const STEP_KEYS = ["start", "work", "persist", "check", "complete"] as const;
const SCENARIO_COMMANDS = ["/ralph-loop", "/ulw-loop", "/ulw-loop"] as const;

export default function RalphLoopSection() {
  const { t } = useI18n();

  return (
    <section id="ralph-loop" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <SectionIcon icon={t.ralphLoop.icon as any} className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.ralphLoop.title} <span className="text-accent">{t.ralphLoop.titleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-4">
            {t.ralphLoop.description}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            <span className="text-text-muted">{t.ralphLoop.description2}</span>
            <code className="text-accent ml-2">{t.ralphLoop.done}</code>
          </p>
        </div>

        <div className="mb-12 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
          <h3 className="text-xl font-medium mb-4">{t.ralphLoop.whatIs.title}</h3>
          <p className="text-zinc-400 leading-relaxed">{t.ralphLoop.whatIs.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center">
                <span className="text-xs font-mono text-text-muted">01</span>
              </div>
              <h3 className="text-lg font-medium">{t.ralphLoop.ralphLoop}</h3>
            </div>
            <p className="text-text-secondary text-sm mb-4">{t.ralphLoop.ralphLoopDesc}</p>
            <CodeBlock
              language="bash"
              code={`/ralph-loop "Build user authentication"
--max-iterations=50
--completion-promise="DONE"`}
            />
          </div>

          <div className="p-6 rounded-xl border border-accent/30 bg-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">02</span>
              </div>
              <h3 className="text-lg font-medium">
                {t.ralphLoop.ulwLoop}
              </h3>
            </div>
            <p className="text-text-secondary text-sm mb-4">{t.ralphLoop.ulwLoopDesc}</p>
            <CodeBlock
              language="bash"
              code={`/ulw-loop "Migrate auth from OAuth2 to OIDC"
--max-iterations=100
--completion-promise="DONE"`}
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.ralphLoop.howItWorks}</h3>
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <div className="space-y-6">
              {STEP_KEYS.map((stepKey, index) => {
                const step = t.ralphLoop.steps[stepKey as keyof typeof t.ralphLoop.steps];
                const isComplete = stepKey === "complete";
                return (
                  <div key={stepKey} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        isComplete
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {isComplete ? "✓" : String(index + 1)}
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-text-secondary text-sm">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.ralphLoop.configuration}</h3>
          <CodeBlock
            language="json"
            code={`// oh-my-openagent.jsonc
{
  "ralph_loop": {
    "max_iterations": 100,
    "completion_promise": "DONE",
    "debounce_ms": 2000,
    "persist_state": true
  },
  
  "ultrawork": {
    "aggressive_parallel": true,
    "deep_research": true
  }
}`}
            filename="oh-my-openagent.jsonc"
          />
        </div>

        <div className="p-6 rounded-xl border border-border bg-bg-card mb-12">
          <h4 className="font-medium mb-4">{t.ralphLoop.whenToUse}</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-text-muted">Scenario</th>
                  <th className="text-left py-2 text-text-muted">Recommendation</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                {STEP_KEYS.slice(0, 3).map((scenarioKey, i) => {
                  const scenarioKeyName = ["scenario1", "scenario2", "scenario3"][i] as "scenario1" | "scenario2" | "scenario3";
                  return (
                    <tr key={scenarioKey} className="border-b border-border-subtle">
                      <td className="py-3">{t.ralphLoop.table[scenarioKeyName]}</td>
                      <td className="py-3">
                        <code className="text-accent">{SCENARIO_COMMANDS[i]}</code>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg border border-border bg-bg-secondary">
          <p className="text-sm text-text-secondary">
            <span className="text-accent">💡</span> {t.ralphLoop.proTip}
          </p>
        </div>
      </div>
    </section>
  );
}
