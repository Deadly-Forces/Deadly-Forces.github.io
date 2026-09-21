"use client";

import { motion } from "framer-motion";
import { Sun } from "lucide-react";

export type NavTab = "introduction" | "work" | "gap" | "book";

interface InteractivePillNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking?: () => void;
}

export function InteractivePillNav({
  activeTab,
  onSelectTab,
}: InteractivePillNavProps) {
  const tabs: { id: NavTab; label: string; mobileLabel: string }[] = [
    { id: "introduction", label: "Introduction", mobileLabel: "Intro" },
    { id: "work", label: "Work", mobileLabel: "Work" },
    { id: "gap", label: "The gap", mobileLabel: "Gap" },
    { id: "book", label: "Book a call", mobileLabel: "Book" },
  ];

  return (
    <div className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-auto max-w-[calc(100vw-1rem)] sm:max-w-fit">
      <nav
        aria-label="Portfolio Navigation"
        className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-white/10 bg-[#111318]/90 p-1 sm:p-1.5 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
      >
        {/* Navigation Tabs */}
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              type="button"
              className={`relative rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none touch-manipulation ${
                isActive
                  ? "text-[#F5EFEB]"
                  : "text-[#A8A29E] hover:text-[#F5EFEB]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill-highlight"
                  className="absolute inset-0 rounded-full bg-[#1A1D26] border border-[#E58C36]/40 shadow-[0_0_20px_rgba(229,140,54,0.18)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                {tab.id === "book" && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E58C36] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E58C36]" />
                  </span>
                )}
                <span className="sm:hidden">{tab.mobileLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </span>
            </button>
          );
        })}

        {/* Vertical divider */}
        <div className="h-4 w-[1px] bg-white/15 mx-1 hidden md:block" />

        {/* Studio live status indicator */}
        <div className="px-2.5 py-1 text-[11px] font-mono text-[#A8A29E] hidden md:flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] tracking-wider uppercase text-white/50">Available</span>
        </div>
      </nav>
    </div>
  );
}
