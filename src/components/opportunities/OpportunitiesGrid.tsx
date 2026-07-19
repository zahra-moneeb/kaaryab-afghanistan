"use client";
import type { Opportunity } from "@/types/opportunity";
import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import OpportunityCard from "./OpportunityCard";


type OpportunitiesGridProps = {
  limit?: number;
  featuredOnly?: boolean;

  search: string;
  type: string;
};

export default function OpportunitiesGrid({ 
      limit, 
      featuredOnly = false,
      search,
      type,
      }: OpportunitiesGridProps) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    async function fetchOpportunities() {
      try {
        const response = await fetch("/api/opportunities");

        if (!response.ok) {
          throw new Error("Failed to fetch opportunities");
        }

        const data = await response.json();
        
        setOpportunities(data);
        
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchOpportunities();
  }, []);

  const filteredOpportunities = opportunities.filter((opportunity) => {

  const matchesSearch =
    opportunity.title
      .toLowerCase()
      .includes(search.toLowerCase());


  const matchesType =
    type === "" ||
    opportunity.type === type;


  return (
    matchesSearch &&
    matchesType
  );

});

const displayedOpportunities = featuredOnly
  ? filteredOpportunities.filter(
      (opportunity) => opportunity.featured
    )
  : filteredOpportunities;

const finalOpportunities = limit
  ? displayedOpportunities.slice(0, limit)
  : displayedOpportunities;

  return (
    <section className="relative overflow-hidden py-16">
      {/* Subtle grid texture, matching the hero above */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="h-5 w-20 rounded-full bg-white/10" />
                <div className="mt-4 h-5 w-3/4 rounded bg-white/10" />
                <div className="mt-2 h-4 w-1/2 rounded bg-white/10" />
                <div className="mt-6 flex gap-4">
                  <div className="h-4 w-20 rounded bg-white/10" />
                  <div className="h-4 w-20 rounded bg-white/10" />
                </div>
                <div className="mt-6 h-8 w-28 rounded-lg bg-white/10" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 p-8 text-center backdrop-blur-xl">
            <AlertCircle className="text-red-300" size={28} />
            <p className="font-medium text-red-100">{error}</p>
          </div>
        )}

        {!loading && !error && finalOpportunities.length === 0 && (
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/70 backdrop-blur-xl">
            No matching opportunities found.
          </div>
        )}


        {!loading && !error && finalOpportunities.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {finalOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}