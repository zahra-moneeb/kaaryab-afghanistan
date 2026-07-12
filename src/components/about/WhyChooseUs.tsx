import { CheckCircle, Zap, Shield, Globe } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Fast & Easy Application",
    description:
      "Apply to jobs, scholarships, and courses in just a few clicks without complexity.",
    icon: Zap,
  },
  {
    title: "Trusted Opportunities",
    description:
      "We verify listings to ensure safe and reliable opportunities for all users.",
    icon: Shield,
  },
  {
    title: "Global Reach",
    description:
      "Access opportunities not only locally but also internationally.",
    icon: Globe,
  },
  {
    title: "User-Friendly Experience",
    description:
      "Simple, modern, and clean interface designed for everyone.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile-only: full-bleed photo background */}
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <Image src="/about/d.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/30 dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-50 dark:from-black/30 dark:via-black/20 dark:to-zinc-950" />
      </div>

      {/* Desktop-only: plain themed background */}
      <div className="absolute inset-0 hidden bg-slate-50 lg:block dark:bg-zinc-950" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left Side */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300 lg:text-indigo-600 lg:dark:text-violet-400">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300 lg:bg-indigo-600 lg:dark:bg-violet-400" />
            Why Choose KaarYab
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:dark:text-zinc-50">
            A Better Way to Find Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-800 dark:text-white/80 lg:text-slate-600 lg:dark:text-zinc-400">
            We simplify the process of finding jobs, scholarships, and courses
            so you can focus on what matters most — your growth.
          </p>

          <div className="mt-10 space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex items-start gap-4 rounded-2xl border border-white/40 bg-white/30 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/45 dark:border-white/10 dark:bg-black/30 dark:shadow-black/30 dark:hover:bg-black/40 lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:hover:border-slate-200 lg:hover:bg-white lg:hover:shadow-sm lg:dark:border-transparent lg:dark:bg-transparent lg:dark:hover:border-zinc-800 lg:dark:hover:bg-zinc-900"
                >
                  <div className="mt-1 rounded-lg bg-indigo-600/15 p-1.5 text-indigo-700 backdrop-blur-sm dark:bg-violet-400/15 dark:text-violet-300 lg:bg-transparent lg:p-0 lg:text-indigo-600 lg:dark:bg-transparent lg:dark:text-violet-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white lg:dark:text-zinc-50">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-white/70 lg:text-slate-600 lg:dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side — desktop only, mobile uses the background photo instead */}
        <div className="mt-12 hidden justify-center lg:mt-0 lg:flex">
          <div className="relative w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-2xl dark:from-violet-500/20 dark:to-purple-500/20"
            />
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/about/d.jpg"
                  alt="About KaarYab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}