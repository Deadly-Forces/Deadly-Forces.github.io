"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Cpu, Database, Layout, ArrowRight } from "lucide-react";

export function TheGapSection() {
  return (
    <section id="the-gap" className="relative w-full border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9838]">
            The Gap
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-white sm:text-4xl">
            Bridging Model, Backend & User Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg italic text-[#FFF3DE]/90 font-light">
            &ldquo;{profile.snapshot.gapCovered}&rdquo;
          </p>
        </motion.div>

        {/* Visual 3-Pillar Architectural Diagram */}
        <div className="relative mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Pillar 1: The Model */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="rounded-lg bg-[#FF9838]/10 p-2.5 text-[#FF9838] w-fit mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="font-mono text-[11px] text-[#FF9838] block mb-1">PILLAR 01</span>
                <h3 className="text-lg font-medium text-white mb-2">The Model</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Raw models are often disconnected from production constraints. I handle prompt evaluation, attack mitigation (MITRE ATLAS), local offline SLM execution (Phi-3 Mini), and edge acceleration (OpenVINO).
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-white/40">
                PyTorch · OpenVINO · Ollama · MCP
              </div>
            </motion.div>

            {/* Pillar 2: The Backend */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-[#FF9838]/30 bg-gradient-to-b from-[#8E3A0B]/20 to-black p-6 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="rounded-lg bg-[#FF9838]/20 p-2.5 text-[#FF9838] w-fit mb-4">
                  <Database className="h-6 w-6" />
                </div>
                <span className="font-mono text-[11px] text-[#FF9838] block mb-1">PILLAR 02</span>
                <h3 className="text-lg font-medium text-white mb-2">The Backend</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Where features get choked by slow inference or rigid APIs. I architect streaming SSE pipelines, real-time WebSockets, database schemas in Supabase/PostgreSQL, and rate-limited gateway routes.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-[#FF9838]/80">
                Next.js Routes · WebSockets · Supabase · Auth
              </div>
            </motion.div>

            {/* Pillar 3: The UI */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="rounded-lg bg-[#FF9838]/10 p-2.5 text-[#FF9838] w-fit mb-4">
                  <Layout className="h-6 w-6" />
                </div>
                <span className="font-mono text-[11px] text-[#FF9838] block mb-1">PILLAR 03</span>
                <h3 className="text-lg font-medium text-white mb-2">The UI / UX</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  If the interface is clunky or laggy, the AI feature dies. I engineer reactive, accessible interfaces with audio waveforms, sub-second tactile feedback, and framer-motion interactions.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 font-mono text-[10px] text-white/40">
                Tailwind CSS · Framer Motion · Web Audio · a11y
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
