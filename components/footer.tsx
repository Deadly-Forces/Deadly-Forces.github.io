import { profile } from "@/data/profile";
import { GitFork, Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:gap-6 px-4 sm:px-8 text-center sm:text-left">
        <div>
          <p className="text-xs font-light text-[#F5EFEB]">
            {profile.name}
          </p>
          <p className="font-mono text-[11px] text-[#A8A29E] mt-0.5">
            {profile.education.degree} · SRM IST Vadapalani
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 font-mono text-xs text-[#A8A29E]">
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

          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-1.5 transition hover:text-[#E58C36] focus:outline-none focus:ring-1 focus:ring-[#E58C36] p-1 rounded"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>{profile.contact.email}</span>
          </a>

          <a
            href={profile.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-[#E58C36]/30 bg-[#E58C36]/10 px-2.5 py-1 text-[#E58C36] transition hover:bg-[#E58C36]/20 hover:border-[#E58C36]/60"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
