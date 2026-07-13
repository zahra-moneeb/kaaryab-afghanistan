import {
  MapPin,
  CalendarDays,
  BriefcaseBusiness,
  Wifi,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";


interface DetailHeroProps {
  opportunity: Opportunity;
}


export default function DetailHero({
  opportunity,
}: DetailHeroProps) {

  return (
    <section
      className="
      rounded-3xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      p-8
      text-white
      shadow-xl
      "
    >

      <div className="flex flex-col gap-6">


        {/* Badge */}

        <div className="flex gap-3">

          <span
            className="
            rounded-full
            bg-white/20
            px-4
            py-1
            text-sm
            "
          >
            {opportunity.type}
          </span>


          {opportunity.isRemote && (
            <span
              className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white/20
              px-4
              py-1
              text-sm
              "
            >
              <Wifi size={16}/>
              Remote
            </span>
          )}

        </div>



        {/* Title */}

        <div>

          <h1
            className="
            text-4xl
            font-bold
            "
          >
            {opportunity.title}
          </h1>


          <p
            className="
            mt-2
            text-lg
            text-white/80
            "
          >
            {opportunity.company}
          </p>

        </div>




        {/* Info */}

        <div
          className="
          flex
          flex-wrap
          gap-6
          text-sm
          "
        >

          <div className="flex items-center gap-2">
            <MapPin size={18}/>
            {opportunity.location}
          </div>



          <div className="flex items-center gap-2">
            <CalendarDays size={18}/>
            Deadline: {opportunity.deadline}
          </div>



          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={18}/>
            {opportunity.experience}
          </div>


        </div>


      </div>

    </section>
  );
}