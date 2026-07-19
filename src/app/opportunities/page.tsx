"use client";

import OpportunitiesHero from "@/components/opportunities/OpportunitiesHero";

import OpportunitiesGrid from "@/components/opportunities/OpportunitiesGrid";
import { useState } from "react";

export default function OpportunitiesPage() {
  
    const [search, setSearch] = useState("");
     const [type, setType] = useState("");

  

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-900 to-violet-950 dark:from-zinc-950 dark:via-violet-950/60 dark:to-black">
      {/* Shared grid texture for the whole page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
      />

      <div className="relative">
        <OpportunitiesHero 
            search={search}
            type={type}
            onSearchChange={setSearch}
            onTypeChange={setType}
        />
       
        <OpportunitiesGrid 
            search={search}
            type={type}
            
        />
      </div>
    </main>
  );
}