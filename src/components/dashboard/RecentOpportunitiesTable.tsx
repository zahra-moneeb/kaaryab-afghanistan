import Link from "next/link";
import { ListChecks, ArrowUpRight, MapPin, CalendarDays } from "lucide-react";
import type { Opportunity } from "@/types/opportunity";

type RecentOpportunitiesTableProps = {
  opportunities: Opportunity[];
  loading?: boolean;
};

const typeStyles: Record<string, string> = {
  Job: "bg-blue-500/10 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
  Scholarship:
    "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  Training:
    "bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  Internship:
    "bg-purple-500/10 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300",
  Course:
    "bg-purple-500/10 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300",
};

function isDeadlineSoon(deadline: string) {
  const days = Math.ceil(
    (new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );
  return !isNaN(days) && days >= 0 && days <= 7;
}

export default function RecentOpportunitiesTable({
  opportunities,
   loading = false,
}: RecentOpportunitiesTableProps) {

    if (loading) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <p className="text-sm text-slate-500 dark:text-zinc-400">
        Loading opportunities...
      </p>
    </div>
  );
}

if (!loading && opportunities.length === 0) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <p className="text-slate-600 dark:text-zinc-400">
        No opportunities found.
      </p>
    </div>
  );
}
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-violet-400/10 dark:text-violet-300">
            <ListChecks size={18} />
          </div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Opportunities
          </h2>
        </div>

        <Link
          href="/opportunities"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-violet-400 dark:hover:text-violet-300"
        >
          View all
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {opportunities.length === 0 ? (
        <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
          <ListChecks size={22} className="text-slate-300 dark:text-zinc-700" />
          <p className="text-sm text-slate-500 dark:text-zinc-500">
            No opportunities posted yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-white/5 dark:text-zinc-500">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Deadline</th>
              </tr>
            </thead>

            <tbody>
              {opportunities.map((opportunity) => {
                const badge =
                  typeStyles[opportunity.opportunityType] ??
                  "bg-indigo-500/10 text-indigo-700 dark:bg-violet-400/10 dark:text-violet-300";
                const soon = isDeadlineSoon(opportunity.deadline);

                return (
                  <tr
                    key={opportunity.id}
                    className="group border-t border-slate-200 transition-colors hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/[0.04]"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/opportunities/${opportunity.id}`}
                        className="font-medium text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-violet-300"
                      >
                        {opportunity.title}
                      </Link>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${badge}`}
                      >
                        {opportunity.opportunityType}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-400 dark:text-zinc-600" />
                        {opportunity.location}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div
                        className={`flex items-center gap-1.5 ${
                          soon
                            ? "font-medium text-red-600 dark:text-red-400"
                            : "text-slate-600 dark:text-zinc-400"
                        }`}
                      >
                        <CalendarDays
                          size={14}
                          className={
                            soon
                              ? "text-red-500 dark:text-red-400"
                              : "text-slate-400 dark:text-zinc-600"
                          }
                        />
                        {opportunity.deadline}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}