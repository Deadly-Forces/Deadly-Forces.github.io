"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BlackHoleHeroSection } from "@/components/ui/blackhole-hero-section";

/** True while the viewport is narrow. Drives the layout swap below. */
function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

/**
 * A hero built around the picture rather than laid on top of it.
 *
 * The hole is pushed off centre with `focus`, so the busy half and the reading
 * half never overlap, and `scrim` darkens only the edge the copy sits on. A
 * flat overlay could not do that without greying the halo as well.
 *
 * A phone has no room to stand the two side by side, so there the whole thing
 * turns through 90°: hole low, copy high, veil from the top — and the ray
 * count drops, because a phone pays for every step.
 */
export default function BlackHoleHeroSectionDemo() {
  const narrow = useNarrow();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Prefetch /home on load
    router.prefetch("/home");

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [router]);

  const handleStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (isTransitioning) return;
      setIsTransitioning(true);

      const delay = reducedMotion ? 200 : 1000;
      setTimeout(() => {
        router.push("/home");
      }, delay);
    },
    [isTransitioning, reducedMotion, router]
  );

  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden bg-black md:min-h-[720px]">
      {/* Zoomable Black Hole Layer */}
      <div
        className={`absolute inset-0 h-full w-full transition-all ${
          reducedMotion
            ? "duration-200"
            : "duration-1000 ease-in-out"
        } ${
          isTransitioning
            ? reducedMotion
              ? "opacity-0"
              : "scale-[2.4] opacity-0"
            : "scale-100 opacity-100"
        }`}
        style={{
          transformOrigin: narrow ? "50% 76%" : "72% 46%",
        }}
      >
        <BlackHoleHeroSection
          // A phone has no room to stand the art beside the copy, so the
          // arrangement turns through 90°: copy at the top under a veil, the
          // hole low and whole in the bottom third. Not pushed off the edge —
          // half a hole reads as a mistake, and the empty middle it leaves reads
          // as a bug. A wider field makes up the room the narrow frame lost.
          focus={narrow ? [0.5, 0.76] : [0.72, 0.46]}
          scrim={narrow ? "top" : "left"}
          scrimStrength={0.9}
          distance={24}
          elevation={narrow ? -7 : -5.5}
          fov={narrow ? 58 : 42}
          glow={narrow ? 0.85 : 1}
          steps={narrow ? 200 : 300}
          resolution={narrow ? 0.6 : 0.7}
        />
      </div>

      {/* Foreground Copy Layer */}
      <div
        className={`relative z-10 flex h-full min-h-[92svh] items-start px-6 pt-14 sm:px-10 md:min-h-[720px] md:items-center md:pt-0 lg:px-20 transition-all ${
          reducedMotion
            ? "duration-200"
            : "duration-700 ease-out"
        } ${
          isTransitioning
            ? "opacity-0 blur-md pointer-events-none scale-95"
            : "opacity-100 blur-0 scale-100"
        }`}
      >
        <div className="max-w-[34rem]">
          <h1 className="text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]">
            Light does not
            <br />
            leave here
          </h1>

          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/60 md:mt-7">
            The ring above the shadow is the far side of the disc, bent over
            the top. Nothing put it there but gravity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
            <button
              onClick={handleStart}
              type="button"
              className="rounded-full bg-[#F5EFEB] px-6 py-3 text-sm font-medium text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#E58C36] focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
            >
              Let&apos;s start
            </button>
            <Link
              href="/home#book"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-[#F5EFEB]/90 transition hover:border-[#E58C36]/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E58C36] focus:ring-offset-2 focus:ring-offset-black"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
