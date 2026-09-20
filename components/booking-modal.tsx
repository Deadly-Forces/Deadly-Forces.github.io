"use client";

import { useEffect } from "react";
import { X, Calendar, Mail } from "lucide-react";
import { profile } from "@/data/profile";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedCalUrl = calLink
    ? calLink.startsWith("http")
      ? calLink
      : `https://cal.com/${calLink}`
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/20 bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#FF9838]/10 p-2 text-[#FF9838]">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 id="booking-modal-title" className="text-lg font-light text-white">
                Book a Discussion
              </h3>
              <p className="font-mono text-xs text-white/50">
                15 - 30 minutes · Asia/Kolkata timezone
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close booking modal"
            className="rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-[#FF9838]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6">
          {normalizedCalUrl ? (
            <div className="h-[480px] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                src={normalizedCalUrl}
                title="Cal.com Booking Interface"
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#FF9838]">
                <Mail className="h-6 w-6" />
              </div>
              <h4 className="text-base font-light text-white">
                Direct Scheduling via Email
              </h4>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-white/70">
                Cal.com link is currently pending configuration (set <code className="text-[#FF9838] font-mono">NEXT_PUBLIC_CAL_LINK</code>). You can reach out directly via email to coordinate a meeting time:
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${profile.contact.email}?subject=Meeting%20Request%20with%20Nikunj%20Kaslikar`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF9838] px-6 py-2.5 text-xs font-medium text-black transition hover:bg-[#FFF3DE] focus:outline-none focus:ring-2 focus:ring-[#FF9838]"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send Meeting Request</span>
                </a>
              </div>
              <p className="font-mono text-[10px] text-white/40 pt-2">
                Typical response time: {profile.availability.responseTime}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
