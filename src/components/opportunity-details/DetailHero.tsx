
import {
  MapPin,
  CalendarDays,
  BriefcaseBusiness,
  Wifi,
  ArrowLeft,
  ArrowUpRight,
   Pencil,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import DeleteButton from "@/components/ui/DeleteButton";

import { Opportunity } from "@/types/opportunity";

interface DetailHeroProps {
  opportunity: Opportunity;
}

export default function DetailHero({ opportunity }: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-violet-50 to-indigo-100 p-8 shadow-xl shadow-indigo-100/50 sm:p-10 dark:from-zinc-950 dark:via-violet-950/60 dark:to-black dark:shadow-black/40">
      {/* Subtle grid texture, matching OpportunitiesHero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_0%_0%,black,transparent)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
      />

      {/* Glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl dark:bg-violet-500/15"
      />

      <div className="relative flex flex-col gap-6">
        {/* Back link */}
        <Link
          href="/opportunities"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-700 dark:text-white/70 dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Opportunities
        </Link>

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/60 px-4 py-1 text-sm font-medium text-indigo-700 backdrop-blur-sm dark:border-white/20 dark:bg-white/10 dark:text-white">
                {opportunity.type}
              </span>

              {opportunity.isRemote && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-white/60 px-4 py-1 text-sm font-medium text-indigo-700 backdrop-blur-sm dark:border-white/20 dark:bg-white/10 dark:text-white">
                  <Wifi size={14} />
                  Remote
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {opportunity.title}
            </h1>

            <p className="mt-2 text-lg text-slate-600 dark:text-white/75">
              {opportunity.company}
            </p>
          </div>

          {/* Primary action */}
{/* Actions */}
<div className="flex flex-wrap items-center gap-3">

    <Link
      href="#apply"
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-gradient-to-r
        from-indigo-600
        to-violet-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-lg
      "
    >
      Apply Now

      <ArrowUpRight
        size={18}
        className="
          transition-transform
          duration-200
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
      />
    </Link>


    <Link
      href={`/opportunities/${opportunity.id}/edit`}
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-indigo-300
        bg-white
        px-5
        py-3
        font-medium
        text-indigo-700
        transition-all
        hover:bg-indigo-50
        dark:border-white/10
        dark:bg-white/10
        dark:text-white
        dark:hover:bg-white/20
      "
    >
      <Pencil size={18} />

      Edit
    </Link>


 <DeleteButton
  id={opportunity.id}
/>
 </div>
        </div>

        {/* Info row — glass chips */}
        <div className="mt-2 flex flex-wrap gap-3 border-t border-slate-200 pt-6 text-sm dark:border-white/10">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
            <MapPin size={16} className="text-indigo-600 dark:text-white/60" />
            {opportunity.location}
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
            <CalendarDays size={16} className="text-indigo-600 dark:text-white/60" />
            Deadline: {opportunity.deadline}
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
            <BriefcaseBusiness size={16} className="text-indigo-600 dark:text-white/60" />
            {opportunity.experience}
          </div>
        </div>
      </div>
    </section>
  );
}