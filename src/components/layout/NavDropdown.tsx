"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavDropdownConfig } from "@/lib/types";

export default function NavDropdown({ title, items }: NavDropdownConfig) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-[13px] uppercase tracking-[0.18em] text-black/70 transition hover:text-black">
        {title}
        <ChevronDown size={14} />
      </button>

      <div
        className={`absolute left-0 top-full pt-5 transition-all duration-200 ${
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
              className="block border-b border-black/5 px-6 py-4 text-[13px] uppercase tracking-[0.15em] text-black/70 transition hover:bg-black/[0.02] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}