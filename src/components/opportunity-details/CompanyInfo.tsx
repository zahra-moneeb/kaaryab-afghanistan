import { Building2 } from "lucide-react";

import { Opportunity } from "@/types/opportunity";


interface CompanyInfoProps {
  opportunity: Opportunity;
}


export default function CompanyInfo({
  opportunity,
}: CompanyInfoProps) {

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-8
      shadow-md
      dark:bg-slate-900
      "
    >

      <div
        className="
        mb-6
        flex
        items-center
        gap-3
        "
      >

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-indigo-100
          text-indigo-600
          dark:bg-indigo-950
          "
        >
          <Building2 size={26}/>
        </div>


        <h2
          className="
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
          "
        >
          About {opportunity.company}
        </h2>

      </div>



      <p
        className="
        leading-8
        text-slate-700
        dark:text-slate-300
        "
      >
        {opportunity.companyDescription}
      </p>


    </section>
  );
}