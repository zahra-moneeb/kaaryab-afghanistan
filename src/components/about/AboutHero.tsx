import { BriefcaseBusiness, Users, GraduationCap, Building2 } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const stats = [
  { icon: Users, label: "Job seekers", value: "10K+" },
  { icon: Building2, label: "Partner orgs", value: "150+" },
  { icon: GraduationCap, label: "Scholarships listed", value: "300+" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 dark:bg-zinc-950">
      {/* Mobile-only: full-bleed photo background */}
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <Image
          src="/about/c.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Smoky overlay for legibility over the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-100 dark:to-zinc-950" />
      </div>

      {/* Desktop-only: atmospheric blobs (no photo behind content there) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-300/30 blur-3xl dark:bg-purple-700/20" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-indigo-900/30" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-24 pt-40 lg:flex-row lg:gap-20 lg:pt-24">
        {/* Left Side */}
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md lg:border-white/50 lg:bg-white/40 lg:text-indigo-700 dark:lg:border-white/10 dark:lg:bg-white/5 dark:lg:text-violet-300">
            <BriefcaseBusiness size={16} />
            About KaarYab
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-slate-900 dark:lg:text-zinc-50">
            Connecting Afghan Talent
            <span className="mt-1 block bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent lg:from-indigo-600 lg:to-violet-600 dark:lg:from-violet-400 dark:lg:to-purple-400">
              With Meaningful Opportunities
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 lg:text-slate-700 dark:lg:text-zinc-300">
            KaarYab is a platform that connects people across Afghanistan with jobs,
            scholarships, training programs, and educational opportunities, while
            helping organizations discover talented and motivated individuals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary">Explore Opportunities</Button>
            <Button variant="secondary" className="!bg-white/10 !text-white !border-white/30 backdrop-blur-md lg:!bg-zinc-100 lg:!text-zinc-800 lg:!border-zinc-200/50 dark:lg:!bg-zinc-900 dark:lg:!text-zinc-200">
              For Organizations
            </Button>
          </div>

          {/* Stat strip — glass panel, works over photo or blobs */}
          <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/30 bg-white/10 p-5 shadow-lg backdrop-blur-xl lg:border-white/50 lg:bg-white/40 lg:shadow-slate-200/50 dark:lg:border-white/10 dark:lg:bg-white/5 dark:lg:shadow-black/40">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <Icon
                  size={18}
                  className="text-indigo-200 lg:text-indigo-700 dark:lg:text-violet-300"
                />
                <span className="text-xl font-bold text-white lg:text-slate-900 dark:lg:text-zinc-50">
                  {value}
                </span>
                <span className="text-xs text-white/70 lg:text-slate-600 dark:lg:text-zinc-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side — desktop only, mobile uses the background photo instead */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="relative w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-2xl dark:from-violet-500/20 dark:to-purple-500/20"
            />
            <div className="relative h-80 overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/about/c.jpg"
                  alt="About KaarYab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}