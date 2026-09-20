import { profile } from "@/data/profile";
import { GitFork, Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8">
        <div>
          <p className="text-xs font-light text-white">
            {profile.name}
          </p>
          <p className="font-mono text-[11px] text-white/40 mt-0.5">
            {profile.education.degree} · SRM IST Vadapalani
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-white/70">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-[#FF9838] focus:outline-none focus:ring-1 focus:ring-[#FF9838] p-1 rounded"
          >
            <GitFork className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-[#FF9838] focus:outline-none focus:ring-1 focus:ring-[#FF9838] p-1 rounded"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>

          <span className="flex items-center gap-1.5 text-white/40">
            <Mail className="h-3.5 w-3.5" />
            <span className="rounded bg-white/5 px-1.5 py-0.5 text-[#FF9838]">
              {profile.contact.email}
            </span>
          </span>

          <span className="flex items-center gap-1.5 text-white/40">
            <FileText className="h-3.5 w-3.5" />
            <span className="rounded bg-white/5 px-1.5 py-0.5 text-[#FF9838]">
              {profile.contact.resumeUrl}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
