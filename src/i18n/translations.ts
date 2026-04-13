export const translations = {
  ko: {
    nav: {
      whatIs: "기본 개념",
      ultrawork: "ultrawork / ulw",
      agents: "에이전트",
      hashAnchor: "정밀 편집",
      ralphLoop: "Ralph Loop",
      tutorial: "튜토리얼",
    },
    hero: {
      badge: "인터랙티브 가이드",
      title: "oh-my-openagent",
      subtitle: "튜토리얼",
      description:
        "OpenCode에서 사용할 수 있는 멀티 에이전트 플러그인입니다. 한 번 지시하면 에이전트 팀이 함께 움직입니다.",
      descriptionJp: "ulw — 계획, 조사, 검증을 한 번에.",
      github: "GitHub",
      getStarted: "시작하기",
    },
    whatIs: {
      icon: "📚",
      title: "Oh-My-OpenAgent란?",
      subtitle: "기능을 보기 전에 먼저 큰 흐름부터 가볍게 살펴보세요.",
      opencode: {
        icon: "🔧",
        title: "OpenCode",
        description:
          "코드를 쓰고, 고치고, 이해할 때 도움을 주는 AI 기반 코드 에디터이자 CLI입니다.",
        feature1: "코딩용 AI 채팅 기능 제공",
        feature2: "파일 작업용 도구 내장",
        feature3: "플러그인과 스킬로 확장 가능",
      },
      omo: {
        icon: "🚀",
        title: "Oh-My-OpenAgent (omo)",
        description:
          "OpenCode에 여러 에이전트를 붙여 팀처럼 일하게 해주는 플러그인입니다.",
        feature1: "Discipline Agents(Sisyphus, Hephaestus, Prometheus) 추가",
        feature2: "더 강하게 작업하는 ultrawork 모드 제공",
        feature3: "끝날 때까지 이어가는 Ralph Loop 제공",
      },
      howWorks: {
        title: "어떻게 같이 작동하나요?",
        step1: {
          title: "omo 설치",
          description: "실행: bunx oh-my-openagent install",
        },
        step2: {
          title: "평소처럼 입력",
          description: "하고 싶은 일을 자연스럽게 적습니다",
        },
        step3: {
          title: "에이전트 협업",
          description: "Sisyphus가 필요한 에이전트를 골라 작업을 진행합니다",
        },
        step4: {
          title: "완료",
          description: "결과를 보내기 전에 제대로 되는지 한 번 더 확인합니다",
        },
      },
      example: {
        title: "도입 전 vs 도입 후",
        beforeLabel: "omo 없이: 코드만 받고, 나머지는 직접 해야 함",
        afterLabel: "ulw 사용: 에이전트가 처음부터 끝까지 처리",
        codeBefore: `# 일반 AI 어시스턴트
"API에 사용자 인증을 추가해줘"

# 결과: 코드만 바로 받아봄
# → 디버깅, 테스트, 연결 작업은 직접 해야 함`,
        codeAfter: `# omo + ulw
ulw API에 사용자 인증을 추가해줘

# 결과:
# - 기존 패턴 파악
# - 작업 계획 정리
# - 단계별 구현
# - 테스트 작성
# - 모든 작업 확인 후 보고`,
      },
    },
    ultrawork: {
      title: "ultrawork",
      titleSlash: " / ulw",
      description: "세 글자만 입력하면 됩니다.",
      description2:
        "고정밀 작업 모드입니다. 한 단어로 전체 에이전트 흐름이 켜집니다.",
      usage: "사용법",
      features: {
        autoPlanning: {
          title: "자동 계획",
          desc: "Sisyphus가 코드를 쓰기 전에 먼저 작업 계획을 세웁니다",
        },
        deepResearch: {
          title: "심층 조사",
          desc: "코드베이스를 파악하기 위해 2~5개의 탐색 에이전트를 병렬로 돌립니다",
        },
        aggressiveParallel: {
          title: "병렬 작업",
          desc: "여러 에이전트를 동시에 움직여 더 빠르게 처리합니다",
        },
        selfCorrection: {
          title: "자기 검증",
          desc: "결과를 스스로 확인하고 끝날 때까지 계속 다듬습니다",
        },
      },
      howItWorks: "작동 방식",
      phases: {
        intentGate: {
          title: "의도 확인",
          desc: "입력한 말보다 실제로 원하는 작업을 먼저 파악합니다",
        },
        assessment: {
          title: "상태 파악",
          desc: "코드베이스의 구조와 패턴을 살펴봅니다",
        },
        orchestrate: {
          title: "작업 분배",
          desc: "맞는 에이전트에게 일을 나눠 맡깁니다",
        },
        verify: {
          title: "검증",
          desc: "문제가 없을 때까지 확인하고 고칩니다",
        },
      },
      keyDiff: {
        title: "핵심 차이",
        desc: "ulw는 계획, 조사, 병렬 작업, 검증까지 한 흐름으로 처리합니다. 끝났다고 확인할 때까지 멈추지 않습니다.",
      },
    },
    agents: {
      title: "Discipline",
      titleAccent: "Agents",
      description:
        "Sisyphus가 여러 에이전트를 조율해 하나의 팀처럼 움직입니다.",
      description2: "각 에이전트는 맡은 역할과 잘하는 일이 분명합니다.",
      phases: "흐름",
      categoryRouting: "작업 분류",
      sisyphus: {
        name: "Sisyphus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "잠들지 않는 CTO",
        concept:
          "숨은 요구를 파악하고, 코드베이스 상태에 맞게 판단한 뒤, 알맞은 전문가에게 일을 나눕니다.",
        phases: {
          intentGate: "입력한 문장보다 실제 목적을 먼저 읽습니다",
          assessment: "코드베이스가 얼마나 정리되어 있는지 봅니다",
          orchestration: "위임하고, 병렬로 돌리고, 끝까지 밀고 갑니다",
        },
      },
      hephaestus: {
        name: "Hephaestus",
        model: "gpt-5.4",
        role: "실행 담당",
        concept:
          "목표를 받아 실제로 움직이는 작업자입니다. 레시피보다 목표를 주면, 먼저 탐색하고 그다음 구현합니다.",
        phases: {
          explore: "병렬 에이전트로 먼저 살펴봅니다",
          plan: "진행 방향을 정리합니다",
          execute: "정확하게 구현합니다",
          verify: "실제로 되는지 확인합니다",
        },
      },
      prometheus: {
        name: "Prometheus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "설계 담당",
        concept:
          "바로 코드를 쓰기보다 먼저 질문하고, 범위를 정리하고, 자세한 실행 계획을 세웁니다.",
        phases: {
          interview: "질문으로 범위를 확인합니다",
          metis: "애매한 부분을 짚어냅니다",
          momus: "계획을 꼼꼼하게 검토합니다",
          output: "실행 가능한 계획으로 정리합니다",
        },
      },
      categories: {
        visual: {
          name: "visual-engineering",
          desc: "프론트엔드, UI/UX, 스타일 작업",
        },
        ultrabrain: {
          name: "ultrabrain",
          desc: "복잡한 로직과 구조 설계",
        },
        quick: {
          name: "quick",
          desc: "작은 수정이나 단일 파일 작업",
        },
        deep: {
          name: "deep",
          desc: "깊이 있는 자율 조사",
        },
        writing: {
          name: "writing",
          desc: "문서 작성과 설명문 정리",
        },
        git: {
          name: "git-master",
          desc: "커밋 정리와 리베이스",
        },
      },
    },
    hashAnchor: {
      title: "Hash-Anchored",
      titleAccent: "Edit",
      description:
        "줄과 문자 위치를 기준으로 필요한 부분만 정확하게 수정합니다.",
      description2:
        "파일을 뒤질 필요 없이 원하는 위치로 바로 이동할 수 있습니다.",
      lspTools: "LSP 도구",
      astTools: "AST 도구",
      realWorld: "예시",
      whyHash: {
        title: "왜 쓰나요?",
        items: [
          "큰 코드베이스에서도 안정적으로 동작합니다",
          "TypeScript, Python 같은 언어 구조를 이해합니다",
          "이름 변경 같은 작업도 더 안전하게 처리합니다",
        ],
      },
      astVsGrep: {
        title: "AST와 Grep 차이",
        items: [
          "코드 구조를 이해합니다",
          "문자열이나 주석은 잘못 건드리지 않습니다",
          "리팩토링할 때 더 안전합니다",
        ],
      },
      tools: {
        gotoDefinition: {
          name: "lsp_goto_definition",
          desc: "심볼이 정의된 위치로 이동합니다",
        },
        findReferences: {
          name: "lsp_find_references",
          desc: "워크스페이스 전체에서 사용된 곳을 찾습니다",
        },
        rename: {
          name: "lsp_rename",
          desc: "워크스페이스 전체에서 이름을 바꿉니다",
        },
        symbols: {
          name: "lsp_symbols",
          desc: "파일이나 워크스페이스의 심볼을 보여줍니다",
        },
        grepSearch: {
          name: "ast_grep_search",
          desc: "코드 구조를 보면서 패턴을 찾습니다",
        },
        grepReplace: {
          name: "ast_grep_replace",
          desc: "코드 구조를 기준으로 정확하게 바꿉니다",
        },
      },
    },
    ralphLoop: {
      title: "Ralph",
      titleAccent: "Loop",
      description:
        "스스로 확인하며 도는 루프입니다. 일이 끝날 때까지 계속됩니다.",
      description2: "아래 단어가 나올 때까지 자동으로 이어집니다:",
      done: "DONE",
      ralphLoop: "기본 루프",
      ralphLoopDesc: "한 번에 조금씩 진행하는 작업에 잘 맞습니다.",
      ulwLoop: "강화 모드",
      ulwLoopDesc:
        "Ralph Loop에 Ultrawork를 더한 방식입니다. 복잡한 작업을 강하게 밀어붙일 때 좋습니다.",
      howItWorks: "작동 방식",
      steps: {
        start: {
          title: "루프 시작",
          desc: "/ralph-loop 또는 /ulw-loop로 작업을 시작합니다",
        },
        work: {
          title: "작업 진행",
          desc: "에이전트가 작업을 처리하고 현재 진행 상황을 남깁니다",
        },
        persist: {
          title: "상태 저장",
          desc: "상태를 .ralph-loop.json에 저장합니다",
        },
        check: {
          title: "확인 후 계속",
          desc: "session.idle 시점에 DONE 여부를 확인합니다",
        },
        complete: {
          title: "완료",
          desc: "DONE이 확인되면 루프를 마칩니다",
        },
      },
      configuration: "설정",
      whenToUse: "언제 쓰면 좋을까",
      table: {
        scenario1: "집중해서 조금씩 진행하는 작업",
        scenario2: "여러 요소가 얽힌 복잡한 작업",
        scenario3: "범위가 아직 애매한 큰 리팩토링",
      },
      proTip:
        "요청 끝에 '모든 하위 작업이 끝난 뒤에만 보고해줘'라고 적어두면 너무 빨리 멈추는 일을 줄일 수 있습니다.",
    },
    footer: {
      builtWith: "Built with",
    },
  },

  en: {
    nav: {
      whatIs: "Overview",
      ultrawork: "ultrawork / ulw",
      agents: "Agents",
      hashAnchor: "Precise Editing",
      ralphLoop: "Ralph Loop",
      tutorial: "Tutorial",
    },
    hero: {
      badge: "Interactive Guide",
      title: "oh-my-openagent",
      subtitle: "tutorial",
      description:
        "A multi-agent plugin for OpenCode. Give one prompt, and let the agent team handle the work.",
      descriptionJp: "ulw — planning, research, and self-checking in one flow.",
      github: "GitHub",
      getStarted: "Get Started",
    },
    whatIs: {
      icon: "📚",
      title: "What is Oh-My-OpenAgent?",
      subtitle:
        "Start here for the quick version before you explore the features.",
      opencode: {
        icon: "🔧",
        title: "OpenCode",
        description:
          "An AI coding editor and CLI that helps you write, edit, and understand code.",
        feature1: "AI chat for coding",
        feature2: "Built-in tools for file work",
        feature3: "Plugin and skill support",
      },
      omo: {
        icon: "🚀",
        title: "Oh-My-OpenAgent (omo)",
        description:
          "A plugin that lets multiple agents work together inside OpenCode.",
        feature1: "Adds Discipline Agents (Sisyphus, Hephaestus, Prometheus)",
        feature2: "Adds ultrawork mode for heavier tasks",
        feature3: "Adds Ralph Loop to keep going until the work is done",
      },
      howWorks: {
        title: "How does it work?",
        step1: {
          title: "Install omo",
          description: "Run: bunx oh-my-openagent install",
        },
        step2: {
          title: "Type naturally",
          description: "Describe what you want in plain language",
        },
        step3: {
          title: "Agents work together",
          description:
            "Sisyphus picks the right agents and coordinates the task",
        },
        step4: {
          title: "Done",
          description:
            "Before reporting back, the agent team checks that everything works",
        },
      },
      example: {
        title: "Before vs After",
        beforeLabel: "Without omo: you get code, then finish the rest yourself",
        afterLabel: "With ulw: the agents handle the full flow",
        codeBefore: `# Standard AI assistant
"Add user authentication to the API"

# Result: you get a block of code
# -> You still handle debugging, testing, and integration`,
        codeAfter: `# omo + ulw
ulw Add user authentication to the API

# Result:
# - Understands existing patterns
# - Makes a plan
# - Builds it step by step
# - Writes tests
# - Reports back after everything is done`,
      },
    },
    ultrawork: {
      title: "ultrawork",
      titleSlash: " / ulw",
      description: "Type three letters and let it run.",
      description2:
        "High-precision mode. One word turns on the full agent flow.",
      usage: "Usage",
      features: {
        autoPlanning: {
          title: "Auto Planning",
          desc: "Sisyphus makes a plan before any code is written",
        },
        deepResearch: {
          title: "Deep Research",
          desc: "Runs 2 to 5 explore agents in parallel to understand the codebase",
        },
        aggressiveParallel: {
          title: "Parallel Execution",
          desc: "Uses multiple agents at the same time to move faster",
        },
        selfCorrection: {
          title: "Self-Checking",
          desc: "Reviews the result and keeps going until it is done",
        },
      },
      howItWorks: "How it works",
      phases: {
        intentGate: {
          title: "Intent Check",
          desc: "Figures out what you really want to do",
        },
        assessment: {
          title: "Assessment",
          desc: "Looks through the codebase and finds the patterns",
        },
        orchestrate: {
          title: "Orchestration",
          desc: "Hands work to the right specialists",
        },
        verify: {
          title: "Verification",
          desc: "Checks and fixes things until they are ready",
        },
      },
      keyDiff: {
        title: "Key Difference",
        desc: "ulw handles planning, research, parallel work, and verification in one flow. It does not stop until the work is actually done.",
      },
    },
    agents: {
      title: "Discipline",
      titleAccent: "Agents",
      description:
        "Sisyphus coordinates multiple agents so they can work like one team.",
      description2: "Each agent has a clear role and a specific strength.",
      phases: "Flow",
      categoryRouting: "Task Routing",
      sisyphus: {
        name: "Sisyphus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "The CTO Who Never Sleeps",
        concept:
          "Reads the hidden intent, checks the state of the codebase, and hands work to the right specialists.",
        phases: {
          intentGate: "Looks at the real goal, not just the exact wording",
          assessment: "Checks how structured and clean the codebase is",
          orchestration: "Delegates, parallelizes, and pushes the task forward",
        },
      },
      hephaestus: {
        name: "Hephaestus",
        model: "gpt-5.4",
        role: "The Builder",
        concept:
          "A goal-driven worker. Give it a goal, not a recipe. It explores first, then builds.",
        phases: {
          explore: "Maps the terrain with parallel agents",
          plan: "Sets the direction",
          execute: "Builds carefully",
          verify: "Checks that it really works",
        },
      },
      prometheus: {
        name: "Prometheus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "The Planner",
        concept:
          "Instead of jumping straight into code, it asks questions, defines the scope, and makes a detailed plan.",
        phases: {
          interview: "Asks questions and narrows the scope",
          metis: "Finds the unclear parts",
          momus: "Reviews the plan critically",
          output: "Delivers a plan that is ready to use",
        },
      },
      categories: {
        visual: {
          name: "visual-engineering",
          desc: "Frontend, UI/UX, and styling work",
        },
        ultrabrain: {
          name: "ultrabrain",
          desc: "Complex logic and architecture",
        },
        quick: {
          name: "quick",
          desc: "Small edits or single-file tasks",
        },
        deep: {
          name: "deep",
          desc: "Deeper autonomous research",
        },
        writing: {
          name: "writing",
          desc: "Docs, copy, and written explanations",
        },
        git: {
          name: "git-master",
          desc: "Commits and rebases",
        },
      },
    },
    hashAnchor: {
      title: "Hash-Anchored",
      titleAccent: "Edit",
      description:
        "Edits the exact part you need based on line and character position.",
      description2:
        "You can jump straight to the right place without digging through files.",
      lspTools: "LSP Tools",
      astTools: "AST Tools",
      realWorld: "Example",
      whyHash: {
        title: "Why use it?",
        items: [
          "Works well even in large codebases",
          "Understands languages like TypeScript and Python",
          "Makes renaming and refactoring safer",
        ],
      },
      astVsGrep: {
        title: "AST vs Grep",
        items: [
          "It understands code structure",
          "It does not accidentally match strings or comments",
          "It is safer for refactoring work",
        ],
      },
      tools: {
        gotoDefinition: {
          name: "lsp_goto_definition",
          desc: "Jumps to where a symbol is defined",
        },
        findReferences: {
          name: "lsp_find_references",
          desc: "Finds where a symbol is used across the workspace",
        },
        rename: {
          name: "lsp_rename",
          desc: "Renames a symbol across the workspace",
        },
        symbols: {
          name: "lsp_symbols",
          desc: "Shows symbols from a file or workspace",
        },
        grepSearch: {
          name: "ast_grep_search",
          desc: "Searches patterns while understanding code structure",
        },
        grepReplace: {
          name: "ast_grep_replace",
          desc: "Replaces patterns with structure-aware precision",
        },
      },
    },
    ralphLoop: {
      title: "Ralph",
      titleAccent: "Loop",
      description:
        "A self-checking loop that keeps going until the work is done.",
      description2: "It keeps running until this word appears:",
      done: "DONE",
      ralphLoop: "Standard Loop",
      ralphLoopDesc: "Good for focused work that moves forward in small steps.",
      ulwLoop: "Boosted Mode",
      ulwLoopDesc:
        "Ralph Loop plus Ultrawork. Best when the task is larger and more complex.",
      howItWorks: "How it works",
      steps: {
        start: {
          title: "Start",
          desc: "Begin with /ralph-loop or /ulw-loop",
        },
        work: {
          title: "Work",
          desc: "The agent completes part of the task and leaves a progress update",
        },
        persist: {
          title: "Save State",
          desc: "The current state is saved to .ralph-loop.json",
        },
        check: {
          title: "Check and Continue",
          desc: "On session.idle, it checks whether DONE has been reached",
        },
        complete: {
          title: "Finish",
          desc: "Once DONE is found, the loop ends",
        },
      },
      configuration: "Configuration",
      whenToUse: "When to use it",
      table: {
        scenario1: "Focused work in small steps",
        scenario2: "Complex work with multiple moving parts",
        scenario3: "Large refactoring with unclear scope",
      },
      proTip:
        'Add "Report back only after all subtasks are done" to your prompt to reduce early stopping.',
    },
    footer: {
      builtWith: "Built with",
    },
  },
};
