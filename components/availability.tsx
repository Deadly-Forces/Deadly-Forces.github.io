"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Calendar, Clock, Globe, MessageSquare, Mail, ExternalLink, ShieldCheck } from "lucide-react";

interface AvailabilityProps {
  onOpenBooking?: () => void;
}

export function Availability({ onOpenBooking }: AvailabilityProps) {
  return (
    <section id="book" className="relative w-full border-b border-white/10 py-20 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9838]">
            Book a call
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-white sm:text-4xl">
            Direct Discussion & Engagements
          </h2>
          <p className="mt-2 text-sm text-white/50 max-w-2xl">
            Open for software engineering and AI/ML internship opportunities. Select a convenient time on the calendar below or get in touch directly.
          </p>
        </motion.div>

        {/* 4 Metadata Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#FF9838] mb-2">
              <Globe className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">Timezone</span>
            </div>
            <p className="text-xs font-mono text-white">{profile.availability.timezone}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#FF9838] mb-2">
              <Calendar className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">Working Days</span>
            </div>
            <p className="text-xs font-mono text-[#FFF3DE] font-semibold">{profile.availability.days}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#FF9838] mb-2">
              <Clock className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">Hours</span>
            </div>
            <p className="text-xs font-mono text-white">{profile.availability.hours}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#FF9838] mb-2">
              <MessageSquare className="h-4 w-4" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">Response</span>
            </div>
            <p className="text-xs font-mono text-white">{profile.availability.responseTime}</p>
          </div>
        </div>

        {/* Embedded Cal.com Scheduler Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.03] to-transparent p-4 sm:p-8 backdrop-blur-md overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <h3 className="text-lg font-light text-white flex items-center gap-2">
                <span>Select a Discussion Slot</span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </h3>
              <p className="mt-1 text-xs text-white/60">
                Pick a 15 or 30-minute sync to talk about full-stack engineering, AI/ML models, or internship openings.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                <span>Open in Cal.com</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-1.5 rounded-full bg-[#FF9838] px-4 py-2 text-xs font-mono text-black font-medium hover:bg-[#FFF3DE] transition"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Cal.com Live Embed Frame */}
          <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black/70 min-h-[560px]">
            <iframe
              src={`${profile.bookingUrl}?theme=dark`}
              title="Cal.com Booking Scheduler"
              className="w-full h-[580px] border-0"
              loading="lazy"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-white/40">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Direct calendar confirmation with Google Meet / Zoom link</span>
            </div>
            <div>
              Direct email: <a href={`mailto:${profile.contact.email}`} className="text-[#FF9838] hover:underline">{profile.contact.email}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
