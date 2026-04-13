"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
}

function tokenize(code: string): { type: string; value: string }[] {
  const tokens: { type: string; value: string }[] = [];
  const keywords = [
    "const", "let", "var", "function", "return", "if", "else", "for", "while",
    "import", "export", "from", "default", "async", "await", "class", "extends",
    "new", "this", "try", "catch", "throw", "type", "interface", "true", "false",
    "null", "undefined", "public", "private"
  ];

  let i = 0;
  while (i < code.length) {
    const char = code[i];
    
    if (char === "/" && code[i + 1] === "/") {
      let comment = "";
      while (i < code.length && code[i] !== "\n") {
        comment += code[i++];
      }
      tokens.push({ type: "comment", value: comment });
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      const quote = char;
      let str = char;
      i++;
      while (i < code.length && code[i] !== quote) {
        if (code[i] === "\\" && i + 1 < code.length) {
          str += code[i++] + code[i++];
        } else {
          str += code[i++];
        }
      }
      if (i < code.length) str += code[i++];
      tokens.push({ type: "string", value: str });
      continue;
    }

    if (/\d/.test(char)) {
      let num = "";
      while (i < code.length && /[\d.]/.test(code[i])) {
        num += code[i++];
      }
      tokens.push({ type: "number", value: num });
      continue;
    }

    if (/[a-zA-Z_$]/.test(char)) {
      let word = "";
      while (i < code.length && /[a-zA-Z0-9_$]/.test(code[i])) {
        word += code[i++];
      }
      if (keywords.includes(word)) {
        tokens.push({ type: "keyword", value: word });
      } else if (code[i] === "(") {
        tokens.push({ type: "function", value: word });
      } else {
        tokens.push({ type: "variable", value: word });
      }
      continue;
    }

    if (/[=+\-*/%<>!&|^~?:]/.test(char)) {
      let op = "";
      while (i < code.length && /[=+\-*/%<>!&|^~?:]/.test(code[i])) {
        op += code[i++];
      }
      tokens.push({ type: "operator", value: op });
      continue;
    }

    if (/[{}[\]().,;]/.test(char)) {
      tokens.push({ type: "punctuation", value: char });
      i++;
      continue;
    }

    tokens.push({ type: "default", value: char });
    i++;
  }

  return tokens;
}

export default function CodeBlock({
  code,
  language,
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="relative group rounded-lg border border-border bg-bg-tertiary overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-secondary/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          {filename && (
            <span className="text-xs text-text-muted font-mono">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-muted uppercase tracking-wider">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="px-2 py-1 text-xs text-text-muted hover:text-text-primary transition-colors rounded hover:bg-bg-tertiary"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <pre className="p-4 overflow-x-auto text-sm font-mono leading-6">
        <code>
          {lines.map((line, lineIndex) => {
            const lineTokens = tokenize(line);
            return (
              <div key={lineIndex} className="flex">
                <span className="select-none text-text-muted/50 w-8 text-right pr-4">
                  {lineIndex + 1}
                </span>
                <span>
                  {lineTokens.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    lineTokens.map((token, tokenIndex) => {
                      let colorClass = "text-text-primary";
                      if (token.type === "comment") colorClass = "text-text-muted";
                      else if (token.type === "keyword") colorClass = "text-accent";
                      else if (token.type === "string") colorClass = "text-emerald-400";
                      else if (token.type === "number") colorClass = "text-amber-400";
                      else if (token.type === "function") colorClass = "text-blue-400";
                      else if (token.type === "operator") colorClass = "text-text-muted";
                      else if (token.type === "punctuation") colorClass = "text-text-muted";

                      return (
                        <span key={tokenIndex} className={colorClass}>
                          {token.value}
                        </span>
                      );
                    })
                  )}
                </span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
