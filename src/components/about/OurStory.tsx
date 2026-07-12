import { BookOpen, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: BriefcaseBusiness, value: "1000+", label: "Job Opportunities" },
  { icon: GraduationCap, value: "500+", label: "Scholarships" },
  { icon: BookOpen, value: "300+", label: "Training Programs" },
  { icon: Users, value: "10K+", label: "Community Members" },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-zinc-950">
      {/* Atmospheric background — smoky blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl dark:bg-purple-700/20" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-indigo-900/30" />
        {/* smoky noise overlay for dark mode */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
            Our Story
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-[2.75rem] dark:text-zinc-50">
            Empowering People Through Opportunities
          </h2>

          <p className="mt-6 leading-8 text-slate-700 dark:text-zinc-300">
            KaarYab was created to make opportunities more accessible for
            everyone in Afghanistan. We believe that every individual deserves
            access to career growth, quality education, and professional
            development.
          </p>

          <p className="mt-4 leading-8 text-slate-700 dark:text-zinc-300">
            Our platform brings together jobs, scholarships, training programs,
            and educational courses in one trusted place, helping individuals
            build brighter futures while supporting organizations in reaching
            talented and motivated people.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/60 bg-white/50 p-5 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 dark:hover:bg-white/[0.08]"
                >
                  <div className="inline-flex rounded-xl bg-indigo-600/10 p-2.5 backdrop-blur-sm transition-colors group-hover:bg-indigo-600/20 dark:bg-violet-400/10 dark:group-hover:bg-violet-400/20">
                    <Icon
                      className="text-indigo-700 dark:text-violet-300"
                      size={22}
                    />
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-zinc-50">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow ring behind the glass frame */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-2xl dark:from-violet-500/20 dark:to-purple-500/20"
            />

            {/* Glass frame */}
            <div className="relative h-[450px] overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/about/b.jpg"
                  alt="About KaarYab"
                  fill
                  className="object-cover"
                />
                {/* Smoky gradient over the photo itself */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </div>
            </div>

            {/* Floating glass badge on the image */}
            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/50 bg-white/60 px-5 py-4 text-center shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60">
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                Trusted by communities across Afghanistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}