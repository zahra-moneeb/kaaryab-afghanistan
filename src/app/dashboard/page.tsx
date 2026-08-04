import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";

import type { ListItem, Opportunity } from "@/types/opportunity";
import opportunities from "@/data/opportunities.json";

import RecentOpportunitiesTable from "@/components/dashboard/RecentOpportunitiesTable";
import OpportunitiesChart from "@/components/dashboard/OpportunitiesChart";
import DashboardCard from "@/components/dashboard/DashboardCard";

type RawOpportunity = Omit<Opportunity, "requirements" | "benefits"> & {
  requirements: Array<string | ListItem>;
  benefits: Array<string | ListItem>;
};

export default function DashboardPage() {
  const normalizedOpportunities: Opportunity[] = (
    opportunities as RawOpportunity[]
  ).map((opportunity) => ({
    ...opportunity,
    requirements: opportunity.requirements.map((item) =>
      typeof item === "string" ? { value: item } : item
    ),
    benefits: opportunity.benefits.map((item) =>
      typeof item === "string" ? { value: item } : item
    ),
  }));

  const total = normalizedOpportunities.length;

  const jobs = normalizedOpportunities.filter(
    (item: Opportunity) => item.type === "Job"
  ).length;

  const internships = normalizedOpportunities.filter(
    (item: Opportunity) => item.type === "Internship"
  ).length;

  const remote = normalizedOpportunities.filter(
    (item: Opportunity) => item.isRemote === true
  ).length;

  const recentOpportunities = normalizedOpportunities.slice(0, 5);

  // Data for chart component

  const opportunitiesByType = normalizedOpportunities.reduce(
    (
      acc: Record<string, number>,
      opportunity: Opportunity
    ) => {

      const type = opportunity.opportunityType;

      acc[type] = (acc[type] || 0) + 1;

      return acc;

    },
    {}
  );


  const chartData = Object.entries(opportunitiesByType).map(
    ([name, value]) => ({
      name,
      value: Number(value),
    })
  );


  return (

    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-900">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Overview of opportunities on KaarYab Afghanistan
          </p>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <DashboardCard
            title="Total Opportunities"
            value={total}
            icon={BriefcaseBusiness}
          />


          <DashboardCard
            title="Jobs"
            value={jobs}
            icon={Users}
          />


          <DashboardCard
            title="Internships"
            value={internships}
            icon={GraduationCap}
          />


          <DashboardCard
            title="Remote Opportunities"
            value={remote}
            icon={Laptop}
          />

        </div>


        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <RecentOpportunitiesTable
            opportunities={recentOpportunities}
            loading={false}
          />


          <OpportunitiesChart 
            data={chartData}
          />

        </div>

      </div>

    </main>

  );
}