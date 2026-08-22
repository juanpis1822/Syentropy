export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  colorClass: string;
  spanClass?: string;
}

export interface PlanItem {
  name: string;
  tagline: string;
  bullets: string[];
  isRecommended?: boolean;
  colorClass: string;
  badge?: string;
}

export interface OperationalPhase {
  phase: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface TechItem {
  category: string;
  tools: string;
  icon: string;
  colorClass: string;
}

export interface ProjectCase {
  title: string;
  meta: string;
  description: string;
  href: string;
  metrics?: { label: string; value: string }[];
  type: "web" | "app";
  colorClass: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatarIcon: string;
  colorClass: string;
}
