"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

interface NavigationProps {
  onOpenBooking: () => void;
}

export function Navigation({ onOpenBooking }: NavigationProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0A0B0E]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[#F5EFEB] transition hover:text-[#E58C36] focus:outline-none focus:ring-1 focus:ring-[#E58C36]"
        >
          {profile.name}
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 text-xs tracking-wider text-[#A8A29E]">
          <a
            href="#work"
            className="transition hover:text-white focus:outline-none focus:ring-1 focus:ring-[#E58C36] p-1 rounded"
          >
            Work
          </a>
          <button
            onClick={onOpenBooking}
            type="button"
            className="rounded-full border border-[#E58C36]/40 bg-[#E58C36]/10 px-3.5 py-1.5 font-medium text-[#F5EFEB] transition hover:border-[#E58C36] hover:bg-[#E58C36]/20 focus:outline-none focus:ring-1 focus:ring-[#E58C36] cursor-pointer"
          >
            Book a call
          </button>
        </nav>
      </div>
    </header>
  );
}
