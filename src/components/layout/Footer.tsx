import Link from "next/link";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import { BRAND, SOCIAL_LINKS } from "@/lib/constants";

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "Mission", href: "/mission" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Contact", href: "/foundation/contact" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Wallet Intelligence", href: "/research/wallet-intelligence" },
      { label: "Rug Research", href: "/research/rug-research" },
      { label: "Market Structure", href: "/research/market-structure" },
    ],
  },
  {
    title: "Platform Status",
    links: [
      { label: "Coming Soon", href: "/platform" },
      { label: "FAQ", href: "/foundation/faq" },
      { label: "Open Source", href: "/foundation/open-source" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-white">
              {BRAND.name.toUpperCase()}
            </Link>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/60">
              OwlScope is a company website and research archive for a future
              subscription SaaS platform focused on structured Solana meme coin
              research. The platform is not live yet.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OwlScope on X"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition hover:border-white hover:text-white"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OwlScope Discord"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition hover:border-white hover:text-white"
              >
                <FaDiscord size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OwlScope GitHub"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition hover:border-white hover:text-white"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-[12px] uppercase tracking-[0.22em] text-red-500">
                  {section.title}
                </h2>
                <nav className="mt-4 flex flex-col gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[14px] text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[12px] leading-relaxed text-white/40">
            © {year} {BRAND.name}. Research content is informational only and
            does not provide financial advice, trade execution, automated
            trading, or definitive risk detection.
          </p>
        </div>
      </div>
    </footer>
  );
}
