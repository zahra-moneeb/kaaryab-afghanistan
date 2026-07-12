import { ShieldCheck, Globe, Users, Sparkles } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Trust & Safety",
    description:
      "We ensure all opportunities are verified and safe for users across the platform.",
    icon: ShieldCheck,
    iconColor: "text-blue-600 dark:text-blue-300",
    iconBg: "bg-blue-500/20 dark:bg-blue-400/20",
  },
  {
    title: "Global Access",
    description:
      "Our platform connects people with opportunities beyond borders and limitations.",
    icon: Globe,
    iconColor: "text-emerald-600 dark:text-emerald-300",
    iconBg: "bg-emerald-500/20 dark:bg-emerald-400/20",
  },
  {
    title: "Community Driven",
    description:
      "We grow with our users by listening, improving, and building together.",
    icon: Users,
    iconColor: "text-purple-600 dark:text-purple-300",
    iconBg: "bg-purple-500/20 dark:bg-purple-400/20",
  },
  {
    title: "Innovation",
    description:
      "We use modern technology to simplify access to jobs, education, and training.",
    icon: Sparkles,
    iconColor: "text-amber-600 dark:text-amber-300",
    iconBg: "bg-amber-500/20 dark:bg-amber-400/20",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Full-bleed photo background */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/about/e.jpg"
          alt=""
          fill
          className="object-cover"
        />

        {/* Scrim — light in light mode (photo stays bright), heavier smoky dark in dark mode */}
        <div className="absolute inset-0 bg-white/30 dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 dark:from-black/30 dark:via-black/10 dark:to-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/40 bg-white/30 px-8 py-10 text-center shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-black/40">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
            Our Values
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What We Stand For
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-800 dark:text-white/80">
            Our values guide every decision we make while building KaarYab as a
            trusted opportunity platform.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-2xl border border-white/40 bg-white/30 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/40 dark:border-white/10 dark:bg-black/30 dark:shadow-black/40 dark:hover:bg-black/40"
              >
                <div
                  className={`mb-5 inline-flex rounded-2xl p-3 backdrop-blur-sm ${value.iconBg}`}
                >
                  <Icon size={28} className={value.iconColor} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-white/75">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}