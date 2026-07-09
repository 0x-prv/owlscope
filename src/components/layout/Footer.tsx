import Link from "next/link";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { BRAND, SOCIAL_LINKS } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Mission", href: "/mission" },
  { label: "Research", href: "/research" },
  { label: "Platform", href: "/platform" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Foundation", href: "/foundation/about" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-black">
              {BRAND.name.toUpperCase()}
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-black/50">
              {BRAND.tagline}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-black/60 transition hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/70 transition hover:border-black hover:text-black"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/70 transition hover:border-black hover:text-black"
            >
              <FaDiscord size={16} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-black/5 pt-6">
          <p className="text-[12px] tracking-wide text-black/40">
            © {year} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}