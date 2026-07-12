import { Opportunity } from "@/types/opportunity";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type OpportunityCardProps = {
  opportunity: Opportunity;
};

const typeStyles: Record<string, { badge: string; icon: string }> = {
  Job: {
    badge: "bg-blue-400/15 text-blue-200 border-blue-400/20",
    icon: "text-blue-300",
  },
  Scholarship: {
    badge: "bg-emerald-400/15 text-emerald-200 border-emerald-400/20",
    icon: "text-emerald-300",
  },
  Training: {
    badge: "bg-amber-400/15 text-amber-200 border-amber-400/20",
    icon: "text-amber-300",
  },
  Course: {
    badge: "bg-purple-400/15 text-purple-200 border-purple-400/20",
    icon: "text-purple-300",
  },
};

export default function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {
  const style =
    typeStyles[opportunity.type] ??
    ({
      badge: "bg-violet-400/15 text-violet-200 border-violet-400/20",
      icon: "text-violet-300",
    } as const);

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1]">
      {/* Badge */}
      <span
        className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${style.badge}`}
      >
        {opportunity.type}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold leading-snug text-white">
        {opportunity.title}
      </h3>

      <p className="mt-1 text-sm text-white/60">{opportunity.company}</p>

      {/* Info */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className={style.icon} />
          {opportunity.location}
        </div>

        <div className="flex items-center gap-1.5">
          <Calendar size={16} className={style.icon} />
          {opportunity.deadline}
        </div>
      </div>

      {/* Spacer pushes the button to the bottom so cards align in a grid */}
      <div className="flex-1" />

      {/* Button — glass-tinted to sit on the dark gradient */}
      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/20 active:scale-98"
      >
        View Details
        <ArrowUpRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </div>
  );
}