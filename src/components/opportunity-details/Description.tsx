import { FileText, Share2, Bookmark } from "lucide-react";

import { Opportunity } from "@/types/opportunity";

interface DescriptionProps {
  opportunity: Opportunity;
}

export default function Description({ opportunity }: DescriptionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-violet-400/10 dark:text-violet-300">
            <FileText size={22} />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            About This Opportunity
          </h2>
        </div>

        {/* Quick actions */}
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Save opportunity"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/10 dark:text-zinc-400 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
          >
            <Bookmark size={17} />
          </button>
          <button
            type="button"
            aria-label="Share opportunity"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/10 dark:text-zinc-400 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
          >
            <Share2 size={17} />
          </button>
        </div>
      </div>

      {/* Divider accent under the header */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-indigo-200 via-slate-200 to-transparent dark:from-violet-500/30 dark:via-white/10" />

      <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate-700 dark:text-zinc-300">
        {opportunity.description}
      </p>
    </section>
  );
}