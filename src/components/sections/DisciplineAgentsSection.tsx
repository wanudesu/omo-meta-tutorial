"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function DisciplineAgentsSection() {
  const { t } = useI18n();

  const agents = [
    {
      id: "sisyphus",
      color: "indigo",
      name: t.agents.sisyphus.name,
      model: t.agents.sisyphus.model,
      role: t.agents.sisyphus.role,
      concept: t.agents.sisyphus.concept,
      phases: [
        { name: "Intent Gate", desc: t.agents.sisyphus.phases.intentGate },
        { name: "Assessment", desc: t.agents.sisyphus.phases.assessment },
        { name: "Orchestration", desc: t.agents.sisyphus.phases.orchestration },
      ],
      code: `// Sisyphus is your main orchestrator
// Type your request naturally - he figures out the rest

ulw Implement user authentication with JWT
// Sisyphus will:
// 1. Explore codebase patterns
// 2. Create a detailed plan
// 3. Delegate to specialists
// 4. Verify everything works`,
    },
    {
      id: "hephaestus",
      color: "amber",
      name: t.agents.hephaestus.name,
      model: t.agents.hephaestus.model,
      role: t.agents.hephaestus.role,
      concept: t.agents.hephaestus.concept,
      phases: [
        { name: "Explore", desc: t.agents.hephaestus.phases.explore },
        { name: "Plan", desc: t.agents.hephaestus.phases.plan },
        { name: "Execute", desc: t.agents.hephaestus.phases.execute },
        { name: "Verify", desc: t.agents.hephaestus.phases.verify },
      ],
      code: `// Hephaestus = autonomous deep work
// Best for: complex refactoring, architecture decisions

/hephaestus Rewrite the data layer to use Drizzle ORM
// He will:
// - Fire 5 explore agents simultaneously
// - Analyze patterns across the codebase
// - Create an execution plan
// - Complete the task end-to-end`,
    },
    {
      id: "prometheus",
      color: "emerald",
      name: t.agents.prometheus.name,
      model: t.agents.prometheus.model,
      role: t.agents.prometheus.role,
      concept: t.agents.prometheus.concept,
      phases: [
        { name: "Interview", desc: t.agents.prometheus.phases.interview },
        { name: "Metis", desc: t.agents.prometheus.phases.metis },
        { name: "Momus", desc: t.agents.prometheus.phases.momus },
        { name: "Output", desc: t.agents.prometheus.phases.output },
      ],
      code: `// Prometheus = planning mode
// Best for: large features, uncertain scope

/prometheus Build a real-time chat system
// He will:
// 1. Ask clarifying questions
// 2. Explore your codebase
// 3. Run gap analysis (Metis)
// 4. Validate with Momus
// 5. Output detailed execution plan`,
    },
  ];

  const categories = [
    { name: t.agents.categories.visual.name, desc: t.agents.categories.visual.desc },
    { name: t.agents.categories.ultrabrain.name, desc: t.agents.categories.ultrabrain.desc },
    { name: t.agents.categories.quick.name, desc: t.agents.categories.quick.desc },
    { name: t.agents.categories.deep.name, desc: t.agents.categories.deep.desc },
    { name: t.agents.categories.writing.name, desc: t.agents.categories.writing.desc },
    { name: t.agents.categories.git.name, desc: t.agents.categories.git.desc },
  ];

  const colorClasses = {
    indigo: {
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/30",
      text: "text-indigo-400",
    },
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      text: "text-amber-400",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
    },
  };

  return (
    <section id="agents" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Feature 02</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.agents.title} <span className="text-accent">{t.agents.titleAccent}</span>
          </h2>
        </div>

        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-16">
          {t.agents.description}
          <br />
          <span className="text-text-muted">{t.agents.description2}</span>
        </p>

        <div className="space-y-16">
          {agents.map((agent) => {
            const colors = colorClasses[agent.color as keyof typeof colorClasses];
            return (
              <div key={agent.id} id={agent.id} className="scroll-mt-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <span className={`text-lg font-semibold ${colors.text}`}>
                      {agent.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">{agent.name}</h3>
                    <p className="text-sm text-text-muted font-mono">{agent.model}</p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border ${agent.color === "indigo" ? "border-indigo-500/20 bg-indigo-500/5" : agent.color === "amber" ? "border-amber-500/20 bg-amber-500/5" : "border-emerald-500/20 bg-emerald-500/5"} mb-6`}>
                  <p className="text-text-primary">
                    <span className={`font-medium ${colors.text}`}>{agent.role}</span>
                    <span className="text-text-secondary"> — </span>
                    <span className="text-text-secondary">{agent.concept}</span>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                      {t.agents.phases}
                    </h4>
                    <div className="space-y-3">
                      {agent.phases.map((phase, index) => (
                        <div key={phase.name} className="flex items-center gap-3">
                          <span className={`text-xs font-mono ${colors.text}`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <span className="text-sm font-medium">{phase.name}</span>
                            <span className="text-text-muted text-sm ml-2">— {phase.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <CodeBlock
                    language="bash"
                    code={agent.code}
                    filename={`${agent.id}.sh`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-6 rounded-xl border border-border bg-bg-card">
          <h4 className="font-medium mb-4">{t.agents.categoryRouting}</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {categories.map((cat) => (
              <div key={cat.name} className="p-3 rounded-lg bg-bg-secondary">
                <code className="text-accent">{cat.name}</code>
                <p className="text-text-muted text-xs mt-1">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
