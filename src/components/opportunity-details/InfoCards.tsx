import {
  BriefcaseBusiness,
  FolderOpen,
  DollarSign,
  CalendarDays,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";

interface InfoCardsProps {
  opportunity: Opportunity;
}

export default function InfoCards({ opportunity }: InfoCardsProps) {
  const cards = [
    {
      title: "Opportunity Type",
      value: opportunity.type,
      icon: BriefcaseBusiness,
      iconColor: "text-indigo-600 dark:text-violet-300",
      iconBg: "bg-indigo-500/10 dark:bg-violet-400/10",
    },
    {
      title: "Category",
      value: opportunity.category,
      icon: FolderOpen,
      iconColor: "text-blue-600 dark:text-blue-300",
      iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
    },
    {
      title: "Salary",
      value: opportunity.salary,
      icon: DollarSign,
      iconColor: "text-emerald-600 dark:text-emerald-300",
      iconBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    },
    {
      title: "Posted",
      value: opportunity.postedAt,
      icon: CalendarDays,
      iconColor: "text-amber-600 dark:text-amber-300",
      iconBg: "bg-amber-500/10 dark:bg-amber-400/10",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/30 dark:hover:shadow-none"
          >
            {/* Faint accent glow in the corner, revealed on hover */}
            <div
              aria-hidden
              className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${card.iconBg} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="relative">
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}
              >
                <Icon size={22} className={card.iconColor} />
              </div>

              <p className="text-sm text-slate-500 dark:text-zinc-500">
                {card.title}
              </p>

              <h3 className="mt-1 truncate text-lg font-semibold text-slate-900 dark:text-zinc-50">
                {card.value}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
}