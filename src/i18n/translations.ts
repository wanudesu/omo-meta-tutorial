export const translations = {
  ko: {
    nav: {
      ultrawork: "ultrawork / ulw",
      agents: "Discipline Agents",
      hashAnchor: "Hash-Anchored Edit",
      ralphLoop: "Ralph Loop",
      tutorial: "튜토리얼",
    },
    hero: {
      badge: "인터랙티브 가이드",
      title: "oh-my-openagent",
      subtitle: "튜토리얼",
      description:
        "최고의 에이전트 하네스. 한 단어로 최대 정밀도 모드를 활성화합니다.",
      descriptionJp: "ulw — 자동 계획, 심층 연구, 자기 수정 루프.",
      github: "GitHub",
      getStarted: "시작하기",
    },
    ultrawork: {
      title: "ultrawork",
      titleSlash: " / ulw",
      description: "세 글자만 입력하고 떠나세요.",
      description2: "최대 정밀도 모드. 한 단어로 모든 에이전트를 활성화합니다.",
      usage: "사용법",
      features: {
        autoPlanning: {
          title: "자동 계획",
          desc: "Sisyphus가 코드를 작성하기 전에 상세한 작업 계획을 세웁니다",
        },
        deepResearch: {
          title: "심층 연구",
          desc: "코드베이스를 이해하기 위해 2~5개의 탐색 에이전트를 병렬로 실행합니다",
        },
        aggressiveParallel: {
          title: "공격적 병렬 처리",
          desc: "최대 처리량을 위해 여러 에이전트를 동시에 실행합니다",
        },
        selfCorrection: {
          title: "자기 수정",
          desc: "출력을 검증하고 100% 완료될 때까지 반복합니다",
        },
      },
      howItWorks: "작동 방식",
      phases: {
        intentGate: {
          title: "의도 파악",
          desc: "사용자가 진짜로 의도한 바를 해석합니다",
        },
        assessment: { title: "평가", desc: "코드베이스의 패턴을 탐색합니다" },
        orchestrate: {
          title: "오케스트레이션",
          desc: "전문 에이전트에게 작업을 분배합니다",
        },
        verify: { title: "검증", desc: "완료될 때까지 스스로 수정합니다" },
      },
      keyDiff: {
        title: "핵심 차이점",
        desc: "ulw는 최대 정밀도 모드를 활성화합니다. 자동 계획, 심층 연구, 병렬 에이전트, 자기 수정 루프를 모두 사용하며, 완료될 때까지 멈추지 않습니다.",
      },
    },
    agents: {
      title: "Discipline",
      titleAccent: "Agents",
      description: "Sisyphus가 오케스트레이션하는 완전한 AI 개발 팀입니다.",
      description2:
        "각 에이전트는 고유한 전문성, 최적화된 모델, 그리고 명확한 역할을 가집니다.",
      phases: "단계",
      categoryRouting: "카테고리 라우팅",
      sisyphus: {
        name: "Sisyphus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "잠들지 않는 CTO",
        concept:
          "숨은 요구사항을 파악하고, 코드베이스의 성숙도에 맞게 적응하며, 적절한 전문가에게 작업을 위임합니다.",
        phases: {
          intentGate: "입력한 문장이 아니라, 실제 의도를 파악합니다",
          assessment: "코드베이스의 정돈 수준을 평가합니다",
          orchestration: "위임하고, 병렬화하고, 끝까지 밀어붙입니다",
        },
      },
      hephaestus: {
        name: "Hephaestus",
        model: "gpt-5.4",
        role: "정통 장인",
        concept:
          "목표 중심의 자율 작업자입니다. 레시피가 아니라 목표를 주세요. 코드를 작성하기 전에 2~5개의 탐색 에이전트를 병렬로 실행합니다.",
        phases: {
          explore: "병렬 에이전트로 지형을 파악합니다",
          plan: "진행 경로를 설계합니다",
          execute: "정밀하게 구현합니다",
          verify: "실제로 작동하는지 증명합니다",
        },
      },
      prometheus: {
        name: "Prometheus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "아키텍트",
        concept:
          "인터뷰 모드를 갖춘 전략형 플래너입니다. 코드 한 줄을 건드리기 전에 상세한 실행 계획을 세웁니다.",
        phases: {
          interview: "질문하며 범위를 파악합니다",
          metis: "모호한 부분을 짚어냅니다",
          momus: "가차 없이 검증합니다",
          output: "실행 준비가 끝난 계획을 제시합니다",
        },
      },
      categories: {
        visual: {
          name: "visual-engineering",
          desc: "프론트엔드, UI/UX, 스타일링",
        },
        ultrabrain: { name: "ultrabrain", desc: "복잡한 로직, 아키텍처" },
        quick: { name: "quick", desc: "단일 파일 수정" },
        deep: { name: "deep", desc: "자율 연구" },
        writing: { name: "writing", desc: "문서화, 글쓰기" },
        git: { name: "git-master", desc: "원자적 커밋, 리베이스" },
      },
    },
    hashAnchor: {
      title: "Hash-Anchored",
      titleAccent: "Edit Tool",
      description: "특정 줄과 문자 위치를 기준으로 정확하게 코드를 편집합니다.",
      description2:
        "이제 파일을 뒤질 필요 없습니다. 필요한 위치로 바로 이동하세요.",
      lspTools: "LSP 도구",
      astTools: "AST 도구",
      realWorld: "실전 예시",
      whyHash: {
        title: "왜 Hash-Anchored인가?",
        items: [
          "대규모 코드베이스에서도 잘 작동합니다",
          "언어를 이해합니다 (TypeScript, Python 등)",
          "이름 변경도 안정적으로 처리할 수 있습니다",
        ],
      },
      astVsGrep: {
        title: "AST vs Grep",
        items: [
          "코드 구조를 이해합니다",
          "문자열이나 주석 안의 텍스트는 잘못 매칭하지 않습니다",
          "리팩토링에 안전합니다",
        ],
      },
      tools: {
        gotoDefinition: {
          name: "lsp_goto_definition",
          desc: "심볼 정의로 이동합니다",
        },
        findReferences: {
          name: "lsp_find_references",
          desc: "워크스페이스 전체에서 사용처를 찾습니다",
        },
        rename: {
          name: "lsp_rename",
          desc: "워크스페이스 전체에서 심볼 이름을 변경합니다",
        },
        symbols: {
          name: "lsp_symbols",
          desc: "파일 또는 워크스페이스 심볼을 가져옵니다",
        },
        grepSearch: {
          name: "ast_grep_search",
          desc: "AST를 인식하며 코드 패턴을 검색합니다",
        },
        grepReplace: {
          name: "ast_grep_replace",
          desc: "AST 수준의 정밀도로 패턴을 치환합니다",
        },
      },
    },
    ralphLoop: {
      title: "Ralph",
      titleAccent: "Loop",
      description: "자기 참조 루프. 100% 끝날 때까지 멈추지 않습니다.",
      description2: "다음 문구를 출력할 때까지 자동으로 계속됩니다:",
      done: "DONE",
      ralphLoop: "기본 루프",
      ralphLoopDesc:
        "표준 자기 참조 루프입니다. 집중적인 점진 작업에 가장 적합합니다.",
      ulwLoop: "갓 모드",
      ulwLoopDesc:
        "Ralph Loop + Ultrawork 모드. 복잡한 작업에 최대 강도로 동작합니다.",
      howItWorks: "작동 방식",
      steps: {
        start: {
          title: "루프 시작",
          desc: "/ralph-loop 또는 /ulw-loop로 작업을 시작합니다",
        },
        work: {
          title: "에이전트 작업",
          desc: "에이전트가 작업 일부를 수행하고 진행 상황을 출력합니다",
        },
        persist: {
          title: "상태 저장",
          desc: "상태가 .ralph-loop.json에 저장됩니다",
        },
        check: {
          title: "확인 후 계속",
          desc: "session.idle 시점에 DONE 약속을 확인합니다",
        },
        complete: {
          title: "완료",
          desc: "DONE이 확인되면 루프를 정상 종료합니다",
        },
      },
      configuration: "설정",
      whenToUse: "언제 사용할까",
      table: {
        scenario1: "집중적이고 점진적인 작업",
        scenario2: "복합적인 복잡한 작업",
        scenario3: "범위가 불확실한 대규모 리팩토링",
      },
      proTip:
        "모든 하위 작업이 완료되었는지 확인한 뒤에만 보고하라고 요청 끝에 덧붙이세요. 그러면 너무 일찍 멈추는 일을 줄일 수 있습니다.",
    },
    footer: {
      builtWith: "Built with",
    },
  },
  en: {
    nav: {
      ultrawork: "ultrawork / ulw",
      agents: "Discipline Agents",
      hashAnchor: "Hash-Anchored Edit",
      ralphLoop: "Ralph Loop",
      tutorial: "tutorial",
    },
    hero: {
      badge: "Interactive Guide",
      title: "oh-my-openagent",
      subtitle: "tutorial",
      description:
        "The best agent harness. One word to activate maximum precision.",
      descriptionJp:
        "ulw — auto-planning, deep research, self-correction loops.",
      github: "GitHub",
      getStarted: "Get Started",
    },
    ultrawork: {
      title: "ultrawork",
      titleSlash: " / ulw",
      description: "Type three letters. Walk away.",
      description2: "Maximum precision mode. One word activates every agent.",
      usage: "Usage",
      features: {
        autoPlanning: {
          title: "Auto-Planning",
          desc: "Sisyphus creates detailed work plans before writing code",
        },
        deepResearch: {
          title: "Deep Research",
          desc: "Fires 2-5 parallel explore agents to understand the codebase",
        },
        aggressiveParallel: {
          title: "Aggressive Parallel",
          desc: "Executes multiple agents simultaneously for maximum throughput",
        },
        selfCorrection: {
          title: "Self-Correction",
          desc: "Verifies output and loops until 100% complete",
        },
      },
      howItWorks: "How it works",
      phases: {
        intentGate: { title: "Intent Gate", desc: "Parses what you meant" },
        assessment: { title: "Assessment", desc: "Explores codebase patterns" },
        orchestrate: { title: "Orchestrate", desc: "Delegates to specialists" },
        verify: { title: "Verify", desc: "Self-corrects until done" },
      },
      keyDiff: {
        title: "Key Difference",
        desc: "ulw activates maximum precision: auto-planning, deep research, parallel agents, and self-correction loops. It doesn&apos;t stop until done.",
      },
    },
    agents: {
      title: "Discipline",
      titleAccent: "Agents",
      description: "A full AI dev team orchestrated by Sisyphus.",
      description2:
        "Each agent has distinct expertise, optimized models, and clear responsibilities.",
      phases: "Phases",
      categoryRouting: "Category Routing",
      sisyphus: {
        name: "Sisyphus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "The CTO Who Never Sleeps",
        concept:
          "Parses implicit requirements, adapts to codebase maturity, delegates to specialists.",
        phases: {
          intentGate: "Parses what you meant, not just what you typed",
          assessment: "Evaluates codebase discipline level",
          orchestration: "Delegates, parallelizes, drives to completion",
        },
      },
      hephaestus: {
        name: "Hephaestus",
        model: "gpt-5.4",
        role: "The Legitimate Craftsman",
        concept:
          "Goal-oriented autonomous worker. Give him a goal, not a recipe. Fires 2-5 parallel explore agents before writing code.",
        phases: {
          explore: "Map the terrain with parallel agents",
          plan: "Chart the course",
          execute: "Build with precision",
          verify: "Prove it works",
        },
      },
      prometheus: {
        name: "Prometheus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "The Architect",
        concept:
          "Strategic planner with interview mode. Creates detailed battle plans before a single line of code is touched.",
        phases: {
          interview: "Questions, identifies scope",
          metis: "Catches ambiguities",
          momus: "Validates ruthlessly",
          output: "Battle-ready plan",
        },
      },
      categories: {
        visual: {
          name: "visual-engineering",
          desc: "Frontend, UI/UX, styling",
        },
        ultrabrain: { name: "ultrabrain", desc: "Hard logic, architecture" },
        quick: { name: "quick", desc: "Single-file changes" },
        deep: { name: "deep", desc: "Autonomous research" },
        writing: { name: "writing", desc: "Documentation, prose" },
        git: { name: "git-master", desc: "Atomic commits, rebase" },
      },
    },
    hashAnchor: {
      title: "Hash-Anchored",
      titleAccent: "Edit Tool",
      description: "Precise code editing at specific line/character positions.",
      description2:
        "No more searching through files. Jump directly to where you need.",
      lspTools: "LSP Tools",
      astTools: "AST Tools",
      realWorld: "Real-world Example",
      whyHash: {
        title: "Why Hash-Anchored?",
        items: [
          "Works across large codebases",
          "Language-aware (TypeScript, Python, etc.)",
          "Handles renaming with confidence",
        ],
      },
      astVsGrep: {
        title: "AST vs Grep",
        items: [
          "Understands code structure",
          "Won&apos;t match inside strings/comments",
          "Refactoring-safe",
        ],
      },
      tools: {
        gotoDefinition: {
          name: "lsp_goto_definition",
          desc: "Jump to symbol definition",
        },
        findReferences: {
          name: "lsp_find_references",
          desc: "Find all usages across workspace",
        },
        rename: {
          name: "lsp_rename",
          desc: "Rename symbol across entire workspace",
        },
        symbols: {
          name: "lsp_symbols",
          desc: "Get file/workspace symbols",
        },
        grepSearch: {
          name: "ast_grep_search",
          desc: "Search code patterns with AST awareness",
        },
        grepReplace: {
          name: "ast_grep_replace",
          desc: "Replace patterns with AST precision",
        },
      },
    },
    ralphLoop: {
      title: "Ralph",
      titleAccent: "Loop",
      description: "Self-referential loop. Doesn&apos;t stop until 100% done.",
      description2: "Continues automatically until you output",
      done: "DONE",
      ralphLoop: "Standard Loop",
      ralphLoopDesc:
        "Standard self-referential loop. Best for focused, incremental work.",
      ulwLoop: "God Mode",
      ulwLoopDesc:
        "Ralph Loop + Ultrawork mode. Maximum intensity for complex tasks.",
      howItWorks: "How It Works",
      steps: {
        start: {
          title: "Start Loop",
          desc: "You start the loop with a task: /ralph-loop or /ulw-loop",
        },
        work: {
          title: "Agent Works",
          desc: "Agent completes a chunk of work and outputs its progress",
        },
        persist: {
          title: "State Persisted",
          desc: "State saved to .ralph-loop.json",
        },
        check: {
          title: "Check & Continue",
          desc: "On session.idle, checks for DONE promise",
        },
        complete: {
          title: "Complete",
          desc: "DONE found → Exit loop gracefully",
        },
      },
      configuration: "Configuration",
      whenToUse: "When to Use Each",
      table: {
        scenario1: "Focused, incremental work",
        scenario2: "Complex multi-faceted tasks",
        scenario3: "Large refactoring with uncertain scope",
      },
      proTip:
        "End your request with &quot;Report only after confirming all subtasks are complete.&quot; This prevents premature stopping.",
    },
    footer: {
      builtWith: "Built with",
    },
  },
};

export type Language = "ko" | "en";
export type TranslationKeys = typeof translations.en;
