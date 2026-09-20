"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SkillsTagSphere } from "@/components/skills-tag-sphere";
import { User, Cpu, Briefcase, Sparkles, GitFork, Linkedin, ArrowUpRight } from "lucide-react";

export function IntroductionSection() {
  return (
    <section id="introduction" className="relative w-full border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9838]">
            01 / Introduction
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-white sm:text-4xl">
            Who I Am, What I Build & Services Provided
          </h2>
          <p className="mt-3 text-sm text-white/60 max-w-2xl">
            Synthesized from GitHub activity, open-source repositories, and technical engineering milestones.
          </p>
        </motion.div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Who Am I? */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#FF9838]/10 p-2 text-[#FF9838]">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-light text-white">Who am I?</h3>
              </div>

              <p className="text-sm leading-relaxed text-[#FFF3DE]/90">
                I am <strong className="text-white font-medium">{profile.name}</strong>, a full-stack engineer and Computer Science student specializing in AI/ML at <span className="text-white">SRM Institute of Science and Technology, Vadapalani Campus, Chennai</span> (Graduating 2027).
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/70">
                My engineering focus centers on building reliable end-to-end software applications and production-ready AI systems. I bridge the gap between complex machine learning models, resilient backend infrastructures, and creative frontend interfaces.
              </p>

              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Grounded in computer systems, cybersecurity fundamentals, and open-source development, I actively design and ship tools ranging from full-stack platforms to inference benchmarking suites.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4 font-mono text-xs text-white/60">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FF9838] transition"
              >
                <GitFork className="h-3.5 w-3.5" />
                <span>GitHub @Deadly-Forces</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FF9838] transition"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: What I can do? */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#FF9838]/10 p-2 text-[#FF9838]">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-light text-white">What I can do?</h3>
              </div>

              <ul className="space-y-3 text-xs leading-relaxed text-[#FFF3DE]/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF9838] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Architect Scalable Full-Stack Products:</strong> Capable of taking product concepts from relational database architecture (PostgreSQL, Supabase) and backend APIs (Node.js, REST, WebSockets) to high-performance, accessible Next.js interfaces.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF9838] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Build AI-Powered Tools & Developer Automations:</strong> Capable of embedding generative AI workflows, building automated code analysis/review engines, and developing custom intelligent utilities that streamline development pipelines.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF9838] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Design Real-Time Computer Vision Pipelines:</strong> Capable of engineering low-latency perceptual systems—processing live video streams, calculating optical flow, and deploying machine learning classifiers for real-world feature extraction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF9838] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Engineer Benchmarking & Performance Test Suites:</strong> Capable of profiling deep learning model inference, measuring latency distributions across hardware targets, and optimizing runtime execution throughput.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF9838] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Implement Systems Automation & Security Utilities:</strong> Capable of building custom network vulnerability discovery scanners, real-time telemetry streaming platforms, and low-level Linux Bash maintenance scripts.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <span className="font-mono text-[11px] text-[#FF9838]">
                Objective: Seeking Software Engineering & AI/ML Internships
              </span>
            </div>
          </motion.div>

          {/* Card 3: What service I can provide? */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm lg:col-span-2"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#FF9838]/10 p-2 text-[#FF9838]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-light text-white">What service I can provide?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4">
                  <span className="font-mono text-[11px] text-[#FF9838] block mb-1">01 / Full-Stack</span>
                  <h4 className="text-sm font-medium text-white mb-2">Web Application Engineering</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Building complete web products with Next.js, Node.js, TypeScript, Supabase, and clean responsive Tailwind CSS frontends.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4">
                  <span className="font-mono text-[11px] text-[#FF9838] block mb-1">02 / AI Tools</span>
                  <h4 className="text-sm font-medium text-white mb-2">AI Integrations & Reviewers</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Integrating AI APIs, building code analysis and automated review tools, and developing intelligent OS assistant utilities.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4">
                  <span className="font-mono text-[11px] text-[#FF9838] block mb-1">03 / Vision & ML</span>
                  <h4 className="text-sm font-medium text-white mb-2">Computer Vision Solutions</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Feature extraction, optical flow pipelines, and classification systems using Python, MediaPipe, and machine learning models.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4">
                  <span className="font-mono text-[11px] text-[#FF9838] block mb-1">04 / Systems</span>
                  <h4 className="text-sm font-medium text-white mb-2">Automation & Security Scripts</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Writing vulnerability scanning scripts, telemetry trackers, and Bash automation tools for Linux system maintenance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 4: What skills I have? (with 3D Rotatory Tag Sphere) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-[#FF9838]/10 p-2 text-[#FF9838]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-light text-white">What skills I have?</h3>
              <p className="font-mono text-xs text-white/50">
                Rotary 3D tag sphere · Drag to explore full stack & systems skills
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Rotary Sphere */}
            <div className="lg:col-span-7">
              <SkillsTagSphere />
            </div>

            {/* Structured Categorized Skill Pills */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF9838] block mb-2">
                  Languages
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "JavaScript", "Python", "C++", "Java", "SQL", "Bash", "HTML5/CSS3"].map((s) => (
                    <span key={s} className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF9838] block mb-2">
                  Frontend & Backend Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js (App Router)", "React", "Node.js", "Tailwind CSS", "Supabase", "PostgreSQL", "MySQL", "WebSockets"].map((s) => (
                    <span key={s} className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF9838] block mb-2">
                  AI / ML & Systems Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["PyTorch", "OpenVINO", "MediaPipe", "OpenCV", "LLM APIs & RAG", "MCP Servers", "Linux", "Git", "Docker"].map((s) => (
                    <span key={s} className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
