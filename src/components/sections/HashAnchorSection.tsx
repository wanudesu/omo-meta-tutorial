"use client";

import { useI18n } from "@/i18n";
import CodeBlock from "../CodeBlock";

export default function HashAnchorSection() {
  const { t } = useI18n();

  const lspTools = [
    {
      name: t.hashAnchor.tools.gotoDefinition.name,
      desc: t.hashAnchor.tools.gotoDefinition.desc,
      example: `// Jump to where 'authMiddleware' is defined
lsp_goto_definition("src/auth.ts", line=10, character=5)`,
    },
    {
      name: t.hashAnchor.tools.findReferences.name,
      desc: t.hashAnchor.tools.findReferences.desc,
      example: `// Find all references to 'UserService'
lsp_find_references("src/services/user.ts", line=5, character=10)`,
    },
    {
      name: t.hashAnchor.tools.rename.name,
      desc: t.hashAnchor.tools.rename.desc,
      example: `// Rename 'getUser' to 'fetchUser' everywhere
lsp_rename("src/api/users.ts", line=15, character=3, newName="fetchUser")`,
    },
    {
      name: t.hashAnchor.tools.symbols.name,
      desc: t.hashAnchor.tools.symbols.desc,
      example: `// List all exports from a file
lsp_symbols("src/utils/validation.ts", scope="document")`,
    },
  ];

  const astTools = [
    {
      name: t.hashAnchor.tools.grepSearch.name,
      desc: t.hashAnchor.tools.grepSearch.desc,
      example: `// Find all console.log statements
ast_grep_search(
  pattern='console.log($MSG)',
  lang='typescript'
)`,
    },
    {
      name: t.hashAnchor.tools.grepReplace.name,
      desc: t.hashAnchor.tools.grepReplace.desc,
      example: `// Replace console.log with logger.info
ast_grep_replace(
  pattern='console.log($MSG)',
  rewrite='logger.info($MSG)',
  lang='typescript'
)`,
    },
  ];

  return (
    <section id="hash-anchor" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{t.hashAnchor.icon}</span>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            {t.hashAnchor.title} <span className="text-accent">{t.hashAnchor.titleAccent}</span>
          </h2>
          </div>
        </div>

        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-16">
          {t.hashAnchor.description}
          <br />
          <span className="text-text-muted">{t.hashAnchor.description2}</span>
        </p>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.hashAnchor.lspTools}</h3>
          <div className="space-y-6">
            {lspTools.map((tool) => (
              <div key={tool.name}>
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-sm text-accent">{tool.name}</code>
                  <span className="text-text-muted">— {tool.desc}</span>
                </div>
                <CodeBlock language="python" code={tool.example} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">{t.hashAnchor.astTools}</h3>
          <div className="space-y-6">
            {astTools.map((tool) => (
              <div key={tool.name}>
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-sm text-accent">{tool.name}</code>
                  <span className="text-text-muted">— {tool.desc}</span>
                </div>
                <CodeBlock language="python" code={tool.example} />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-bg-card">
          <h4 className="font-medium mb-4">{t.hashAnchor.realWorld}</h4>
          <CodeBlock
            language="typescript"
            code={`// User.ts - Rename 'getUser' to 'fetchUser' across the codebase
// Step 1: Check if rename is valid
lsp_prepare_rename("src/models/User.ts", line=15, character=3)
// Returns: { canRename: true, alternatives: [] }

// Step 2: Execute rename
lsp_rename("src/models/User.ts", line=15, character=3, newName="fetchUser")
// Result: 'getUser' → 'fetchUser' everywhere in the project

// Step 3: Verify with references
lsp_find_references("src/models/User.ts", line=15, character=3)
// Returns: All 47 locations where fetchUser is used`}
            filename="refactor-user.ts"
          />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-border bg-bg-secondary">
            <h5 className="text-sm font-medium mb-2">{t.hashAnchor.whyHash.title}</h5>
            <ul className="text-sm text-text-secondary space-y-1">
              {t.hashAnchor.whyHash.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-border bg-bg-secondary">
            <h5 className="text-sm font-medium mb-2">{t.hashAnchor.astVsGrep.title}</h5>
            <ul className="text-sm text-text-secondary space-y-1">
              {t.hashAnchor.astVsGrep.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
