"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

interface NavigationProps {
  onOpenBooking: () => void;
}

export function Navigation({ onOpenBooking }: NavigationProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-white transition hover:text-[#FF9838] focus:outline-none focus:ring-1 focus:ring-[#FF9838]"
        >
          {profile.name}
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 text-xs tracking-wider text-white/70">
          <a
            href="#call-demo"
            className="transition hover:text-white focus:outline-none focus:ring-1 focus:ring-[#FF9838] p-1 rounded"
          >
            Call demo
          </a>
          <a
            href="#work"
            className="transition hover:text-white focus:outline-none focus:ring-1 focus:ring-[#FF9838] p-1 rounded"
          >
            Work
          </a>
          <button
            onClick={onOpenBooking}
            type="button"
            className="rounded-full border border-[#FF9838]/40 bg-[#FF9838]/10 px-3.5 py-1.5 font-medium text-[#FFF3DE] transition hover:border-[#FF9838] hover:bg-[#FF9838]/20 focus:outline-none focus:ring-1 focus:ring-[#FF9838] cursor-pointer"
          >
            Book a call
          </button>
        </nav>
      </div>
    </header>
  );
}
