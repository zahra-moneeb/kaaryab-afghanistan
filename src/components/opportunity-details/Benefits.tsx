import { Sparkles, Gift } from "lucide-react";

import { Opportunity } from "@/types/opportunity";

interface BenefitsProps {
  opportunity: Opportunity;
}

export default function Benefits({ opportunity }: BenefitsProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-8 shadow-md dark:border-white/10 dark:from-zinc-900 dark:to-violet-950/20">
      {/* Soft glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl dark:bg-violet-500/10"
      />

      <div className="relative flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-violet-400/10 dark:text-violet-300">
          <Gift size={22} />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
          Benefits
        </h2>
      </div>

      <div className="relative mt-5 h-px w-full bg-gradient-to-r from-indigo-200 via-violet-200 to-transparent dark:from-violet-500/30 dark:via-white/10" />

      <div className="relative mt-6 grid gap-4 md:grid-cols-2">
        {opportunity.benefits.map((benefit, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:bg-violet-400/10 dark:text-violet-300">
              <Sparkles size={20} />
            </div>

            <p className="text-slate-700 dark:text-zinc-300">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}