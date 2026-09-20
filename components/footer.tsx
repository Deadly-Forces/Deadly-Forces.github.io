import { profile } from "@/data/profile";
import { GitFork, Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0A0B0E] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:px-8">
        <div>
          <p className="text-xs font-light text-[#F5EFEB]">
            {profile.name}
          </p>
          <p className="font-mono text-[11px] text-[#A8A29E] mt-0.5">
            {profile.education.degree} · SRM IST Vadapalani
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#A8A29E]">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-[#E58C36] focus:outline-none focus:ring-1 focus:ring-[#E58C36] p-1 rounded"
          >
            <GitFork className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-[#E58C36] focus:outline-none focus:ring-1 focus:ring-[#E58C36] p-1 rounded"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>

          <span className="flex items-center gap-1.5 text-[#A8A29E]">
            <Mail className="h-3.5 w-3.5" />
            <span className="rounded bg-white/5 px-2 py-0.5 text-[#E58C36]">
              {profile.contact.email}
            </span>
          </span>

          <span className="flex items-center gap-1.5 text-[#A8A29E]">
            <FileText className="h-3.5 w-3.5" />
            <span className="rounded bg-white/5 px-2 py-0.5 text-[#E58C36]">
              {profile.contact.resumeUrl}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
