import { LucideIcon } from "lucide-react";

type Accent = "indigo" | "blue" | "emerald" | "amber";

type DashboardCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  accent?: Accent;
};

const accentStyles: Record<Accent, { iconBg: string; glow: string }> = {
  indigo: {
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:bg-violet-400/10 dark:text-violet-300",
    glow: "bg-indigo-300/20 dark:bg-violet-500/10",
  },
  blue: {
    iconBg: "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
    glow: "bg-blue-300/20 dark:bg-blue-500/10",
  },
  emerald: {
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
    glow: "bg-emerald-300/20 dark:bg-emerald-500/10",
  },
  amber: {
    iconBg: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300",
    glow: "bg-amber-300/20 dark:bg-amber-500/10",
  },
};

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  accent = "indigo",
}: DashboardCardProps) {
  const style = accentStyles[accent];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
      {/* Corner glow, revealed on hover */}
      <div
        aria-hidden
        className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${style.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-zinc-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${style.iconBg}`}
        >
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}