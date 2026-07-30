import {
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";
import type { Opportunity } from "@/types/opportunity";
import RecentOpportunitiesTable from "@/components/dashboard/RecentOpportunitiesTable";
import OpportunitiesChart from "@/components/dashboard/OpportunitiesChart";


import DashboardCard from "@/components/dashboard/DashboardCard";

export default  async function DashboardPage() {
const res = await fetch(
  "http://localhost:3000/api/opportunities",
  {
    cache: "no-store",
  }
);

const opportunities = await res.json();

const total = opportunities.length;

const jobs = opportunities.filter(
  (item: Opportunity) => item.type === "Job"
).length;

const internships = opportunities.filter(
  (item: Opportunity) => item.type === "Internship"
).length;

const remote = opportunities.filter(
  (item: Opportunity) => item.isRemote === true
).length;
  

const recentOpportunities = opportunities.slice(0, 5);

// data for chart component

const opportunitiesByType = opportunities.reduce(
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
    value :Number(value),
  })
);


// chart location
const opportunitiesByLocation = opportunities.reduce(
  (
    acc: Record<string, number>,
    opportunity
  ) => {
    const location = opportunity.location;

    acc[location] = (acc[location] || 0) + 1;

    return acc;
  },
  {}
);



const locationChartData = Object.entries(
  opportunitiesByLocation
).map(([name, value]) => ({
  name,
  value: Number(value),
}));
   
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
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentOpportunitiesTable
          opportunities={recentOpportunities}
          loading={false}
        />

        <OpportunitiesChart data={chartData} />
      </div>
    </main>

  );
}