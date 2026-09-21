"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Cpu, Database, Layout, ArrowRight, ArrowDown } from "lucide-react";

export function TheGapSection() {
  return (
    <section id="the-gap" className="relative w-full border-b border-white/10 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-14 text-center max-w-3xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#E58C36]">
            The Gap
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-[#F5EFEB] sm:text-4xl">
            Bridging Model, Backend & User Experience
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base italic text-[#F5EFEB]/85 font-light leading-relaxed">
            &ldquo;{profile.snapshot.gapCovered}&rdquo;
          </p>
        </motion.div>

        {/* Visual 3-Pillar Architectural Flow */}
        <div className="relative mt-6 sm:mt-8">
          {/* Subtle connecting horizontal beam for large screens */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#E58C36]/30 to-transparent -translate-y-6 pointer-events-none" />

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {/* Pillar 1: The Model */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#111318]/90 p-5 sm:p-7 backdrop-blur-md flex flex-col justify-between hover:border-[#E58C36]/30 transition-all shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="rounded-lg bg-[#E58C36]/10 p-2 sm:p-2.5 text-[#E58C36] w-fit mb-3 sm:mb-4">
                  <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] text-[#E58C36] font-semibold tracking-wider">PILLAR 01</span>
                  <span className="font-mono text-[10px] text-[#A8A29E]/60 uppercase">Foundation</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#F5EFEB] mb-2">The Model</h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  Raw models are disconnected from real runtime constraints. I handle model integration, feature extraction pipelines (OpenCV, MediaPipe), edge inference optimization with Intel OpenVINO, and latency profiling.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-[#A8A29E]">
                Python · OpenVINO · OpenCV · MediaPipe · Scikit-Learn
              </div>
            </motion.div>

            {/* Mobile Connector Arrow */}
            <div className="md:hidden flex justify-center py-0.5 text-[#E58C36]/60">
              <ArrowDown className="h-4 w-4" />
            </div>

            {/* Pillar 2: The Backend & Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-[#E58C36]/30 bg-gradient-to-b from-[#1c140d]/90 to-[#111318]/95 p-5 sm:p-7 backdrop-blur-md flex flex-col justify-between hover:border-[#E58C36]/60 transition-all shadow-[0_16px_40px_rgba(229,140,54,0.08)]"
            >
              <div>
                <div className="rounded-lg bg-[#E58C36]/20 p-2 sm:p-2.5 text-[#E58C36] w-fit mb-3 sm:mb-4">
                  <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] text-[#E58C36] font-semibold tracking-wider">PILLAR 02</span>
                  <span className="font-mono text-[10px] text-[#E58C36]/70 uppercase">Core Conduit</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#F5EFEB] mb-2">The Backend</h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  Where features get choked by slow inference or rigid APIs. I architect real-time WebSockets, streaming APIs, database schemas in Supabase/PostgreSQL, and structured API endpoints.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 border-t border-[#E58C36]/20 pt-3 font-mono text-[10px] text-[#E58C36]">
                Node.js · WebSockets · Supabase · PostgreSQL · REST APIs
              </div>
            </motion.div>

            {/* Mobile Connector Arrow */}
            <div className="md:hidden flex justify-center py-0.5 text-[#E58C36]/60">
              <ArrowDown className="h-4 w-4" />
            </div>

            {/* Pillar 3: The UI / UX */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-[#111318]/90 p-5 sm:p-7 backdrop-blur-md flex flex-col justify-between hover:border-[#E58C36]/30 transition-all shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="rounded-lg bg-[#E58C36]/10 p-2 sm:p-2.5 text-[#E58C36] w-fit mb-3 sm:mb-4">
                  <Layout className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] text-[#E58C36] font-semibold tracking-wider">PILLAR 03</span>
                  <span className="font-mono text-[10px] text-[#A8A29E]/60 uppercase">Kinetic Layer</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#F5EFEB] mb-2">The UI / UX</h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  If the interface is clunky or laggy, the feature fails to connect with users. I engineer responsive, accessible interfaces with sub-second feedback, smooth Framer Motion interactions, and clean layout hierarchies.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-[#A8A29E]">
                Next.js · React · Tailwind CSS · Framer Motion · TypeScript
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
