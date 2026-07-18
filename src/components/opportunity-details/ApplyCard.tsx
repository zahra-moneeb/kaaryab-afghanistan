"use client";

import { CalendarDays, ExternalLink, Bookmark, CheckCircle2 } from "lucide-react";

import { useSaved } from "@/context/SavedContext";

import { Opportunity } from "@/types/opportunity";

interface ApplyCardProps {
  opportunity: Opportunity;
}

export default function ApplyCard({ opportunity }: ApplyCardProps) {
  const { saveOpportunity, removeOpportunity, isSaved, isLoaded } = useSaved();

  const saved = isLoaded ? isSaved(opportunity.id) : false;

  function handleSave() {
    if (saved) {
      removeOpportunity(opportunity.id);
    } else {
      saveOpportunity(opportunity);
    }
  }

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 p-8 !text-white shadow-2xl shadow-indigo-900/20 dark:from-violet-800 dark:via-purple-900 dark:to-zinc-950">
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,black,transparent)]"
      />

      {/* Glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium !text-white backdrop-blur-sm">
          <CheckCircle2 size={12} />
          Applications open
        </span>

        <h2 className="mt-4 text-2xl font-bold tracking-tight !text-white">
          Ready to apply?
        </h2>

        <p className="mt-2 text-sm leading-6 !text-white/70">
          Take the next step and apply for this opportunity.
        </p>

        {/* Deadline stat */}
        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <CalendarDays size={20} className="!text-white/80" />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide !text-white/50">
              Application deadline
            </p>
            <p className="mt-0.5 truncate font-semibold !text-white">
              {opportunity.deadline}
            </p>
          </div>
        </div>

        {/* Primary action */}
       <a 
          href={opportunity.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold !text-indigo-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-lg active:scale-98"
        >
          Apply Now
          <ExternalLink
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Secondary action */}
        <button
          onClick={handleSave}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold !text-white transition-all duration-200 active:scale-98 ${
            saved
              ? "border-white/30 bg-white/20"
              : "border-white/20 bg-transparent hover:border-white/30 hover:bg-white/10"
          }`}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
          {saved ? "Saved" : "Save Opportunity"}
        </button>
      </div>
    </section>
  );
}