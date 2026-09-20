"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Calendar, Clock, Globe, MessageSquare } from "lucide-react";

interface AvailabilityProps {
  onOpenBooking: () => void;
}

export function Availability({ onOpenBooking }: AvailabilityProps) {
  return (
    <section id="book" className="relative w-full border-b border-white/10 py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9838]">
            04 / Availability
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-white sm:text-3xl">
            Direct Discussion & Engagements
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Open for software engineering and AI/ML internship opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Availability details card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/5 p-2.5 text-[#FF9838]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                  Timezone
                </span>
                <p className="mt-1 text-sm font-light text-white">
                  {profile.availability.timezone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/5 p-2.5 text-[#FF9838]">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                  Working Days
                </span>
                <p className="mt-1 text-sm font-mono text-[#FFF3DE]">
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[#FF9838]">
                    {profile.availability.days}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/5 p-2.5 text-[#FF9838]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                  Hours
                </span>
                <p className="mt-1 text-sm font-mono text-[#FFF3DE]">
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[#FF9838]">
                    {profile.availability.hours}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/5 p-2.5 text-[#FF9838]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                  Response Time
                </span>
                <p className="mt-1 text-sm font-mono text-[#FFF3DE]">
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[#FF9838]">
                    {profile.availability.responseTime}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Book action card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between rounded-xl border border-[#FF9838]/20 bg-gradient-to-br from-black to-[#8E3A0B]/20 p-8 backdrop-blur-sm"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF9838]">
                Inline Booking
              </span>
              <h3 className="mt-3 text-xl font-light text-white sm:text-2xl">
                Schedule a 15 or 30 minute conversation.
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-white/70">
                Pick a slot directly via Cal.com to discuss project collaborations, engineering internships, or technical challenges.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                type="button"
                className="w-full rounded-full bg-white py-3.5 text-center text-sm font-medium text-black transition hover:bg-[#FFF3DE] focus:outline-none focus:ring-2 focus:ring-[#FF9838] cursor-pointer"
              >
                Book a call
              </button>
              <p className="mt-3 text-center font-mono text-[10px] text-white/40">
                Powered by Cal.com · Instant calendar sync
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
