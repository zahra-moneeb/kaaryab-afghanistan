"use client";

import { useSaved } from "@/context/SavedContext";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { Bookmark, Search } from "lucide-react";
import Link from "next/link";

export default function SavedPage() {
  const { savedOpportunities } = useSaved();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-900 to-violet-950 dark:from-zinc-950 dark:via-violet-950/60 dark:to-black">
      {/* Shared grid texture, matching OpportunitiesHero/Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
      />

      {/* Glow accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-sm">
              <Bookmark size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Saved Opportunities
              </h1>
              <p className="mt-1 text-sm text-white/60">
                {savedOpportunities.length === 0
                  ? "Nothing saved yet"
                  : `${savedOpportunities.length} ${
                      savedOpportunities.length === 1
                        ? "opportunity"
                        : "opportunities"
                    } saved`}
              </p>
            </div>
          </div>

          {savedOpportunities.length > 0 && (
            <Link
              href="/opportunities"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/20 active:scale-98"
            >
              <Search size={16} />
              Browse more
            </Link>
          )}
        </div>

        {/* Content */}
        {savedOpportunities.length === 0 ? (
          <div className="mx-auto mt-16 max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-10 text-center backdrop-blur-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Bookmark size={26} className="text-white/70" />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-white">
              No saved opportunities yet
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Start exploring opportunities and save the ones you like — they&apos;ll
              show up here.
            </p>

            <Link
              href="/opportunities"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-98"
            >
              Explore opportunities
              <Search size={16} />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}