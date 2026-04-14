"use client";

import {
  BookOpenText,
  Rocket,
  Lightbulb,
  Lightning,
  Robot,
  ArrowsClockwise,
  Question,
  Sparkle,
  ChatCircle,
  Folder,
  Desktop,
  Plug,
  Target,
  Keyboard,
  Gear,
} from "@phosphor-icons/react";

export const SectionIcons = {
  gettingStarted: Rocket,
  whatIs: BookOpenText,
  openCodeDeep: ChatCircle,
  omoDeep: Gear,
  quickExamples: Lightbulb,
  ultrawork: Lightning,
  agents: Robot,
  hashAnchor: Target,
  ralphLoop: ArrowsClockwise,
  commands: Keyboard,
  faq: Question,
  tips: Sparkle,
  chat: ChatCircle,
  fileOperations: Folder,
  terminal: Desktop,
  extensions: Plug,
  agentsFeature: Robot,
  ultraworkFeature: Lightning,
  ralphLoopFeature: ArrowsClockwise,
};

interface SectionIconProps {
  icon: keyof typeof SectionIcons;
  className?: string;
}

export function SectionIcon({ icon, className = "w-6 h-6" }: SectionIconProps) {
  const IconComponent = SectionIcons[icon] || BookOpenText;
  return <IconComponent className={className} weight="duotone" />;
}
