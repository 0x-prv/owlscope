import { NavDropdownConfig, RoadmapPhase, ResearchArticle, PlatformModule } from "./types";

export const BRAND = {
  name: "OwlScope",
  tagline: "Structured onchain intelligence for the Solana ecosystem.",
  mission:
    "Organize onchain activity into structured research, so that wallet behavior, deployer history, and liquidity conditions can be understood and evaluated before decisions are made.",
  logo: "/owlscope.jpg",
  banner: "/owlscope-banner.png",
};

export const NAV_DROPDOWNS: NavDropdownConfig[] = [
  {
    title: "Mission",
    items: [
      { label: "Vision", href: "/mission/vision" },
      { label: "Why OwlScope", href: "/mission/why-owlscope" },
      { label: "Early Signals", href: "/mission/early-signals" },
    ],
  },
  {
    title: "Research",
    items: [
      { label: "Wallet Intelligence", href: "/research/wallet-intelligence" },
      { label: "Rug Research", href: "/research/rug-research" },
      { label: "Behavior Analysis", href: "/research/behavior-analysis" },
      { label: "Market Research", href: "/research/market-structure" },
      { label: "AI Reports", href: "/research/ai-research" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Architecture", href: "/platform/architecture" },
      { label: "Whitepaper", href: "/platform/whitepaper" },
      { label: "Documentation", href: "/platform/documentation" },
      { label: "Coming Soon", href: "/platform" },
    ],
  },
];

export const NAV_SINGLE_LINKS: { label: string; href: string }[] = [
  { label: "Roadmap", href: "/roadmap" },
];

export const NAV_FOUNDATION: NavDropdownConfig = {
  title: "Foundation",
  items: [
    { label: "About", href: "/foundation/about" },
    { label: "Open Source", href: "/foundation/open-source" },
    { label: "Contact", href: "/foundation/contact" },
    { label: "FAQ", href: "/foundation/faq" },
  ],
};

export const SOCIAL_LINKS = {
  x: "https://x.com/owlscopeAI",
  discord: "https://discord.gg/owlscope",
  github: "https://github.com/owlscope",
};

// Brand language map — used for reference across copy
export const BRAND_LANGUAGE = {
  dashboard: "Research Workspace",
  search: "Search",
  analysis: "Research Report",
  watchlist: "Watchlist",
  walletScore: "Wallet Assessment",
  risk: "Risk Indicators",
};

export const FEATURE_CARDS = [
  {
    title: "Research",
    description: "Structured research on wallets, deployers, and tokens.",
  },
  {
    title: "Analyze",
    description: "Evaluate deployer history and wallet behavior.",
  },
  {
    title: "Monitor",
    description: "Track measurable onchain risk indicators.",
  },
];

export const PLATFORM_MODULES: PlatformModule[] = [
  { name: "AI Risk Engine", description: "Model based risk classification for meme coin contracts, evaluated against historical outcomes." },
  { name: "Wallet Intelligence", description: "Structured analysis of wallet behavior, funding sources, and transaction history." },
  { name: "Deployer Intelligence", description: "Historical analysis of deployer track record across prior launches." },
  { name: "Early Signals", description: "Observation of measurable behavioral changes, such as liquidity events and abnormal wallet activity." },
  { name: "Research Alerts", description: "Notifications when tracked wallets or tokens meet defined research criteria." },
  { name: "Liquidity Intelligence", description: "Analysis of liquidity provider behavior, lock status, and concentration." },
];

export const ROADMAP: RoadmapPhase[] = [
  { phase: "Phase 1", title: "Foundation", items: ["Brand", "Website", "Mission", "Research"], status: "done" },
  { phase: "Phase 2", title: "Community", items: ["Documentation", "Community", "Waitlist"], status: "in-progress" },
  { phase: "Phase 3", title: "Private Alpha", items: ["Private Platform Alpha", "Wallet Intelligence"], status: "upcoming" },
  { phase: "Phase 4", title: "AI Systems", items: ["AI Risk Engine", "Deployer Intelligence"], status: "upcoming" },
  { phase: "Phase 5", title: "Public Beta", items: ["Public Beta"], status: "upcoming" },
  { phase: "Phase 6", title: "Monetization", items: ["Subscription"], status: "upcoming" },
  { phase: "Phase 7", title: "Token Utility", items: ["Token Utility"], status: "upcoming" },
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    slug: "wallet-intelligence",
    title: "Wallet Intelligence",
    category: "Research",
    excerpt: "Studying onchain wallet behavior to identify structural risk indicators.",
  },
  {
    slug: "rug-research",
    title: "Rug Pull Research",
    category: "Research",
    excerpt: "Structural patterns behind common rug pull mechanisms in the Solana meme coin ecosystem.",
  },
  {
    slug: "behavior-analysis",
    title: "Behavior Analysis",
    category: "Research",
    excerpt: "How deployer and early holder behavior relates to observed token outcomes.",
  },
  {
    slug: "market-structure",
    title: "Market Structure",
    category: "Research",
    excerpt: "Structural dynamics of meme coin liquidity and trading activity.",
  },
  {
    slug: "ai-research",
    title: "AI Research",
    category: "Research",
    excerpt: "How model based classification is applied to wallet and contract risk analysis.",
  },
];