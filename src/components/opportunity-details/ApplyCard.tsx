import {
  CalendarDays,
  ExternalLink,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";


interface ApplyCardProps {
  opportunity: Opportunity;
}


export default function ApplyCard({
  opportunity,
}: ApplyCardProps) {

  return (
    <section
      className="
      rounded-3xl
      bg-gradient-to-br
      from-blue-600
      to-indigo-700
      p-8
      text-white
      shadow-xl
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        "
      >
        Ready to apply?
      </h2>


      <p
        className="
        mt-3
        text-white/80
        "
      >
        Take the next step and apply for this opportunity.
      </p>



      <div
        className="
        mt-6
        flex
        items-center
        gap-3
        rounded-xl
        bg-white/10
        p-4
        "
      >

        <CalendarDays size={22}/>

        <div>

          <p className="text-sm text-white/70">
            Application Deadline
          </p>


          <p className="font-semibold">
            {opportunity.deadline}
          </p>

        </div>

      </div>



      <a
        href={opportunity.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-white
        px-6
        py-3
        font-semibold
        text-blue-700
        transition
        hover:bg-blue-50
        "
      >

        Apply Now

        <ExternalLink size={18}/>

      </a>


    </section>
  );
}