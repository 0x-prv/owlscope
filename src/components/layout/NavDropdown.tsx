"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavDropdownConfig } from "@/lib/types";

type NavDropdownProps = NavDropdownConfig & {
  align?: "left" | "right";
};

export default function NavDropdown({ title, items, align = "left" }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const alignment = align === "right" ? "right-0" : "left-0";

  return (
    <div
      className="relative flex h-20 items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex h-full items-center gap-1 text-[13px] uppercase tracking-[0.18em] text-black/70 transition hover:text-black"
        aria-expanded={open}
      >
        {title}
        <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"} />
      </button>

      <div
        className={`absolute ${alignment} top-full pt-3 transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="w-64 overflow-hidden border border-black/10 bg-white shadow-lg">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block border-b border-black/5 px-6 py-4 text-[13px] uppercase tracking-[0.15em] text-black/70 transition last:border-b-0 hover:bg-black/[0.02] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
