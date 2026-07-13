import { CheckCircle2 } from "lucide-react";

import { Opportunity } from "@/types/opportunity";


interface RequirementsProps {
  opportunity: Opportunity;
}


export default function Requirements({
  opportunity,
}: RequirementsProps) {

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

      <h2
        className="
        mb-6
        text-2xl
        font-bold
        text-slate-900
        dark:text-white
        "
      >
        Requirements
      </h2>



      <div className="space-y-4">


        {opportunity.requirements.map(
          (item, index) => (

          <div
            key={index}
            className="
            flex
            items-start
            gap-3
            rounded-xl
            bg-slate-50
            p-4
            transition
            hover:bg-blue-50
            dark:bg-slate-800
            dark:hover:bg-slate-700
            "
          >

            <CheckCircle2
              className="
              mt-1
              text-green-500
              "
              size={22}
            />


            <p
              className="
              leading-7
              text-slate-700
              dark:text-slate-300
              "
            >
              {item}
            </p>


          </div>

        ))}


      </div>


    </section>
  );
}