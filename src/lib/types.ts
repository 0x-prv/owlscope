export type NavLink = {
  label: string;
  href: string;
};

export type NavDropdownConfig = {
  title: string;
  items: NavLink[];
};

export type RoadmapPhase = {
  phase: string;
  title: string;
  items: string[];
  status: "done" | "in-progress" | "upcoming";
};

export type ResearchArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
};

export type PlatformModule = {
  name: string;
  description: string;
};