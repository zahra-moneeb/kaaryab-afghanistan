import { ListChecks, Check } from "lucide-react";

import { Opportunity } from "@/types/opportunity";

interface RequirementsProps {
  opportunity: Opportunity;
}

export default function Requirements({ opportunity }: RequirementsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
          <ListChecks size={22} />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          Requirements
        </h2>
      </div>

      <div className="mt-5 h-px w-full bg-gradient-to-r from-emerald-200 via-slate-200 to-transparent dark:from-emerald-500/30 dark:via-white/10" />

      <div className="mt-6 space-y-3">
        {opportunity.requirements.map((item, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 rounded-xl border border-transparent p-4 transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/50 dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/5"
          >
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-colors duration-200 group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-400/10 dark:text-emerald-300 dark:group-hover:bg-emerald-400 dark:group-hover:text-emerald-950">
              <Check size={14} strokeWidth={2.5} />
            </div>

            <p className="leading-7 text-slate-700 dark:text-zinc-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}