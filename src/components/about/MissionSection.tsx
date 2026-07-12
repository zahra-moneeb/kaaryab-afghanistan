import { BriefcaseBusiness, GraduationCap, Target } from "lucide-react";

const missions = [
  {
    title: "Career Opportunities",
    description:
      "Connect job seekers with trusted employers and meaningful career opportunities across Afghanistan.",
    icon: BriefcaseBusiness,
    iconColor: "text-blue-600 dark:text-blue-300",
    iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
    glow: "bg-blue-300/40 dark:bg-blue-600/20",
  },
  {
    title: "Education & Scholarships",
    description:
      "Provide easy access to scholarships, educational programs, and professional training opportunities.",
    icon: GraduationCap,
    iconColor: "text-emerald-600 dark:text-emerald-300",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    glow: "bg-emerald-300/40 dark:bg-emerald-600/20",
  },
  {
    title: "Our Vision",
    description:
      "Build a single platform where people can discover opportunities that help them grow personally and professionally.",
    icon: Target,
    iconColor: "text-amber-600 dark:text-amber-300",
    iconBg: "bg-amber-500/10 dark:bg-amber-400/10",
    glow: "bg-amber-300/40 dark:bg-amber-600/20",
  },
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-zinc-950">
      {/* Atmospheric background — smoky blobs, one per mission color */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-600/15" />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-600/15" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-600/15" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
            Our Mission
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Helping People Unlock New Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-zinc-300">
            Our mission is to make career growth, education, and professional
            development accessible for everyone through one trusted platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission) => {
            const Icon = mission.icon;

            return (
              <div key={mission.title} className="group relative">
                {/* Glow behind card, intensifies on hover */}
                <div
                  aria-hidden
                  className={`absolute -inset-2 rounded-[1.75rem] ${mission.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative h-full rounded-3xl border border-white/50 bg-white/40 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/60 group-hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 dark:group-hover:bg-white/[0.08]">
                  <div
                    className={`mb-6 inline-flex rounded-2xl p-4 backdrop-blur-sm ${mission.iconBg}`}
                  >
                    <Icon size={32} className={mission.iconColor} />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-zinc-50">
                    {mission.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-700 dark:text-zinc-400">
                    {mission.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}