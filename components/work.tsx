"use client";

import { motion } from "framer-motion";
import { profile, Project } from "@/data/profile";
import { ExternalLink, GitFork, ArrowUpRight, FileText, BookOpen } from "lucide-react";

export function Work() {
  const featuredProjects = [...profile.projects]
    .filter((p) => p.featured)
    .sort((a, b) => a.name.localeCompare(b.name));
  const compactProjects = [...profile.projects]
    .filter((p) => !p.featured)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="work" className="relative w-full border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#E58C36]">
            Work & Publications
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-[#F5EFEB] sm:text-4xl">
            Selected Engineering & Research Projects
          </h2>
          <p className="mt-3 text-sm text-[#A8A29E] max-w-2xl">
            12 production systems and peer-reviewed research spanning full-stack web platforms, computer vision, local SLM inference, security scanners, and robotics.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Compact Projects List */}
        {compactProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-[#A8A29E]">
              Additional Engineering & Research Repositories
            </h3>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {compactProjects.map((project, i) => (
                <CompactRow key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const isPaper = Boolean(project.paperUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 backdrop-blur-md ${
        isPaper
          ? "border-[#E58C36]/30 bg-[#141210]/90 hover:border-[#E58C36]/60 hover:bg-[#181512]/95 shadow-[0_12px_32px_rgba(229,140,54,0.06)]"
          : "border-white/10 bg-[#111318]/90 hover:border-[#E58C36]/40 hover:bg-[#141720]/95 shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div>
        {/* Status Badge & Meta */}
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
              isPaper
                ? "bg-[#E58C36]/15 text-[#E58C36] border border-[#E58C36]/40 font-semibold"
                : project.status === "Shipped"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : project.status === "In progress"
                ? "bg-[#E58C36]/10 text-[#E58C36] border border-[#E58C36]/30"
                : project.status === "Research"
                ? "bg-[#B45309]/15 text-[#E58C36] border border-[#B45309]/30"
                : "bg-white/5 text-[#A8A29E] border border-white/10"
            }`}
          >
            {isPaper ? "Peer-Reviewed Paper" : project.status}
          </span>

          <div className="flex items-center gap-2">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} PDF Download`}
                title="Download PDF"
                className="rounded-lg p-1.5 text-[#E58C36]/80 transition hover:bg-[#E58C36]/10 hover:text-[#E58C36]"
              >
                <FileText className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} Repository`}
                title="View GitHub Repository"
                className="rounded-lg p-1.5 text-[#A8A29E] transition hover:bg-white/5 hover:text-white"
              >
                <GitFork className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} External Link`}
                className="rounded-lg p-1.5 text-[#A8A29E] transition hover:bg-[#E58C36]/10 hover:text-[#E58C36]"
                title={isPaper ? "View Journal Page" : "Live Demo"}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h4 className="mt-4 text-base font-medium tracking-tight text-[#F5EFEB] group-hover:text-white transition">
          {project.name}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-[#A8A29E]">
          {project.oneLiner}
        </p>

        {/* Citation / DOI note if available */}
        {project.notes && (
          <div className="mt-3 rounded-lg border border-white/5 bg-black/40 px-3 py-2 font-mono text-[10px] text-[#A8A29E]/90 leading-normal">
            {project.notes}
          </div>
        )}
      </div>

      {/* Tech Stack Pills & Links Footer */}
      <div className="mt-6 border-t border-white/5 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/[0.03] border border-white/5 px-2 py-0.5 font-mono text-[10px] text-[#F5EFEB]/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#A8A29E]">
          {isPaper ? (
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl || project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#E58C36] hover:text-[#F5EFEB] transition"
              >
                <BookOpen className="h-3 w-3" />
                <span>Read Article</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              {project.paperUrl && (
                <>
                  <span className="text-white/20">•</span>
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#A8A29E] hover:text-white transition"
                  >
                    <FileText className="h-3 w-3" />
                    <span>PDF</span>
                  </a>
                </>
              )}
            </div>
          ) : project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#E58C36] hover:text-[#F5EFEB] transition"
            >
              <span>View Source</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-[#A8A29E]/40">[Internal Studio Project]</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CompactRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3 group transition hover:bg-white/[0.02] px-3 rounded-lg"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-medium text-[#F5EFEB] group-hover:text-[#E58C36] transition">
            {project.name}
          </h4>
          <span
            className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded-full ${
              project.status === "Research"
                ? "bg-[#B45309]/15 text-[#E58C36] border border-[#B45309]/30"
                : "bg-white/5 text-[#A8A29E] border border-white/10"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="mt-1 text-xs text-[#A8A29E]">{project.oneLiner}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-wrap gap-1 max-w-xs justify-end">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/5 border border-white/5 px-1.5 py-0.5 font-mono text-[9px] text-[#A8A29E]"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-xs text-[#E58C36] hover:text-[#F5EFEB] transition"
          >
            <GitFork className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ) : (
          <span className="font-mono text-[10px] text-[#A8A29E]/40">[Internal Studio Project]</span>
        )}
      </div>
    </motion.div>
  );
}
