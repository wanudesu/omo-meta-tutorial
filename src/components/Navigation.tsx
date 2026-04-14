"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n";

export default function Navigation() {
  const { t, lang, setLang } = useI18n();
  const [activeSection, setActiveSection] = useState<string>("getting-started");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sections = [
    { id: "getting-started", label: t.nav.gettingStarted },
    { id: "what-is", label: t.nav.whatIs },
    { id: "opencode", label: t.nav.openCode },
    { id: "omo", label: t.nav.omo },
    { id: "ultrawork", label: t.nav.ultrawork },
    { id: "agents", label: t.nav.agents },
    { id: "commands", label: t.nav.commands },
    { id: "faq", label: t.nav.faq },
    { id: "tips", label: t.nav.tips },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-semibold tracking-tight">
              omo<span className="text-accent">.</span>
            </span>
            <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
              {t.hero.subtitle}
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`px-3 py-1.5 text-sm transition-all duration-200 rounded-md ${
                    isActive
                      ? "text-text-primary bg-bg-secondary font-medium"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary/50"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}

            <div className="ml-3 pl-3 border-l border-border">
              <button
                onClick={() => setLang(lang === "ko" ? "en" : "ko")}
                className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors rounded hover:bg-bg-secondary"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="uppercase">{lang}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
