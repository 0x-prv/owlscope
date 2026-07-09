"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import NavDropdown from "./NavDropdown";
import {
  BRAND,
  NAV_DROPDOWNS,
  NAV_SINGLE_LINKS,
  NAV_FOUNDATION,
  SOCIAL_LINKS,
} from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const allDropdowns = [...NAV_DROPDOWNS, NAV_FOUNDATION];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSection(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMobile}>
          <Image
            src={BRAND.logo}
            alt={BRAND.name}
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="truncate text-base font-semibold tracking-[0.24em] text-black sm:text-lg sm:tracking-[0.3em]">
            {BRAND.name.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {NAV_DROPDOWNS.map((dropdown) => (
            <NavDropdown key={dropdown.title} {...dropdown} />
          ))}

          {NAV_SINGLE_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.18em] text-black/70 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}

          <NavDropdown {...NAV_FOUNDATION} align="right" />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OwlScope on X"
            className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/70 transition hover:border-black hover:text-black"
          >
            <FaXTwitter size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OwlScope Discord"
            className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/70 transition hover:border-black hover:text-black"
          >
            <FaDiscord size={16} />
          </a>
        </div>

        <button
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/10 text-black lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-black/10 bg-white lg:hidden">
          <nav className="flex flex-col pb-6">
            {allDropdowns.map((dropdown) => (
              <div key={dropdown.title} className="border-b border-black/5">
                <button
                  onClick={() => toggleSection(dropdown.title)}
                  className="flex min-h-12 w-full items-center justify-between px-5 py-4 text-left text-[13px] uppercase tracking-[0.18em] text-black/80"
                  aria-expanded={openSection === dropdown.title}
                >
                  {dropdown.title}
                  <ChevronDown
                    size={14}
                    className={`shrink-0 transition-transform ${
                      openSection === dropdown.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === dropdown.title && (
                  <div className="bg-black/[0.02] py-2">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMobile}
                        className="block min-h-11 px-8 py-3 text-[13px] uppercase tracking-[0.15em] text-black/60"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {NAV_SINGLE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="min-h-12 border-b border-black/5 px-5 py-4 text-[13px] uppercase tracking-[0.18em] text-black/80"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 px-5 pt-6">
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OwlScope on X"
                className="flex h-11 w-11 items-center justify-center border border-black/10 text-black/70"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OwlScope Discord"
                className="flex h-11 w-11 items-center justify-center border border-black/10 text-black/70"
              >
                <FaDiscord size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
