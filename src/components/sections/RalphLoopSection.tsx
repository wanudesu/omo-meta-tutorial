"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function RalphLoopSection() {
  const { t } = useI18n();

  const steps = [
    { num: "1", title: t.ralphLoop.steps.start.title, desc: t.ralphLoop.steps.start.desc },
    { num: "2", title: t.ralphLoop.steps.work.title, desc: t.ralphLoop.steps.work.desc },
    { num: "3", title: t.ralphLoop.steps.persist.title, desc: t.ralphLoop.steps.persist.desc },
    { num: "4", title: t.ralphLoop.steps.check.title, desc: t.ralphLoop.steps.check.desc },
    { num: "✓", title: t.ralphLoop.steps.complete.title, desc: t.ralphLoop.steps.complete.desc, isComplete: true },
  ];

  const scenarios = [
    { scenario: t.ralphLoop.table.scenario1, command: "/ralph-loop" },
    { scenario: t.ralphLoop.table.scenario2, command: "/ulw-loop" },
    { scenario: t.ralphLoop.table.scenario3, command: "/ulw-loop" },
  ];

  return (
    <section id="ralph-loop" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Feature 04</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.ralphLoop.title} <span className="text-accent">{t.ralphLoop.titleAccent}</span>
          </h2>
        </div>

        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-12">
          {t.ralphLoop.description}
          <br />
          <span className="text-text-muted">{t.ralphLoop.description2} </span>
          <code className="text-accent">{t.ralphLoop.done}</code>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-border bg-bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center">
                <span className="text-xs font-mono text-text-muted">01</span>
              </div>
              <h3 className="text-lg font-medium">/ralph-loop</h3>
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
                /ulw-loop{" "}
                <span className="text-xs text-accent uppercase">
                  ({t.ralphLoop.ulwLoop})
                </span>
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
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.isComplete
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </div>
              ))}
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
    "max_iterations": 100,        // Max loop iterations
    "completion_promise": "DONE",  // When to stop
    "debounce_ms": 2000,           // Delay between checks
    "persist_state": true          // Save .ralph-loop.json
  },
  
  // ulw-loop adds ultrawork mode
  "ultrawork": {
    "aggressive_parallel": true,
    "deep_research": true
  }
}`}
            filename="oh-my-openagent.jsonc"
          />
        </div>

        <div className="p-6 rounded-xl border border-border bg-bg-card">
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
                {scenarios.map((row, i) => (
                  <tr key={i} className="border-b border-border-subtle">
                    <td className="py-3">{row.scenario}</td>
                    <td className="py-3">
                      <code className="text-accent">{row.command}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg border border-border bg-bg-secondary">
          <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t.ralphLoop.proTip }} />
        </div>
      </div>
    </section>
  );
}
