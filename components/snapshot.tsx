"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Snapshot() {
  return (
    <section className="relative w-full border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#E58C36]">
            Snapshot
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-[#F5EFEB] sm:text-3xl">
            Foundation & Engineering Scope
          </h2>
        </motion.div>

        {/* 3 Blocks */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Block 1: What I am */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#111318]/90 p-6 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
              What I am
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#F5EFEB]">
              {profile.snapshot.whatIAm}
            </p>
          </motion.div>

          {/* Block 2: What I can do */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-[#111318]/90 p-6 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
              What I can do
            </h3>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-[#F5EFEB]">
              {profile.snapshot.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#E58C36] mt-0.5">•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Block 3: Purpose & The Gap */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-[#111318]/90 p-6 backdrop-blur-md flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
          >
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
                My purpose
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F5EFEB] font-mono">
                <span className="rounded bg-[#E58C36]/15 border border-[#E58C36]/30 px-2 py-1 text-[#E58C36]">
                  {profile.snapshot.purpose}
                </span>
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E58C36] block mb-1">
                The Gap I Cover
              </span>
              <p className="text-xs leading-relaxed text-[#A8A29E] italic">
                &ldquo;{profile.snapshot.gapCovered}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
