import { Sparkles } from "lucide-react";

import { Opportunity } from "@/types/opportunity";


interface BenefitsProps {
  opportunity: Opportunity;
}


export default function Benefits({
  opportunity,
}: BenefitsProps) {

  return (
    <section
      className="
      rounded-3xl
      border
      border-blue-100
      bg-gradient-to-br
      from-blue-50
      to-indigo-50
      p-8
      shadow-md
      dark:border-slate-700
      dark:from-slate-900
      dark:to-slate-800
      "
    >


      <h2
        className="
        mb-6
        text-2xl
        font-bold
        text-slate-900
        dark:text-white
        "
      >
        Benefits
      </h2>



      <div
        className="
        grid
        gap-4
        md:grid-cols-2
        "
      >

        {opportunity.benefits.map(
          (benefit, index) => (

          <div
            key={index}
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-white
            p-5
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-lg
            dark:bg-slate-800
            "
          >

            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-blue-100
              text-blue-600
              dark:bg-blue-950
              "
            >

              <Sparkles size={22}/>

            </div>


            <p
              className="
              text-slate-700
              dark:text-slate-300
              "
            >
              {benefit}
            </p>


          </div>

        ))}


      </div>


    </section>
  );
}