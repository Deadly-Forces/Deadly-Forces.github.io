"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Cpu, Database, Layout, ArrowRight } from "lucide-react";

export function TheGapSection() {
  return (
    <section id="the-gap" className="relative w-full border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#E58C36]">
            The Gap
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-[#F5EFEB] sm:text-4xl">
            Bridging Model, Backend & User Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base italic text-[#F5EFEB]/85 font-light leading-relaxed">
            &ldquo;{profile.snapshot.gapCovered}&rdquo;
          </p>
        </motion.div>

        {/* Visual 3-Pillar Architectural Flow */}
        <div className="relative mt-8">
          {/* Subtle connecting horizontal beam for large screens */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#E58C36]/30 to-transparent -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Pillar 1: The Model */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#111318]/90 p-7 backdrop-blur-md flex flex-col justify-between hover:border-[#E58C36]/30 transition-all shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="rounded-lg bg-[#E58C36]/10 p-2.5 text-[#E58C36] w-fit mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] text-[#E58C36] font-semibold tracking-wider">PILLAR 01</span>
                  <span className="font-mono text-[10px] text-[#A8A29E]/60 uppercase">Foundation</span>
                </div>
                <h3 className="text-lg font-medium text-[#F5EFEB] mb-2">The Model</h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  Raw models are often disconnected from production constraints. I handle prompt evaluation, attack mitigation (MITRE ATLAS), local offline SLM execution (Phi-3 Mini), and edge acceleration (OpenVINO).
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-[#A8A29E]">
                PyTorch · OpenVINO · Ollama · MCP
              </div>
            </motion.div>

            {/* Pillar 2: The Backend & Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-[#E58C36]/30 bg-gradient-to-b from-[#1c140d]/90 to-[#111318]/95 p-7 backdrop-blur-md flex flex-col justify-between hover:border-[#E58C36]/60 transition-all shadow-[0_16px_40px_rgba(229,140,54,0.08)]"
            >
              <div>
                <div className="rounded-lg bg-[#E58C36]/20 p-2.5 text-[#E58C36] w-fit mb-4">
                  <Database className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] text-[#E58C36] font-semibold tracking-wider">PILLAR 02</span>
                  <span className="font-mono text-[10px] text-[#E58C36]/70 uppercase">Core Conduit</span>
                </div>
                <h3 className="text-lg font-medium text-[#F5EFEB] mb-2">The Backend</h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  Where features get choked by slow inference or rigid APIs. I architect streaming SSE pipelines, real-time WebSockets, database schemas in Supabase/PostgreSQL, and rate-limited gateway routes.
                </p>
              </div>
              <div className="mt-6 border-t border-[#E58C36]/20 pt-3 font-mono text-[10px] text-[#E58C36]">
                Next.js Routes · WebSockets · Supabase · Auth
              </div>
            </motion.div>

            {/* Pillar 3: The UI / UX */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-[#111318]/90 p-7 backdrop-blur-md flex flex-col justify-between hover:border-[#E58C36]/30 transition-all shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="rounded-lg bg-[#E58C36]/10 p-2.5 text-[#E58C36] w-fit mb-4">
                  <Layout className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] text-[#E58C36] font-semibold tracking-wider">PILLAR 03</span>
                  <span className="font-mono text-[10px] text-[#A8A29E]/60 uppercase">Kinetic Layer</span>
                </div>
                <h3 className="text-lg font-medium text-[#F5EFEB] mb-2">The UI / UX</h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed">
                  If the interface is clunky or laggy, the AI feature dies. I engineer reactive, accessible interfaces with audio waveforms, sub-second tactile feedback, and framer-motion interactions.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-[#A8A29E]">
                Tailwind CSS · Framer Motion · Web Audio · a11y
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
