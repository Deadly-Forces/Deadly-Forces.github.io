"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Calendar, Clock, Globe, MessageSquare, Mail, ExternalLink, ShieldCheck } from "lucide-react";

interface AvailabilityProps {
  onOpenBooking?: () => void;
}

export function Availability({ onOpenBooking }: AvailabilityProps) {
  return (
    <section id="book" className="relative w-full border-b border-white/10 py-12 sm:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#E58C36]">
            Book a call
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-[#F5EFEB] sm:text-4xl">
            Direct Discussion & Engagements
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#A8A29E] max-w-2xl">
            Open for software engineering and AI/ML internship opportunities. Select a convenient time on the studio calendar below or get in touch directly.
          </p>
        </motion.div>

        {/* 4 Metadata Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-3 sm:p-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#E58C36] mb-1.5 sm:mb-2">
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A29E]">Timezone</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-[#F5EFEB]">{profile.availability.timezone}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-3 sm:p-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#E58C36] mb-1.5 sm:mb-2">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A29E]">Working Days</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-[#E58C36] font-semibold">{profile.availability.days}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-3 sm:p-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#E58C36] mb-1.5 sm:mb-2">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A29E]">Hours</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-[#F5EFEB]">{profile.availability.hours}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-3 sm:p-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#E58C36] mb-1.5 sm:mb-2">
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A29E]">Response</span>
            </div>
            <p className="text-[11px] sm:text-xs font-mono text-[#F5EFEB]">{profile.availability.responseTime}</p>
          </div>
        </div>

        {/* Embedded Cal.com Scheduler Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/15 bg-[#111318]/95 p-4 sm:p-8 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-white/10 mb-5 sm:mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-light text-[#F5EFEB] flex items-center gap-2">
                <span>Select a Discussion Slot</span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </h3>
              <p className="mt-1 text-xs text-[#A8A29E]">
                Pick a 15 or 30-minute sync to discuss engineering collaborations, AI systems, or internship positions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 sm:px-4 py-2 text-xs font-mono text-[#F5EFEB] hover:bg-white/10 hover:border-[#E58C36]/40 transition"
              >
                <span>Open in Cal.com</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-1.5 rounded-full bg-[#E58C36] px-3.5 sm:px-4 py-2 text-xs font-mono text-black font-semibold hover:bg-[#F5EFEB] transition"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Cal.com Live Embed Frame */}
          <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black/80 min-h-[500px] sm:min-h-[560px]">
            <iframe
              src={`${profile.bookingUrl}?theme=dark`}
              title="Cal.com Booking Scheduler"
              className="w-full h-[520px] sm:h-[580px] border-0"
              loading="lazy"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-[#A8A29E]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Direct calendar confirmation with Google Meet / Zoom link</span>
            </div>
            <div>
              Direct contact: <a href={`mailto:${profile.contact.email}`} className="text-[#E58C36] hover:underline">{profile.contact.email}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
