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
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9838]">
            Work & Publications
          </span>
          <h2 className="mt-2 text-2xl font-light tracking-[-0.02em] text-white sm:text-3xl">
            Selected Engineering & Research Projects
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Systems spanning full-stack application development, AI pipelines, benchmarking, and peer-reviewed research.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Compact Projects List (rendered only if compact projects exist) */}
        {compactProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-white/50">
              Additional Work & Research
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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col justify-between rounded-xl border p-6 transition ${
        isPaper
          ? "border-sky-500/30 bg-sky-950/[0.08] hover:border-sky-400/60 hover:bg-sky-950/[0.15]"
          : "border-white/10 bg-white/[0.02] hover:border-[#FF9838]/40 hover:bg-white/[0.04]"
      }`}
    >
      <div>
        {/* Status Badge & Meta */}
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
              isPaper
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                : project.status === "Shipped"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : project.status === "In progress"
                ? "bg-[#FF9838]/10 text-[#FF9838] border border-[#FF9838]/30"
                : project.status === "Research"
                ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                : "bg-white/5 text-white/50 border border-white/10"
            }`}
          >
            {isPaper ? "Published Paper" : project.status}
          </span>

          <div className="flex items-center gap-2">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} PDF Download`}
                title="Download PDF"
                className="text-sky-400/70 transition hover:text-sky-300"
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
                className="text-white/40 transition hover:text-white"
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
                className="text-white/40 transition hover:text-[#FF9838]"
                title={isPaper ? "View Journal Page" : "Live Demo"}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h4 className="mt-4 text-lg font-light tracking-tight text-white group-hover:text-[#FFF3DE]">
          {project.name}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-white/70">
          {project.oneLiner}
        </p>

        {/* Citation / DOI note if available */}
        {project.notes && (
          <div className="mt-3 rounded border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-white/60">
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
              className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-white/40">
          {isPaper ? (
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl || project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition"
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
                    className="flex items-center gap-1 text-white/60 hover:text-white transition"
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
              className="flex items-center gap-1 text-[#FF9838]/80 hover:text-[#FF9838] transition"
            >
              <span>View Source</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-white/30">[TODO: Repo]</span>
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
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3 group transition hover:bg-white/[0.01] px-2"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-light text-white group-hover:text-[#FF9838] transition">
            {project.name}
          </h4>
          <span
            className={`font-mono text-[9px] uppercase px-1.5 py-0.5 rounded ${
              project.status === "Research"
                ? "bg-sky-500/10 text-sky-400"
                : "bg-white/5 text-white/40"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="mt-1 text-xs text-white/60">{project.oneLiner}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-wrap gap-1 max-w-xs justify-end">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/50"
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
            className="flex items-center gap-1 font-mono text-xs text-[#FF9838] hover:text-[#FFF3DE] transition"
          >
            <GitFork className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ) : (
          <span className="font-mono text-[10px] text-white/30">[TODO: Link]</span>
        )}
      </div>
    </motion.div>
  );
}
