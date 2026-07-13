
import DetailHero from "@/components/opportunity-details/DetailHero";
import InfoCards from "@/components/opportunity-details/InfoCards";
import Requirements from "@/components/opportunity-details/Requirements";
import { Opportunity } from "@/types/opportunity";
import Benefits from "@/components/opportunity-details/Benefits";
import CompanyInfo from "@/components/opportunity-details/CompanyInfo";
import ApplyCard from "@/components/opportunity-details/ApplyCard";


async function getOpportunity(id: string) {
  const res = await fetch(
    "http://localhost:3000/api/opportunities",
    {
      cache: "no-store",
    }
  );

  const data: Opportunity[] = await res.json();

  return data.find((item) => item.id === Number(id));
}


export default async function OpportunityDetailsPage({
   params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const opportunity = await getOpportunity(id);


  if (!opportunity) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">
          Opportunity Not Found
        </h1>
      </div>
    )
  }


  return (
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-12">

    <DetailHero
      opportunity={opportunity}
    />


    <InfoCards
      opportunity={opportunity}
    />

    <Requirements 
       opportunity={opportunity}
   />

   <Benefits
    opportunity={opportunity}
    />

    <CompanyInfo 
      opportunity={opportunity}
    />   

    <ApplyCard
      opportunity={opportunity}
    />


  </section>
    
  );
}