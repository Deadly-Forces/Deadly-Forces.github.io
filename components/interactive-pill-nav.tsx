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
  const tabs: { id: NavTab; label: string }[] = [
    { id: "introduction", label: "Introduction" },
    { id: "work", label: "Work" },
    { id: "gap", label: "The gap" },
    { id: "book", label: "Book a call" },
  ];

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-auto">
      <nav
        aria-label="Portfolio Navigation"
        className="flex items-center gap-1 rounded-full border border-white/15 bg-[#121316]/85 p-1.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        {/* Navigation Tabs */}
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              type="button"
              className={`relative rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill-highlight"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {tab.id === "book" && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF9838] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF9838]" />
                  </span>
                )}
                <span>{tab.label}</span>
              </span>
            </button>
          );
        })}

        {/* Vertical divider */}
        <div className="h-4 w-[1px] bg-white/20 mx-1 hidden sm:block" />

        {/* Accent / theme indicator from screenshot */}
        <div className="p-2 text-white/50 hover:text-[#FF9838] transition hidden sm:flex items-center justify-center">
          <Sun className="h-3.5 w-3.5" />
        </div>
      </nav>
    </div>
  );
}
