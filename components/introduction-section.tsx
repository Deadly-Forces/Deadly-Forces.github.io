"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SkillsTagSphere } from "@/components/skills-tag-sphere";
import { User, Cpu, Briefcase, Sparkles, GitFork, Linkedin, ArrowUpRight, FileText } from "lucide-react";

export function IntroductionSection() {
  return (
    <section id="introduction" className="relative w-full border-b border-white/10 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#E58C36]">
            Introduction
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-[#F5EFEB] sm:text-4xl">
            Who I Am, What I Build & Services Provided
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#A8A29E] max-w-2xl">
            Creative technology architecture, machine learning systems, and full-stack engineering milestones.
          </p>
        </motion.div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-2">
          {/* Card 1: Who Am I? */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111318]/90 p-5 sm:p-7 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-[#E58C36]/30 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#E58C36]/10 p-2 text-[#E58C36]">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-light text-[#F5EFEB]">Who am I?</h3>
              </div>

              <p className="text-sm leading-relaxed text-[#F5EFEB]">
                I am <strong className="text-white font-medium">{profile.name}</strong>, a software engineer and AI/ML researcher at <span className="text-white">SRM Institute of Science and Technology, Vadapalani Campus, Chennai</span> (Graduating 2027).
              </p>

              <p className="mt-3 text-xs leading-relaxed text-[#A8A29E]">
                Published peer-reviewed author in robotic adaptive control (<em className="text-[#F5EFEB]">IJIREEICE</em>, Vol. 13) and builder of full-stack AI-integrated applications. I specialize in bridging the gap between mathematical models, robust low-latency backend pipelines, and kinetic user interfaces.
              </p>

              <p className="mt-3 text-xs leading-relaxed text-[#A8A29E]">
                Operating at the intersection of systems engineering, cybersecurity tools, and computer vision, I design and ship production-grade architectures with rigorous craft.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 font-mono text-xs text-[#A8A29E]">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E58C36] transition"
              >
                <GitFork className="h-3.5 w-3.5" />
                <span>GitHub @Deadly-Forces</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E58C36] transition"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={profile.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E58C36] text-[#E58C36] transition"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Resume (PDF)</span>
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
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111318]/90 p-5 sm:p-7 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-[#E58C36]/30 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#E58C36]/10 p-2 text-[#E58C36]">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-light text-[#F5EFEB]">What I can do?</h3>
              </div>

              <ul className="space-y-3 text-xs leading-relaxed text-[#F5EFEB]/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E58C36] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Architect Scalable Full-Stack Products:</strong> Relational schema design (PostgreSQL, Supabase), real-time streaming APIs (Node.js, REST, WebSockets), and high-performance, accessible Next.js interfaces.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E58C36] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Engineer AI Tools & Developer Automations:</strong> Generative AI workflows, automated pull request code analysis engines, and smart OS desktop assistants.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E58C36] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Design Real-Time Computer Vision Pipelines:</strong> Low-latency perceptual systems—live video stream processing, optical flow calculations, and micro-expression classifiers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E58C36] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Engineer Benchmarking & Inference Frameworks:</strong> Profiling deep learning runtime latency distributions, hardware throughput with OpenVINO, and inference efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E58C36] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white font-medium">Implement Systems Security & Automation:</strong> Network vulnerability discovery scanners, vessel telemetry tracking platforms, and Linux package automation.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: What service I can provide? */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111318]/90 p-5 sm:p-7 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] lg:col-span-2"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-[#E58C36]/10 p-2 text-[#E58C36]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-light text-[#F5EFEB]">What service I can provide?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4 hover:border-[#E58C36]/40 transition">
                  <span className="font-mono text-[11px] text-[#E58C36] block mb-1">Full-Stack</span>
                  <h4 className="text-sm font-medium text-[#F5EFEB] mb-1.5 sm:mb-2">Web Application Engineering</h4>
                  <p className="text-xs text-[#A8A29E] leading-relaxed">
                    Building complete web products with Next.js, Node.js, TypeScript, Supabase, and responsive Tailwind CSS frontends.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4 hover:border-[#E58C36]/40 transition">
                  <span className="font-mono text-[11px] text-[#E58C36] block mb-1">AI Tools</span>
                  <h4 className="text-sm font-medium text-[#F5EFEB] mb-1.5 sm:mb-2">AI Integrations & Reviewers</h4>
                  <p className="text-xs text-[#A8A29E] leading-relaxed">
                    Integrating AI APIs, building code analysis and automated review tools, and developing intelligent OS assistant utilities.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4 hover:border-[#E58C36]/40 transition">
                  <span className="font-mono text-[11px] text-[#E58C36] block mb-1">Vision & ML</span>
                  <h4 className="text-sm font-medium text-[#F5EFEB] mb-1.5 sm:mb-2">Computer Vision Solutions</h4>
                  <p className="text-xs text-[#A8A29E] leading-relaxed">
                    Feature extraction, optical flow pipelines, and classification systems using Python, MediaPipe, and machine learning models.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4 hover:border-[#E58C36]/40 transition">
                  <span className="font-mono text-[11px] text-[#E58C36] block mb-1">Systems</span>
                  <h4 className="text-sm font-medium text-[#F5EFEB] mb-1.5 sm:mb-2">Automation & Security Scripts</h4>
                  <p className="text-xs text-[#A8A29E] leading-relaxed">
                    Writing vulnerability scanning scripts, telemetry trackers, and Bash automation tools for Linux system maintenance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 4: What skills I have? (AI Cartoon Character Holding 3D Rotary Tag Sphere) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 sm:mt-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-[#E58C36]/10 p-2 text-[#E58C36]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-light text-[#F5EFEB]">What skills I have?</h3>
              <p className="font-mono text-xs text-[#A8A29E]">
                3D Rotary Skill Sphere held by AI Developer · Drag to spin in 3D
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Rotary Sphere with AI Character */}
            <div className="lg:col-span-7">
              <SkillsTagSphere />
            </div>

            {/* Structured Categorized Skill Pills */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#E58C36] block mb-2">
                  Frontend & Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS v4", "HTML5", "CSS3", "REST APIs"].map((s) => (
                    <span key={s} className="rounded bg-white/5 border border-white/5 px-2 py-0.5 font-mono text-xs text-[#F5EFEB]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#E58C36] block mb-2">
                  Languages & Scripting
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "JavaScript", "Python", "BASH Scripting", "Shell Scripting", "PowerShell"].map((s) => (
                    <span key={s} className="rounded bg-white/5 border border-white/5 px-2 py-0.5 font-mono text-xs text-[#F5EFEB]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#E58C36] block mb-2">
                  AI, Systems & Infrastructure
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Machine Learning",
                    "OpenVINO",
                    "AI Benchmarking",
                    "Vulnerability Scanning",
                    "Linux Administration",
                    "GNU/Linux",
                    "Ubuntu",
                    "Git & GitHub",
                  ].map((s) => (
                    <span key={s} className="rounded bg-white/5 border border-white/5 px-2 py-0.5 font-mono text-xs text-[#F5EFEB]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111318]/90 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#E58C36] block mb-2">
                  Databases & Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["PostgreSQL", "MongoDB", "MySQL", "DBMS", "Computer Science", "Computer Engineering"].map((s) => (
                    <span key={s} className="rounded bg-white/5 border border-white/5 px-2 py-0.5 font-mono text-xs text-[#F5EFEB]">
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
