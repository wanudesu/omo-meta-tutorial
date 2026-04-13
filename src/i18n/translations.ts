export const translations = {
  ko: {
    // ============================================
    // NAVIGATION
    // ============================================
    nav: {
      gettingStarted: "시작하기",
      whatIs: "무엇인가요?",
      openCode: "OpenCode",
      omo: "omo",
      ultrawork: "ultrawork",
      agents: "에이전트",
      hashAnchor: "정밀 편집",
      ralphLoop: "Ralph Loop",
      commands: "명령어",
      faq: "FAQ",
      tips: "팁",
    },

    // ============================================
    // HERO SECTION
    // ============================================
    hero: {
      badge: "인터랙티브 가이드",
      title: "oh-my-openagent",
      subtitle: "튜토리얼",
      description:
        "OpenCode에서 쓰는 멀티 에이전트 플러그인입니다. 한 번 말하면 여러 에이전트가 함께 움직입니다.",
      descriptionJp: "ulw — 계획, 조사, 확인을 한 흐름으로.",
      github: "GitHub",
      getStarted: "시작하기",
    },

    // ============================================
    // GETTING STARTED SECTION (NEW)
    // ============================================
    gettingStarted: {
      icon: "🚀",
      title: "Getting Started",
      subtitle: "omo를 설치하고 5분 안에 첫 명령어를 실행해보세요",

      prerequisites: {
        title: "준비할 것",
        items: [
          "OpenCode가 설치되어 있어야 합니다",
          "터미널 기본 사용법을 알고 있으면 좋습니다 (cd, ls 등)",
          "사용할 LLM의 API 키가 필요합니다 (Claude, GPT 등)",
        ],
      },

      installation: {
        title: "설치",
        step1: {
          title: "설치 명령어 실행",
          desc: "터미널을 열고 아래 명령어로 oh-my-openagent를 설치하세요:",
        },
        step2: {
          title: "API 키 설정",
          desc: "설정 파일에서 LLM API 키를 입력하세요. omo는 여러 제공자를 지원합니다.",
        },
        step3: {
          title: "설치 확인",
          desc: "간단한 명령어를 실행해서 정상적으로 동작하는지 확인하세요.",
        },
      },

      firstCommand: {
        title: "첫 명령어",
        description:
          "설치가 끝났다면 바로 첫 명령어를 입력해보세요. 너무 자세히 쓸 필요는 없습니다. 자연스럽게 적으면 됩니다.",
        example: `# 원하는 작업을 그냥 적으면 됩니다
ulw 사용자 로그인 기능 추가해줘

# 그러면 omo가:
# 1. 코드베이스를 살펴보고
# 2. 계획을 세우고
# 3. 기능을 구현하고
# 4. 테스트를 만들고
# 5. 제대로 되는지 확인합니다`,
      },

      whatsNext: {
        title: "다음으로 볼 것",
        items: [
          "병렬 에이전트 실행이 켜지는 강력한 모드, Ultrawork 알아보기",
          "Discipline Agents가 어떤 팀처럼 함께 일하는지 이해하기",
          "오래 걸리는 작업을 끝날 때까지 이어가는 Ralph Loop 살펴보기",
        ],
      },
    },

    // ============================================
    // WHAT IS SECTION (EXPANDED)
    // ============================================
    whatIs: {
      icon: "📚",
      title: "What is Oh-My-OpenAgent?",
      subtitle: "기능을 보기 전에 먼저 전체 그림부터 가볍게 살펴봅시다",

      overview: {
        title: "짧게 설명하면",
        description:
          "Oh-My-OpenAgent(omo)는 OpenCode에 AI 에이전트 팀을 추가해주는 플러그인입니다. 하나의 AI만 쓰는 대신, 조사하고, 계획하고, 구현하고, 확인하는 여러 에이전트가 함께 일하게 됩니다.",
      },

      opencode: {
        icon: "🔧",
        title: "OpenCode",
        description:
          "코드를 쓰고, 고치고, 이해할 때 도움을 주는 AI 기반 코드 에디터이자 CLI입니다.",
        feature1: "코딩을 도와주는 AI 채팅 기능",
        feature2: "파일 작업 도구 내장",
        feature3: "플러그인과 스킬로 확장 가능",
      },
      omo: {
        icon: "🚀",
        title: "Oh-My-OpenAgent (omo)",
        description:
          "OpenCode에 여러 에이전트를 추가해서 팀처럼 함께 일하게 해주는 플러그인입니다.",
        feature1: "Discipline Agents(Sisyphus, Hephaestus, Prometheus) 추가",
        feature2: "강력한 병렬 실행을 위한 Ultrawork 모드 제공",
        feature3: "작업이 끝날 때까지 이어가는 Ralph Loop 제공",
      },
      comparison: {
        title: "omo가 있을 때와 없을 때",
        opencodeAlone: "omo 없이:",
        withOmo: "omo 사용:",
      },
      howWorks: {
        title: "어떻게 함께 작동하나요?",
        step1: {
          title: "omo 설치",
          description: "실행: bunx oh-my-openagent install",
        },
        step2: {
          title: "자연스럽게 입력",
          description: "하고 싶은 일을 평소 말하듯 적습니다",
        },
        step3: {
          title: "에이전트 협업",
          description: "Sisyphus가 맞는 에이전트를 골라 작업을 조율합니다",
        },
        step4: {
          title: "완료",
          description: "결과를 보여주기 전에 제대로 됐는지 확인합니다",
        },
      },
      example: {
        title: "전과 후 비교",
        beforeLabel: "omo 없이: 코드만 받고, 나머지는 직접 해야 함",
        afterLabel: "ulw 사용: 에이전트가 처음부터 끝까지 처리",
        codeBefore: `# 일반 AI 어시스턴트
"API에 사용자 인증을 추가해줘"

# 결과: 바로 코드가 나옴
# → 디버깅, 테스트, 연결 작업은 직접 해야 함`,
        codeAfter: `# omo + ulw
ulw API에 사용자 인증을 추가해줘

# 결과:
# - 기존 패턴 확인
# - 구현 계획 작성
# - 단계별 구현
# - 테스트 작성
# - 전체 확인
# - 끝난 뒤 보고`,
      },
    },

    // ============================================
    // OPENCODE DEEP DIVE (NEW)
    // ============================================
    openCodeDeep: {
      icon: "🔧",
      title: "Deep Dive: OpenCode",
      subtitle: "omo가 올라가는 기반인 OpenCode를 먼저 이해해봅시다",

      whatIs: {
        title: "OpenCode란?",
        description:
          "OpenCode는 AI와 함께 개발하기 위해 만들어진 코드 에디터이자 CLI입니다. 기존 IDE에 AI 기능을 억지로 붙인 것이 아니라, 처음부터 AI 에이전트와 함께 쓰기 좋게 설계되었습니다.",
      },

      coreFeatures: {
        title: "핵심 기능",
        chat: {
          title: "AI 채팅",
          description:
            "자연어로 질문하고, 설명을 듣고, 작업을 시킬 수 있는 인터페이스입니다.",
        },
        fileOperations: {
          title: "파일 작업",
          description:
            "자연어 명령으로 파일을 읽고, 쓰고, 수정하고, 이동할 수 있습니다. 복잡한 명령어를 외울 필요가 줄어듭니다.",
        },
        terminal: {
          title: "통합 터미널",
          description:
            "쉘 명령어를 바로 실행할 수 있습니다. 테스트, 빌드, 스크립트 실행에 편합니다.",
        },
        extensions: {
          title: "확장 가능한 구조",
          description:
            "omo 같은 플러그인과 여러 스킬을 붙일 수 있습니다. 에이전트는 이런 도구를 써서 더 전문적인 작업을 합니다.",
        },
      },

      howItWorks: {
        title: "작동 방식",
        description:
          "OpenCode는 AI 에이전트가 여러 도구를 이용해 코드베이스와 상호작용할 수 있게 해주는 틀을 제공합니다.",
        step1: "사용자가 자연어로 지시합니다",
        step2: "OpenCode가 맞는 도구나 에이전트로 요청을 보냅니다",
        step3: "에이전트가 작업을 수행하고 결과를 알려줍니다",
      },

      vsTraditionalIDE: {
        title: "OpenCode와 일반 IDE의 차이",
        description: "OpenCode는 기존 개발 환경과 이런 점이 다릅니다:",
        traditional: {
          title: "기존 IDE + AI",
          items: [
            "AI는 보조 도구나 자동완성 역할",
            "사용자가 모든 단계를 직접 지시",
            "하나의 에이전트, 하나의 문맥",
            "검증은 직접 해야 함",
          ],
        },
        opencode: {
          title: "OpenCode + omo",
          items: [
            "AI가 함께 일하는 협업자 역할",
            "사용자는 목표를 주고, AI가 단계를 정함",
            "여러 에이전트가 문맥을 공유하며 작업",
            "검증 루프가 내장됨",
          ],
        },
      },
    },

    // ============================================
    // OMO DEEP DIVE (NEW)
    // ============================================
    omoDeep: {
      icon: "🚀",
      title: "Deep Dive: omo",
      subtitle: "멀티 에이전트 시스템이 어떻게 움직이는지 알아봅시다",

      whatIs: {
        title: "omo란?",
        description:
          "omo(Oh-My-OpenAgent)는 OpenCode를 하나의 AI 비서에서, 여러 전문 에이전트가 함께 움직이는 팀으로 바꿔주는 플러그인입니다. 각 에이전트는 맡은 역할과 강점이 다릅니다.",
      },

      keyFeatures: {
        title: "주요 기능",
        agents: {
          title: "Discipline Agents",
          description:
            "Sisyphus(조율), Hephaestus(실행), Prometheus(계획)까지 세 에이전트가 있고, 각자 잘하는 일이 다릅니다.",
        },
        ultrawork: {
          title: "Ultrawork 모드",
          description:
            "병렬 실행, 깊은 조사, 자기 수정이 켜지는 강력한 모드입니다. 한 번의 명령으로 전체 흐름이 시작됩니다.",
        },
        ralphLoop: {
          title: "Ralph Loop",
          description:
            "작업이 정말 끝날 때까지 계속 이어가는 자동 루프입니다. 여러 번 반복이 필요한 긴 작업에 잘 맞습니다.",
        },
      },

      architecture: {
        title: "시스템 구조",
        description:
          "omo는 여러 전문 에이전트가 함께 일하는 계층형 구조를 사용합니다:",
        sisyphus:
          "Sisyphus: 조율 담당. 무엇을 해야 하는지 판단하고, 맞는 전문가에게 일을 나눕니다.",
        hephaestus:
          "Hephaestus: 실행 담당. 깊고 복잡한 작업을 자율적으로 처리합니다.",
        prometheus:
          "Prometheus: 계획 담당. 구현 전에 자세한 실행 계획을 만듭니다.",
      },
    },

    // ============================================
    // QUICK EXAMPLES SECTION (NEW)
    // ============================================
    quickExamples: {
      icon: "💡",
      title: "Quick Examples",
      subtitle: "실제 상황에서 omo가 어떻게 쓰이는지 빠르게 살펴보세요",

      simpleTask: {
        title: "간단한 작업: 기능 추가",
        description: "프로젝트에 새로운 기능을 넣는 가장 기본적인 예시입니다.",
        before:
          "# 필요한 기능을 간단히 말함\nulw 비밀번호 재설정 기능 추가해줘",
        after:
          "# 더 구체적으로 목표를 전달\nulw 이메일 인증이 포함된 비밀번호 재설정 기능 추가해줘",
        beforeResult: `# 결과:
# - 요구사항이 모호할 수 있음
# - 구현은 직접 챙겨야 할 수 있음
# - 테스트도 직접 확인해야 함
# - 검증도 따로 필요함`,
        afterResult: `# 결과:
# - omo가 필요한 내용을 먼저 확인하고
# - 구현 계획을 만들고
# - 테스트와 함께 구현하고
# - 이메일 연동까지 확인한 뒤
# - 완료를 보고함`,
      },

      complexTask: {
        title: "복잡한 작업: 시스템 마이그레이션",
        description: "코드베이스의 큰 부분을 옮기거나 다시 짜야 할 때입니다.",
        before: "# 목표가 너무 넓음\nulw 인증 시스템 마이그레이션해줘",
        after:
          "# 목표와 조건을 함께 전달\nulw 세션 기반 인증을 JWT로 마이그레이션해줘. 2주 동안은 이전 방식도 함께 지원해줘.",
        beforeResult: `# 결과:
# - 범위가 불분명함
# - 예외 상황을 놓칠 수 있음
# - 되돌리는 계획이 없음`,
        afterResult: `# 결과:
# - 범위가 분명해지고
# - 마이그레이션 계획이 생기고
# - 이전 방식 호환도 유지하고
# - 이동 경로가 명확해짐`,
      },

      refactoring: {
        title: "리팩토링: 코드 품질 개선",
        description: "기술 부채를 줄이고 구조를 더 좋게 만드는 작업입니다.",
        before: "# 단순한 요청\n/ralph-loop API 레이어 리팩토링해줘",
        after:
          "# 목표를 더 구체적으로 설명\n/ralph-loop API 레이어를 리팩토링해줘: 공통 유틸 분리, 에러 처리 추가, 타입 보강. 동작은 바꾸지 마.",
        beforeResult: `# 결과:
# - 범위가 애매함
# - 기존 동작이 깨질 수 있음
# - 끝났는지 판단하기 어려움`,
        afterResult: `# 결과:
# - 범위가 분명하고
# - 기존 동작을 유지하고
# - 완료 기준이 واضح해지고
# - 진행 상태도 저장됨`,
      },
    },

    // ============================================
    // ULTRAWORK SECTION (EXPANDED)
    // ============================================
    ultrawork: {
      icon: "⚡",
      title: "ultrawork",
      titleSlash: " / ulw",
      subtitle: "에이전트 성능을 최대한 끌어올리는 강한 작업 모드",
      description: "세 글자만 입력하면 켜집니다.",
      description2:
        "정밀하게 일하는 모드입니다. 한 단어로 전체 에이전트 흐름이 시작됩니다.",

      whatIs: {
        title: "Ultrawork란?",
        description:
          "Ultrawork는 에이전트 성능을 크게 끌어올리는 파워 모드입니다. 요청 앞에 'ulw'를 붙이면 자동 계획, 병렬 조사, 빠른 실행, 계속되는 검증이 한 번에 켜집니다.",
      },

      usage: "사용법",

      features: {
        autoPlanning: {
          title: "자동 계획",
          desc: "코드를 쓰기 전에 Sisyphus가 먼저 자세한 작업 계획을 만듭니다",
        },
        deepResearch: {
          title: "심층 조사",
          desc: "코드베이스를 잘 이해하기 위해 2~5개의 탐색 에이전트를 병렬로 돌립니다",
        },
        aggressiveParallel: {
          title: "강한 병렬 실행",
          desc: "여러 에이전트를 동시에 움직여 더 빨리 끝냅니다",
        },
        selfCorrection: {
          title: "자기 수정",
          desc: "결과를 계속 확인하고, 진짜 끝날 때까지 고쳐 나갑니다",
        },
      },

      howItWorks: "작동 방식",
      phases: {
        intentGate: {
          title: "의도 파악",
          desc: "입력한 말 그대로가 아니라, 실제로 원하는 작업을 이해합니다",
        },
        assessment: {
          title: "상태 확인",
          desc: "코드 구조와 기존 패턴을 살펴봅니다",
        },
        orchestrate: {
          title: "작업 조율",
          desc: "맞는 에이전트에게 일을 나누고 병렬로 실행합니다",
        },
        verify: {
          title: "검증",
          desc: "문제가 있으면 고치고, 전부 잘 될 때까지 확인합니다",
        },
      },

      keyDiff: {
        title: "핵심 차이",
        desc: "ulw는 계획, 조사, 병렬 실행, 검증을 한 흐름으로 처리합니다. 끝났다고 확인할 때까지 멈추지 않습니다.",
      },

      whenToUse: {
        title: "언제 쓰면 좋을까",
        good: "잘 맞는 경우: 복잡한 기능 추가, 시스템 마이그레이션, 큰 코드베이스 리팩토링, 여러 단계와 검증이 필요한 작업",
        bad: "굳이 안 써도 되는 경우: 단순 오타 수정, 한 줄 변경, 짧은 질문",
      },
    },

    // ============================================
    // DISCIPLINE AGENTS SECTION (EXPANDED)
    // ============================================
    agents: {
      icon: "🤖",
      title: "Discipline",
      titleAccent: "Agents",
      subtitle: "각자 역할이 있는 에이전트 팀",
      description:
        "Sisyphus가 여러 에이전트를 조율해서 하나의 팀처럼 움직입니다.",
      description2: "각 에이전트는 맡은 역할과 강점이 분명합니다.",

      phases: "작업 단계",
      categoryRouting: "작업 분류",

      sisyphus: {
        name: "Sisyphus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "잠들지 않는 CTO",
        concept:
          "숨은 요구를 파악하고, 코드베이스 상태를 보고 판단한 뒤, 맞는 전문가에게 일을 나눕니다.",
        phases: {
          intentGate: "입력한 문장보다 실제 목표를 먼저 읽습니다",
          assessment: "코드 구조와 정리 상태를 살펴봅니다",
          orchestration: "작업을 나누고, 병렬로 돌리고, 끝까지 이끕니다",
        },
        whenToUse:
          "잘 맞는 경우: 여러 단계가 있는 복잡한 작업을 조율할 때, 어떤 에이전트를 써야 할지 정해야 할 때, 전체 흐름을 관리할 때",
        example: `// Sisyphus는 전체 작업을 조율합니다
// 자연스럽게 요청하면 나머지는 알아서 정리합니다

ulw JWT 기반 사용자 인증 기능 구현해줘
// Sisyphus는:
// 1. 코드베이스 패턴을 살펴보고
// 2. 자세한 계획을 만들고
// 3. 맞는 에이전트에게 작업을 나누고
// 4. 전부 잘 되는지 확인합니다`,
      },

      hephaestus: {
        name: "Hephaestus",
        model: "gpt-5.4",
        role: "실행 담당",
        concept:
          "목표를 받으면 실제 결과로 만드는 에이전트입니다. 먼저 살펴보고, 그다음 구현합니다.",
        phases: {
          explore: "먼저 병렬 에이전트로 탐색합니다",
          plan: "작업 방향을 정리합니다",
          execute: "정확하게 구현합니다",
          verify: "실제로 잘 되는지 확인합니다",
        },
        whenToUse:
          "잘 맞는 경우: 깊은 자율 작업, 복잡한 리팩토링, 구조 결정, 손을 많이 대지 않고 구현을 맡기고 싶을 때",
        example: `// Hephaestus = 자율 실행 담당
// 복잡한 리팩토링이나 구조 변경에 좋습니다

/hephaestus 데이터 레이어를 Drizzle ORM으로 바꿔줘
// Hephaestus는:
// - 5개의 탐색 에이전트를 동시에 돌리고
// - 코드베이스 패턴을 분석하고
// - 실행 계획을 만들고
// - 처음부터 끝까지 작업을 마칩니다`,
      },

      prometheus: {
        name: "Prometheus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "설계 담당",
        concept:
          "바로 코드를 쓰기보다, 먼저 질문하고 범위를 정리한 뒤 자세한 실행 계획을 만듭니다.",
        phases: {
          interview: "질문으로 범위를 확인합니다",
          metis: "애매한 부분을 찾아냅니다",
          momus: "계획을 꼼꼼하게 검토합니다",
          output: "실행 가능한 계획을 만듭니다",
        },
        whenToUse:
          "잘 맞는 경우: 범위가 애매한 큰 기능, 구조 결정이 필요한 작업, 시작 전에 명확한 로드맵이 필요할 때",
        example: `// Prometheus = 계획 모드
// 큰 기능이나 범위가 애매한 작업에 좋습니다

/prometheus 실시간 채팅 시스템 만들어줘
// Prometheus는:
// 1. 필요한 질문을 하고
// 2. 코드베이스를 살펴보고
// 3. 빠진 부분을 분석하고
// 4. 계획을 검토한 뒤
// 5. 자세한 실행 계획을 정리합니다`,
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
          desc: "작은 수정, 단일 파일 편집",
        },
        deep: {
          name: "deep",
          desc: "깊이 있는 자율 조사",
        },
        writing: {
          name: "writing",
          desc: "문서와 설명문 작성",
        },
        git: {
          name: "git-master",
          desc: "커밋과 리베이스 작업",
        },
      },
    },

    // ============================================
    // HASH-ANCHORED EDIT SECTION
    // ============================================
    hashAnchor: {
      icon: "🎯",
      title: "Hash-Anchored",
      titleAccent: "Edit",
      description: "필요한 부분을, 필요한 위치에서 정확하게 수정합니다.",
      description2:
        "파일을 뒤질 필요 없이 줄과 문자 위치로 바로 이동할 수 있습니다.",

      whatIs: {
        title: "Hash-Anchored Editing이란?",
        description:
          "Hash-Anchored Editing은 줄 번호와 문자 위치를 기준으로 필요한 부분만 정확히 바꾸는 방식입니다. 코드를 계속 찾을 필요 없이, 수정해야 할 지점으로 바로 이동합니다.",
      },

      lspTools: "LSP 도구",
      astTools: "AST 도구",
      realWorld: "실전 예시",

      whyHash: {
        title: "왜 쓰나요?",
        items: [
          "큰 코드베이스에서도 안정적으로 동작합니다",
          "TypeScript, Python 같은 언어 구조를 이해합니다",
          "이름 변경과 리팩토링 작업을 더 안전하게 할 수 있습니다",
        ],
      },

      astVsGrep: {
        title: "AST와 Grep 비교",
        items: [
          "코드 구조를 이해합니다",
          "문자열이나 주석을 실수로 건드리지 않습니다",
          "리팩토링 작업에 더 안전합니다",
        ],
      },

      tools: {
        gotoDefinition: {
          name: "lsp_goto_definition",
          desc: "심볼이 정의된 위치로 바로 이동합니다",
        },
        findReferences: {
          name: "lsp_find_references",
          desc: "워크스페이스 전체에서 사용된 곳을 찾습니다",
        },
        rename: {
          name: "lsp_rename",
          desc: "워크스페이스 전체에서 안전하게 이름을 바꿉니다",
        },
        symbols: {
          name: "lsp_symbols",
          desc: "파일이나 워크스페이스의 심볼을 봅니다",
        },
        grepSearch: {
          name: "ast_grep_search",
          desc: "코드 구조를 이해하면서 패턴을 찾습니다",
        },
        grepReplace: {
          name: "ast_grep_replace",
          desc: "코드 구조를 기준으로 정확하게 바꿉니다",
        },
      },
    },

    // ============================================
    // RALPH LOOP SECTION
    // ============================================
    ralphLoop: {
      icon: "🔄",
      title: "Ralph",
      titleAccent: "Loop",
      description: "작업이 끝날 때까지 스스로 확인하며 계속 도는 루프입니다.",
      description2: "아래 문구가 나올 때까지 자동으로 실행됩니다:",
      done: "DONE",

      whatIs: {
        title: "Ralph Loop란?",
        description:
          "Ralph Loop는 상태를 저장하면서, 완료 신호가 나올 때까지 계속 이어가는 자동 작업 흐름입니다. 여러 번 반복이 필요하거나 계속 지켜보기 어려운 작업에 잘 맞습니다.",
      },

      ralphLoop: "기본 루프",
      ralphLoopDesc:
        "기본 자기 반복 루프입니다. 천천히 단계별로 진행하는 작업에 좋습니다.",
      ulwLoop: "God Mode",
      ulwLoopDesc:
        "Ralph Loop와 Ultrawork를 함께 쓰는 방식입니다. 복잡한 작업에 가장 강합니다.",

      howItWorks: "작동 방식",
      steps: {
        start: {
          title: "루프 시작",
          desc: "/ralph-loop 또는 /ulw-loop로 시작합니다",
        },
        work: {
          title: "에이전트 작업",
          desc: "에이전트가 작업 일부를 처리하고 진행 상황을 남깁니다",
        },
        persist: {
          title: "상태 저장",
          desc: "진행 상태가 .ralph-loop.json에 저장됩니다",
        },
        check: {
          title: "확인 후 계속",
          desc: "세션이 멈추면 DONE 신호가 있는지 확인합니다",
        },
        complete: {
          title: "완료",
          desc: "DONE이 확인되면 루프가 깔끔하게 종료됩니다",
        },
      },

      configuration: "설정",
      whenToUse: "어떤 걸 쓰면 좋을까?",
      table: {
        scenario1: "집중해서 조금씩 진행하는 작업",
        scenario2: "여러 부분이 얽힌 복잡한 작업",
        scenario3: "범위가 애매한 큰 리팩토링",
      },
      proTip:
        '요청 끝에 "모든 하위 작업이 끝난 뒤에만 보고해줘"를 넣어보세요. 너무 일찍 멈추는 일을 줄이는 데 도움이 됩니다.',
    },

    // ============================================
    // COMMAND REFERENCE SECTION (NEW)
    // ============================================
    commands: {
      icon: "⌨️",
      title: "Command Reference",
      subtitle: "사용할 수 있는 명령어를 빠르게 확인해보세요",

      overview: {
        title: "명령어 종류",
        description:
          "omo는 여러 방식으로 모드를 켤 수 있습니다. 상황에 맞는 명령어를 쓰면 됩니다.",
      },

      slashCommands: {
        title: "슬래시 명령어",
        description: "에이전트를 바로 실행하는 명령어입니다:",
        commands: [
          { name: "/ralph-loop", description: "계속 이어가는 자동 루프 시작" },
          {
            name: "/ulw-loop",
            description: "Ralph Loop와 Ultrawork를 함께 실행",
          },
          {
            name: "/hephaestus",
            description: "자율 실행 에이전트를 바로 실행",
          },
          { name: "/prometheus", description: "복잡한 작업용 계획 모드 실행" },
        ],
      },

      prefixes: {
        title: "접두어",
        description: "요청 앞에 붙여서 모드를 켭니다:",
        commands: [
          { name: "ulw", description: "한 번의 요청에 Ultrawork 모드 적용" },
          { name: "ultrawork", description: "Ultrawork의 전체 이름" },
        ],
      },

      shortcuts: {
        title: "유틸리티 단축 명령어",
        description: "제어와 디버깅에 쓰는 명령어입니다:",
        commands: [
          { name: "/cancel-ralph", description: "실행 중인 Ralph Loop 중지" },
          {
            name: "/stop-continuation",
            description: "모든 이어서 실행 기능 중지",
          },
        ],
      },
    },

    // ============================================
    // FAQ SECTION (NEW)
    // ============================================
    faq: {
      icon: "❓",
      title: "Frequently Asked Questions",
      subtitle: "처음 쓰는 사람들이 자주 묻는 질문",

      questions: [
        {
          q: "omo는 일반 AI 어시스턴트와 뭐가 다른가요?",
          a: "일반 AI 어시스턴트는 보통 코드만 주고, 나머지는 사용자가 직접 해야 합니다. 반면 omo는 여러 에이전트를 조율해서 구현, 테스트, 검증까지 이어서 처리합니다. 원하는 것을 말하면 omo가 나머지를 맡습니다.",
        },
        {
          q: "프롬프트를 완벽하게 써야 하나요?",
          a: "아니요. omo의 핵심 기능 중 하나가 Intent Gate입니다. Sisyphus는 입력한 문장만 보는 것이 아니라, 실제로 원하는 것을 파악합니다. 자연스럽고 설명하듯 적어도 됩니다.",
        },
        {
          q: "에이전트가 실수하면 어떻게 되나요?",
          a: "omo에는 여러 단계의 검증이 있습니다. Ultrawork에는 자기 수정이 포함되어 있고, Ralph Loop는 DONE 신호가 나올 때까지 반복할 수 있습니다. 큰 작업도 확인 가능한 작은 단위로 나눠집니다.",
        },
        {
          q: "작은 작업에도 omo를 쓸 수 있나요?",
          a: "네. 간단한 수정도 가능합니다. omo는 작업 크기를 보고 적절한 에이전트로 자연스럽게 연결합니다.",
        },
        {
          q: "Ralph Loop는 언제 멈춰야 하는지 어떻게 아나요?",
          a: "완료 신호는 사용자가 정합니다. 보통 'DONE', 'COMPLETE' 같은 문구나 특정 출력 형식을 씁니다. 루프는 그 신호를 찾을 때까지 계속됩니다.",
        },
        {
          q: "omo는 어떤 LLM 모델을 지원하나요?",
          a: "Claude(Opus, Sonnet), GPT-4/5, Kimi, GLM 등 여러 제공자를 지원합니다. 설정은 oh-my-openagent.jsonc에서 할 수 있습니다.",
        },
      ],
    },

    // ============================================
    // TIPS SECTION (NEW)
    // ============================================
    tips: {
      icon: "✨",
      title: "Tips & Best Practices",
      subtitle: "omo를 더 잘 쓰는 방법",

      categories: {
        writing: {
          title: "좋은 요청 작성법",
          tips: [
            "과정보다 결과 중심으로 적어보세요. HOW보다 WHAT에 집중하면 됩니다.",
            "조건을 함께 넣어보세요. 예: 'Y는 바꾸지 말고 X만 해줘', '이전 방식 호환은 유지해줘'",
            "범위가 애매하면 /prometheus로 먼저 질문을 받는 것도 좋습니다.",
            "완료 기준을 적어두면 좋습니다. 예: '모든 테스트가 통과하면 끝', 'API가 200을 반환하면 완료'",
          ],
        },
        workflow: {
          title: "작업 흐름 팁",
          tips: [
            "10분 이상 걸릴 것 같은 작업은 /ralph-loop가 잘 맞습니다.",
            "큰 기능은 작은 목표로 나눠서 루프를 돌리면 관리하기 쉽습니다.",
            "구조 결정이 필요한 작업은 구현 전에 /prometheus로 시작해보세요.",
            "한 번의 복잡한 작업은 'ulw', 계속 이어갈 작업은 '/ulw-loop'가 좋습니다.",
          ],
        },
        debugging: {
          title: "디버깅과 복구",
          tips: [
            "omo가 다른 방향으로 가면 중간에 멈추고 목표를 다시 짧게 설명하세요.",
            "/cancel-ralph로 루프를 끊고, 더 좋은 설명으로 다시 시작할 수 있습니다.",
            ".ralph-loop.json을 보면 어디까지 진행됐는지 확인할 수 있습니다.",
            "잘 안 잡히는 버그는 '이 부분만 집중해서 보고, 다른 건 건드리지 마'처럼 범위를 좁혀보세요.",
          ],
        },
      },
    },

    // ============================================
    // FOOTER
    // ============================================
    footer: {
      builtWith: "Built with",
    },
  },

  en: {
    // ============================================
    // NAVIGATION
    // ============================================
    nav: {
      gettingStarted: "Getting Started",
      whatIs: "What is?",
      openCode: "OpenCode",
      omo: "omo",
      ultrawork: "ultrawork",
      agents: "Agents",
      hashAnchor: "Precision Edit",
      ralphLoop: "Ralph Loop",
      commands: "Commands",
      faq: "FAQ",
      tips: "Tips",
    },

    // ============================================
    // HERO SECTION
    // ============================================
    hero: {
      badge: "Interactive Guide",
      title: "oh-my-openagent",
      subtitle: "Tutorial",
      description:
        "A multi-agent plugin for OpenCode. Tell it once, and a team of agents works together.",
      descriptionJp: "ulw — plan, research, verify, all in one flow.",
      github: "GitHub",
      getStarted: "Get Started",
    },

    // ============================================
    // GETTING STARTED SECTION (NEW)
    // ============================================
    gettingStarted: {
      icon: "🚀",
      title: "Getting Started",
      subtitle: "Install omo and run your first command in under 5 minutes",

      prerequisites: {
        title: "Prerequisites",
        items: [
          "OpenCode installed on your machine",
          "Basic terminal knowledge (how to cd, ls, etc.)",
          "An API key for your preferred LLM (Claude, GPT, etc.)",
        ],
      },

      installation: {
        title: "Installation",
        step1: {
          title: "Run the install command",
          desc: "Open your terminal and run the following command to install oh-my-openagent:",
        },
        step2: {
          title: "Configure your API key",
          desc: "Set up your LLM API key in the configuration file. omo supports multiple providers.",
        },
        step3: {
          title: "Verify installation",
          desc: "Run a simple command to make sure everything is working correctly.",
        },
      },

      firstCommand: {
        title: "Your First Command",
        description:
          "Once installed, try running your first command. Type naturally — you don't need to be specific.",
        example: `# Just describe what you want!
ulw Add user login functionality

# That's it! omo will:
# 1. Explore your codebase
# 2. Create a plan
# 3. Implement the feature
# 4. Write tests
# 5. Verify everything works`,
      },

      whatsNext: {
        title: "What's Next?",
        items: [
          "Learn about Ultrawork mode — the power mode that enables parallel agent execution",
          "Understand the Discipline Agents and how they work together as a team",
          "Explore the Ralph Loop for long-running tasks that need to continue until completion",
        ],
      },
    },

    // ============================================
    // WHAT IS SECTION (EXPANDED)
    // ============================================
    whatIs: {
      icon: "📚",
      title: "What is Oh-My-OpenAgent?",
      subtitle: "Before diving into features, let's understand the big picture",

      overview: {
        title: "The Short Version",
        description:
          "Oh-My-OpenAgent (omo) is a plugin that adds a team of AI agents to OpenCode. Instead of one AI assistant, you get a coordinated team that can research, plan, implement, and verify — all working together.",
      },

      opencode: {
        icon: "🔧",
        title: "OpenCode",
        description:
          "An AI-powered code editor and CLI that helps you write, fix, and understand code.",
        feature1: "Built-in AI chat for coding assistance",
        feature2: "File operation tools built in",
        feature3: "Extensible via plugins and skills",
      },
      omo: {
        icon: "🚀",
        title: "Oh-My-OpenAgent (omo)",
        description:
          "A plugin that adds multiple agents to OpenCode, working together like a team.",
        feature1: "Adds Discipline Agents (Sisyphus, Hephaestus, Prometheus)",
        feature2: "Enables Ultrawork mode for powerful parallel execution",
        feature3: "Provides Ralph Loop for continuous work until completion",
      },
      comparison: {
        title: "omo vs Without omo",
        opencodeAlone: "Without omo:",
        withOmo: "With omo:",
      },
      howWorks: {
        title: "How They Work Together",
        step1: {
          title: "Install omo",
          description: "Run: bunx oh-my-openagent install",
        },
        step2: {
          title: "Type naturally",
          description: "Describe what you want to do in plain English",
        },
        step3: {
          title: "Agent collaboration",
          description:
            "Sisyphus picks the right agents and coordinates the work",
        },
        step4: {
          title: "Done",
          description: "Verifies results before reporting back to you",
        },
      },
      example: {
        title: "Before vs After",
        beforeLabel: "Without omo: Get code, do the rest yourself",
        afterLabel: "With ulw: Agent handles everything end-to-end",
        codeBefore: `# Regular AI assistant
"Add user authentication to the API"

# Result: You get code immediately
# → You handle debugging, testing, integration yourself`,
        codeAfter: `# omo + ulw
ulw Add user authentication to the API

# Result:
# - Explores existing patterns
# - Creates implementation plan
# - Implements step by step
# - Writes tests
# - Verifies everything
# - Reports when truly complete`,
      },
    },

    // ============================================
    // OPENCODE DEEP DIVE (NEW)
    // ============================================
    openCodeDeep: {
      icon: "🔧",
      title: "Deep Dive: OpenCode",
      subtitle: "Understanding the foundation that omo builds upon",

      whatIs: {
        title: "What is OpenCode?",
        description:
          "OpenCode is an AI-native code editor and CLI designed specifically for AI-assisted development. Unlike traditional IDEs that bolt on AI features, OpenCode was built from the ground up to work with AI agents.",
      },

      coreFeatures: {
        title: "Core Features",
        chat: {
          title: "AI Chat",
          description:
            "Natural language interface for asking questions, getting explanations, and directing the AI to perform tasks.",
        },
        fileOperations: {
          title: "File Operations",
          description:
            "Read, write, edit, and navigate files through natural language commands. No need to remember complex git commands.",
        },
        terminal: {
          title: "Integrated Terminal",
          description:
            "Run shell commands directly. Perfect for testing, building, and running scripts.",
        },
        extensions: {
          title: "Extensible Architecture",
          description:
            "Built-in support for plugins (like omo) and skills that extend capabilities. Agents can use these tools to perform specialized tasks.",
        },
      },

      howItWorks: {
        title: "How It Works",
        description:
          "OpenCode provides a framework where AI agents can interact with your codebase using specialized tools.",
        step1: "You give instructions in plain English",
        step2: "OpenCode routes the request to appropriate tools/agents",
        step3: "Agents perform actions and report results",
      },

      vsTraditionalIDE: {
        title: "OpenCode vs Traditional IDEs",
        description:
          "Here's how OpenCode differs from traditional development environments:",
        traditional: {
          title: "Traditional IDE + AI",
          items: [
            "AI as a helper/autocomplete",
            "You direct every action",
            "Single agent, single context",
            "Manual verification required",
          ],
        },
        opencode: {
          title: "OpenCode + omo",
          items: [
            "AI as a autonomous collaborator",
            "You set goals, AI figures out steps",
            "Multi-agent, shared context",
            "Built-in verification loops",
          ],
        },
      },
    },

    // ============================================
    // OMO DEEP DIVE (NEW)
    // ============================================
    omoDeep: {
      icon: "🚀",
      title: "Deep Dive: omo",
      subtitle: "Understanding how the multi-agent system works",

      whatIs: {
        title: "What is omo?",
        description:
          "omo (Oh-My-OpenAgent) is a plugin that transforms OpenCode from a single AI assistant into a coordinated team of specialized agents. Each agent has a distinct role and expertise.",
      },

      keyFeatures: {
        title: "Key Features",
        agents: {
          title: "Discipline Agents",
          description:
            "Three specialized agents: Sisyphus (orchestrator), Hephaestus (execution), and Prometheus (planning). Each excels at different types of work.",
        },
        ultrawork: {
          title: "Ultrawork Mode",
          description:
            "A high-intensity mode that activates parallel execution, deep research, and self-correction. One command enables an entire workflow.",
        },
        ralphLoop: {
          title: "Ralph Loop",
          description:
            "A self-running loop that continues until the work is truly complete. Perfect for long-running tasks that need multiple iterations.",
        },
      },

      architecture: {
        title: "System Architecture",
        description:
          "omo uses a hierarchical agent architecture where specialized agents work together:",
        sisyphus:
          "Sisyphus: The orchestrator. Decides what needs to be done and delegates to specialists.",
        hephaestus:
          "Hephaestus: The executor. Autonomous agent for deep, complex work.",
        prometheus:
          "Prometheus: The planner. Creates detailed execution plans before implementation.",
      },
    },

    // ============================================
    // QUICK EXAMPLES SECTION (NEW)
    // ============================================
    quickExamples: {
      icon: "💡",
      title: "Quick Examples",
      subtitle: "See omo in action with real-world scenarios",

      simpleTask: {
        title: "Simple Task: Add a Feature",
        description:
          "The most basic use case — adding something new to your project.",
        before:
          "# Just describe what you need\nulw Add password reset functionality",
        after:
          "# Tell omo what to build\nulw Add password reset with email verification",
        beforeResult:
          "# Result: \n# - Clear requirements needed\n# - Manual implementation\n# - Manual testing\n# - Manual verification",
        afterResult:
          "# Result:\n# - omo asks clarifying questions\n# - Creates implementation plan\n# - Implements with tests\n# - Verifies email integration\n# - Reports completion",
      },

      complexTask: {
        title: "Complex Task: System Migration",
        description:
          "When you need to migrate or refactor large parts of your codebase.",
        before: "# Vague goal\nulw Migrate our auth system",
        after:
          "# Clear goal with constraints\nulw Migrate auth from session-based to JWT tokens. Keep backward compatibility for 2 weeks.",
        beforeResult:
          "# Result:\n# - Unclear scope\n# - Might miss edge cases\n# - No rollback plan",
        afterResult:
          "# Result:\n# - Scope well-defined\n# - Migration plan created\n# - Backward compat implemented\n# - Clear migration path",
      },

      refactoring: {
        title: "Refactoring: Improve Code Quality",
        description: "Cleaning up technical debt and improving code structure.",
        before: "# Simple request\n/ralph-loop Refactor the API layer",
        after:
          "# Specific refactoring goal\n/ralph-loop Refactor API layer: extract shared utilities, add error handling, improve type coverage. Do not change behavior.",
        beforeResult:
          "# Result:\n# - Undefined scope\n# - Might break things\n# - No clear end point",
        afterResult:
          "# Result:\n# - Clear scope defined\n# - Behavior preserved\n# - Measurable completion\n# - Progress saved",
      },
    },

    // ============================================
    // ULTRAWORK SECTION (EXPANDED)
    // ============================================
    ultrawork: {
      icon: "⚡",
      title: "ultrawork",
      titleSlash: " / ulw",
      subtitle: "High-intensity mode for maximum agent performance",
      description: "Just three letters to activate it.",
      description2:
        "A high-precision work mode. One word activates the entire agent workflow.",

      whatIs: {
        title: "What is Ultrawork?",
        description:
          "Ultrawork is a power mode that turbocharges agent capabilities. When you prefix your request with 'ulw', it activates multiple advanced features simultaneously: automatic planning, parallel research, aggressive execution, and continuous verification.",
      },

      usage: "Usage",

      features: {
        autoPlanning: {
          title: "Auto Planning",
          desc: "Before writing any code, Sisyphus creates a detailed task plan based on your request",
        },
        deepResearch: {
          title: "Deep Research",
          desc: "Runs 2-5 parallel exploration agents to thoroughly understand your codebase",
        },
        aggressiveParallel: {
          title: "Aggressive Parallel",
          desc: "Executes multiple agents simultaneously for faster completion",
        },
        selfCorrection: {
          title: "Self-Correction",
          desc: "Continuously verifies results and iterates until the work is truly complete",
        },
      },

      howItWorks: "How It Works",
      phases: {
        intentGate: {
          title: "Intent Gate",
          desc: "Understands what you actually want, not just what you typed",
        },
        assessment: {
          title: "Assessment",
          desc: "Examines codebase structure and existing patterns",
        },
        orchestrate: {
          title: "Orchestrate",
          desc: "Delegates work to appropriate agents and runs them in parallel",
        },
        verify: {
          title: "Verify",
          desc: "Checks for issues and fixes them until everything works",
        },
      },

      keyDiff: {
        title: "Key Difference",
        desc: "ulw handles planning, research, parallel execution, and verification in one flow. It doesn't stop until it confirms completion.",
      },

      whenToUse: {
        title: "When to Use Ultrawork",
        good: "Great for: complex features, system migrations, refactoring large codebases, anything that needs multiple steps and verification",
        bad: "Overkill for: simple typos, one-line changes, quick questions",
      },
    },

    // ============================================
    // DISCIPLINE AGENTS SECTION (EXPANDED)
    // ============================================
    agents: {
      icon: "🤖",
      title: "Discipline",
      titleAccent: "Agents",
      subtitle: "A team of specialists working together",
      description:
        "Sisyphus coordinates multiple agents to work as a unified team.",
      description2: "Each agent has a clear role and specialized expertise.",

      phases: "Workflow Phases",
      categoryRouting: "Task Routing",

      sisyphus: {
        name: "Sisyphus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "The Never-Sleeping CTO",
        concept:
          "Understands hidden requirements, makes decisions based on codebase state, and delegates to the right specialists.",
        phases: {
          intentGate: "Reads your actual goal, not just your words",
          assessment: "Evaluates codebase organization and patterns",
          orchestration: "Delegates, parallelizes, and drives to completion",
        },
        whenToUse:
          "Best for: orchestrating complex multi-step tasks, deciding which agents to use, managing the overall workflow",
        example:
          "// Sisyphus is your main orchestrator\n// Type your request naturally - he figures out the rest\n\nulw Implement user authentication with JWT\n// Sisyphus will:\n// 1. Explore codebase patterns\n// 2. Create a detailed plan\n// 3. Delegate to specialists\n// 4. Verify everything works",
      },

      hephaestus: {
        name: "Hephaestus",
        model: "gpt-5.4",
        role: "The Executor",
        concept:
          "Takes goals and makes them reality. Given a target, he explores first, then implements.",
        phases: {
          explore: "Explores first using parallel agents",
          plan: "Organizes the direction of work",
          execute: "Implements with precision",
          verify: "Confirms it actually works",
        },
        whenToUse:
          "Best for: deep autonomous work, complex refactoring, architecture decisions, when you need hands-off implementation",
        example:
          "// Hephaestus = autonomous deep work\n// Best for: complex refactoring, architecture decisions\n\n/hephaestus Rewrite the data layer to use Drizzle ORM\n// He will:\n// - Fire 5 explore agents simultaneously\n// - Analyze patterns across the codebase\n// - Create an execution plan\n// - Complete the task end-to-end",
      },

      prometheus: {
        name: "Prometheus",
        model: "claude-opus-4-6 / kimi-k2.5 / glm-5",
        role: "The Architect",
        concept:
          "Before writing code, he asks questions, clarifies scope, and creates detailed execution plans.",
        phases: {
          interview: "Confirms scope through questions",
          metis: "Identifies ambiguous parts",
          momus: "Rigorous plan review",
          output: "Produces executable plan",
        },
        whenToUse:
          "Best for: large features with uncertain scope, architectural decisions, when you need a clear roadmap before starting",
        example:
          "// Prometheus = planning mode\n// Best for: large features, uncertain scope\n\n/prometheus Build a real-time chat system\n// He will:\n// 1. Ask clarifying questions\n// 2. Explore your codebase\n// 3. Run gap analysis (Metis)\n// 4. Validate with Momus\n// 5. Output detailed execution plan",
      },

      categories: {
        visual: {
          name: "visual-engineering",
          desc: "Frontend, UI/UX, styling work",
        },
        ultrabrain: {
          name: "ultrabrain",
          desc: "Complex logic and architecture",
        },
        quick: {
          name: "quick",
          desc: "Small fixes, single file edits",
        },
        deep: {
          name: "deep",
          desc: "In-depth autonomous research",
        },
        writing: {
          name: "writing",
          desc: "Documentation and prose",
        },
        git: {
          name: "git-master",
          desc: "Commits and rebase",
        },
      },
    },

    // ============================================
    // HASH-ANCHORED EDIT SECTION
    // ============================================
    hashAnchor: {
      icon: "🎯",
      title: "Hash-Anchored",
      titleAccent: "Edit",
      description: "Edit exactly what you need, exactly where you need it.",
      description2:
        "Navigate directly to the exact line and character position without searching through files.",

      whatIs: {
        title: "What is Hash-Anchored Editing?",
        description:
          "Hash-Anchored Editing uses precise file locations (line + character position) to make targeted changes. Instead of searching through code, you jump directly to the exact spot that needs modification.",
      },

      lspTools: "LSP Tools",
      astTools: "AST Tools",
      realWorld: "Real-World Examples",

      whyHash: {
        title: "Why Use It?",
        items: [
          "Works reliably even in large codebases",
          "Understands language structure (TypeScript, Python, etc.)",
          "Safer for rename operations and refactoring",
        ],
      },

      astVsGrep: {
        title: "AST vs Grep",
        items: [
          "Understands code structure",
          "Won't accidentally touch strings or comments",
          "Safer for refactoring",
        ],
      },

      tools: {
        gotoDefinition: {
          name: "lsp_goto_definition",
          desc: "Jump to where a symbol is defined",
        },
        findReferences: {
          name: "lsp_find_references",
          desc: "Find all usages across the workspace",
        },
        rename: {
          name: "lsp_rename",
          desc: "Rename across the entire workspace safely",
        },
        symbols: {
          name: "lsp_symbols",
          desc: "View symbols in a file or workspace",
        },
        grepSearch: {
          name: "ast_grep_search",
          desc: "Find patterns while understanding structure",
        },
        grepReplace: {
          name: "ast_grep_replace",
          desc: "Replace precisely based on code structure",
        },
      },
    },

    // ============================================
    // RALPH LOOP SECTION
    // ============================================
    ralphLoop: {
      icon: "🔄",
      title: "Ralph",
      titleAccent: "Loop",
      description:
        "A self-checking loop that keeps going until the job is done.",
      description2: "Runs automatically until it outputs:",
      done: "DONE",

      whatIs: {
        title: "What is Ralph Loop?",
        description:
          "Ralph Loop is a self-running workflow that persists state and continues until you confirm completion. Perfect for tasks that need multiple iterations or when you can't watch constantly.",
      },

      ralphLoop: "Standard Loop",
      ralphLoopDesc:
        "Basic self-referential loop. Great for focused, step-by-step work.",
      ulwLoop: "God Mode",
      ulwLoopDesc:
        "Ralph Loop + Ultrawork combined. Maximum intensity for complex tasks.",

      howItWorks: "How It Works",
      steps: {
        start: {
          title: "Start the Loop",
          desc: "Kick it off with /ralph-loop or /ulw-loop",
        },
        work: {
          title: "Agent Works",
          desc: "The agent does a chunk of work and logs its progress",
        },
        persist: {
          title: "State Saved",
          desc: "Progress is saved to .ralph-loop.json",
        },
        check: {
          title: "Check & Continue",
          desc: "When the session pauses, it checks for a DONE signal",
        },
        complete: {
          title: "Complete",
          desc: "DONE found → loop exits cleanly",
        },
      },

      configuration: "Configuration",
      whenToUse: "Which one should I use?",
      table: {
        scenario1: "Focused, incremental work",
        scenario2: "Complex, multi-part tasks",
        scenario3: "Large refactors with unclear scope",
      },
      proTip:
        'Add "Report only after confirming all subtasks are complete" to your request. It helps prevent the agent from stopping too early.',
    },

    // ============================================
    // COMMAND REFERENCE SECTION (NEW)
    // ============================================
    commands: {
      icon: "⌨️",
      title: "Command Reference",
      subtitle: "Quick lookup for all available commands",

      overview: {
        title: "Command Types",
        description:
          "omo provides multiple ways to activate different modes. Use the right command for your use case.",
      },

      slashCommands: {
        title: "Slash Commands",
        description: "Direct agent activation commands:",
        commands: [
          {
            name: "/ralph-loop",
            description: "Start self-running loop for continuous work",
          },
          { name: "/ulw-loop", description: "Ralph Loop + Ultrawork combined" },
          {
            name: "/hephaestus",
            description: "Activate autonomous executor directly",
          },
          {
            name: "/prometheus",
            description: "Activate planning mode for complex tasks",
          },
        ],
      },

      prefixes: {
        title: "Command Prefixes",
        description: "Prefix your request to activate modes:",
        commands: [
          {
            name: "ulw",
            description: "Activate Ultrawork mode for single request",
          },
          {
            name: "ultrawork",
            description: "Full form of Ultrawork activation",
          },
        ],
      },

      shortcuts: {
        title: "Utility Shortcuts",
        description: "Control and debugging commands:",
        commands: [
          { name: "/cancel-ralph", description: "Stop an active Ralph Loop" },
          {
            name: "/stop-continuation",
            description: "Stop all continuation mechanisms",
          },
        ],
      },
    },

    // ============================================
    // FAQ SECTION (NEW)
    // ============================================
    faq: {
      icon: "❓",
      title: "Frequently Asked Questions",
      subtitle: "Common questions from new users",

      questions: [
        {
          q: "What's the difference between omo and a regular AI assistant?",
          a: "While a regular AI assistant gives you code to implement yourself, omo coordinates a team of agents that implement, test, and verify the work end-to-end. You describe what you want, and omo handles the rest.",
        },
        {
          q: "Do I need to write perfect prompts?",
          a: "No! One of omo's key features is the Intent Gate — Sisyphus understands what you actually want, not just what you typed. Be natural and descriptive, and omo will figure out the details.",
        },
        {
          q: "What if the agent makes a mistake?",
          a: "omo has multiple verification layers. Ultrawork mode includes self-correction, and the Ralph Loop can iterate until you confirm DONE. Large tasks are broken into verifiable chunks.",
        },
        {
          q: "Can I use omo for small tasks?",
          a: "Yes! For quick fixes, use the 'quick' category naturally. omo intelligently routes tasks to appropriate agents based on complexity.",
        },
        {
          q: "How does Ralph Loop know when to stop?",
          a: "You define the completion signal. Common signals include 'DONE', 'COMPLETE', or specific output patterns. The loop continues until it detects your signal.",
        },
        {
          q: "What LLM models does omo support?",
          a: "omo supports multiple providers including Claude (Opus, Sonnet), GPT-4/5, Kimi, and GLM. Configuration is in oh-my-openagent.jsonc.",
        },
      ],
    },

    // ============================================
    // TIPS SECTION (NEW)
    // ============================================
    tips: {
      icon: "✨",
      title: "Tips & Best Practices",
      subtitle: "Get the most out of omo",

      categories: {
        writing: {
          title: "Writing Better Requests",
          tips: [
            "Be outcome-focused, not process-focused. Describe WHAT you want, not HOW to do it.",
            "Include constraints: 'Do X without changing Y' or 'Keep backward compatibility'.",
            "For ambiguous tasks, let Prometheus ask questions first with /prometheus.",
            "Add success criteria: 'Done when all tests pass' or 'Done when API returns 200'.",
          ],
        },
        workflow: {
          title: "Workflow Optimization",
          tips: [
            "Use /ralph-loop for tasks that might take more than 10 minutes.",
            "Break large features into smaller loops with clear milestones.",
            "Start with /prometheus for architectural decisions before implementation.",
            "Use 'ulw' prefix for single complex tasks, /ulw-loop for ongoing work.",
          ],
        },
        debugging: {
          title: "Debugging & Recovery",
          tips: [
            "If omo goes off-track, interrupt and rephrase your goal.",
            "Use /cancel-ralph to stop a runaway loop, then restart with better instructions.",
            "Check .ralph-loop.json to see progress and understand where things went wrong.",
            "For stubborn bugs, try: 'Focus on [specific area]. Don't change anything else.'",
          ],
        },
      },
    },

    // ============================================
    // FOOTER
    // ============================================
    footer: {
      builtWith: "Built with",
    },
  },
};

export type Language = "ko" | "en";
export type TranslationKeys = typeof translations.en;
