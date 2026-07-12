"use client";

import { useState } from "react";
import {
  Search,
  Sparkles,
  LayoutGrid,
  Briefcase,
  GraduationCap,
  BookOpen,
  Building2,
} from "lucide-react";

const filters = [
  { label: "All", icon: LayoutGrid },
  { label: "Jobs", icon: Briefcase },
  { label: "Scholarships", icon: GraduationCap },
  { label: "Courses", icon: BookOpen },
  { label: "Internships", icon: Building2 },
];

export default function OpportunitiesHero() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="relative overflow-hidden py-24" >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />

      {/* Glow accents — dimmer, moodier */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
          <Sparkles size={14} className="text-violet-300" />
          1000+ opportunities and counting
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Explore Opportunities
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
          Discover jobs, scholarships, courses, and internships all in one
          place.
        </p>

        {/* Search Bar — glass panel floating on the gradient */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-3 shadow-xl shadow-black/30 backdrop-blur-xl transition-all duration-200 focus-within:border-white/20 focus-within:bg-white/[0.12]">
          <Search size={20} className="ml-2 shrink-0 text-white/50" />
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
          />
          <button
            type="button"
            className="shrink-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:from-indigo-400 hover:to-violet-400 active:scale-98"
          >
            Search
          </button>
        </div>

        {/* Filter section — glass pills with icons */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {filters.map(({ label, icon: Icon }) => {
            const isActive = activeFilter === label;

            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-200 active:scale-98 ${
                  isActive
                    ? "border-white/20 bg-white text-indigo-700"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={16} className={isActive ? "text-indigo-600" : ""} />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}