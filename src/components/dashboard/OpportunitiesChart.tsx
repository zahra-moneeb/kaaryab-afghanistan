"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
} from "recharts";
import { BarChart3 } from "lucide-react";

type ChartItem = {
  name: string;
  value: number;
};

type OpportunitiesChartProps = {
  data: ChartItem[];
};

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/95">
      <p className="text-xs font-medium text-slate-500 dark:text-zinc-500">{label}</p>
      <p className="mt-0.5 text-base font-bold text-slate-900 dark:text-zinc-50">
        {payload[0].value}{" "}
        <span className="text-xs font-normal text-slate-500 dark:text-zinc-500">
          opportunities
        </span>
      </p>
    </div>
  );
}

export default function OpportunitiesChart({ data }: OpportunitiesChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-violet-400/10 dark:text-violet-300">
            <BarChart3 size={18} />
          </div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Opportunities by Type
          </h2>
        </div>

        <span className="text-sm text-slate-500 dark:text-zinc-500">
          {total} total
        </span>
      </div>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-slate-200 dark:text-white/10"
            />

            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              className="fill-slate-500 dark:fill-zinc-500"
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
              className="fill-slate-500 dark:fill-zinc-500"
            />

            <Tooltip
              cursor={{ fill: "currentColor", className: "text-slate-100 dark:text-white/5" }}
              content={<CustomTooltip />}
            />

            <Bar
              dataKey="value"
              fill="url(#barFill)"
              radius={[8, 8, 0, 0]}
              maxBarSize={56}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
