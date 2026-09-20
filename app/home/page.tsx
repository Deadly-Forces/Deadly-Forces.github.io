"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractivePillNav, NavTab } from "@/components/interactive-pill-nav";
import { IntroductionSection } from "@/components/introduction-section";
import { Work } from "@/components/work";
import { TheGapSection } from "@/components/the-gap-section";
import { Availability } from "@/components/availability";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PANES: { id: NavTab; title: string; subtitle: string }[] = [
  { id: "introduction", title: "Introduction", subtitle: "Who I Am, What I Build & Services" },
  { id: "work", title: "Work", subtitle: "Selected Engineering Repositories & Systems" },
  { id: "gap", title: "The gap", subtitle: "Bridging Model, Backend & User Experience" },
  { id: "book", title: "Book a call", subtitle: "Direct Discussion & Engagements" },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>("introduction");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);

    // Check URL hash for initial tab
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "work" || hash === "gap" || hash === "book") {
        if (hash === "gap") setActiveTab("gap");
        else if (hash === "work") setActiveTab("work");
        else if (hash === "book") setActiveTab("book");
      }
    }

    setMounted(true);
    return () => media.removeEventListener("change", listener);
  }, []);

  const currentIndex = PANES.findIndex((p) => p.id === activeTab);

  const handleSelectTab = (tab: NavTab) => {
    const newIndex = PANES.findIndex((p) => p.id === tab);
    setSlideDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNextPane = () => {
    if (currentIndex < PANES.length - 1) {
      handleSelectTab(PANES[currentIndex + 1].id);
    }
  };

  const goToPrevPane = () => {
    if (currentIndex > 0) {
      handleSelectTab(PANES[currentIndex - 1].id);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: reducedMotion ? 0 : direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (direction: number) => ({
      x: reducedMotion ? 0 : direction < 0 ? 60 : -60,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div
      className={`min-h-screen bg-[#0A0B0E] text-[#F5EFEB] selection:bg-[#E58C36] selection:text-black transition-opacity ${
        reducedMotion ? "duration-200" : "duration-700 ease-out"
      } ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      {/* Studio ambient warmth & precision hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(229,140,54,0.12),rgba(10,11,14,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 studio-grid opacity-30"
      />

      {/* Floating Pill Navigation */}
      <InteractivePillNav
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Connected Sliding Panes Container */}
      <div className="relative z-10 pt-20 flex flex-col min-h-screen">
        <main className="flex-1 w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={activeTab}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {activeTab === "introduction" && <IntroductionSection />}
              {activeTab === "work" && <Work />}
              {activeTab === "gap" && <TheGapSection />}
              {activeTab === "book" && <Availability onOpenBooking={() => setIsBookingOpen(true)} />}
            </motion.div>
          </AnimatePresence>

          {/* Connected Pane Navigation Footer Bar */}
          <div className="border-t border-white/10 bg-[#0A0B0E]/90 py-6 px-6 sm:px-8 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <div>
                {currentIndex > 0 ? (
                  <button
                    onClick={goToPrevPane}
                    type="button"
                    className="flex items-center gap-2 text-xs font-mono text-[#A8A29E] hover:text-[#E58C36] transition cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous: {PANES[currentIndex - 1].title}</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-white/20">Beginning of Tour</span>
                )}
              </div>

              {/* Step indicator */}
              <div className="hidden sm:flex items-center gap-2">
                {PANES.map((pane, idx) => (
                  <button
                    key={pane.id}
                    onClick={() => handleSelectTab(pane.id)}
                    aria-label={`Go to ${pane.title}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? "w-8 bg-[#E58C36]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <div>
                {currentIndex < PANES.length - 1 ? (
                  <button
                    onClick={goToNextPane}
                    type="button"
                    className="flex items-center gap-2 text-xs font-mono text-[#A8A29E] hover:text-[#E58C36] transition cursor-pointer"
                  >
                    <span>Next: {PANES[currentIndex + 1].title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelectTab("introduction")}
                    type="button"
                    className="flex items-center gap-2 text-xs font-mono text-[#E58C36] hover:underline cursor-pointer"
                  >
                    <span>Back to Introduction</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Cal.com booking modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
