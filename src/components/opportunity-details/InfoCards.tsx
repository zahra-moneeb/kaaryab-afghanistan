import {
  BriefcaseBusiness,
  FolderOpen,
  DollarSign,
  CalendarDays,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";


interface InfoCardsProps {
  opportunity: Opportunity;
}


export default function InfoCards({
  opportunity,
}: InfoCardsProps) {

  const cards = [
    {
      title: "Opportunity Type",
      value: opportunity.type,
      icon: BriefcaseBusiness,
    },

    {
      title: "Category",
      value: opportunity.category,
      icon: FolderOpen,
    },

    {
      title: "Salary",
      value: opportunity.salary,
      icon: DollarSign,
    },

    {
      title: "Posted",
      value: opportunity.postedAt,
      icon: CalendarDays,
    },
  ];


  return (
    <section
      className="
      grid
      grid-cols-1
      gap-5
      sm:grid-cols-2
      lg:grid-cols-4
      "
    >

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
            rounded-2xl
            bg-white
            p-5
            shadow-md
            transition
            hover:-translate-y-1
            hover:shadow-xl
            dark:bg-slate-900
            "
          >

            <div
              className="
              mb-4
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
              <Icon size={22}/>
            </div>


            <p
              className="
              text-sm
              text-slate-500
              dark:text-slate-400
              "
            >
              {card.title}
            </p>


            <h3
              className="
              mt-1
              font-semibold
              text-slate-900
              dark:text-white
              "
            >
              {card.value}
            </h3>


          </div>
        );
      })}

    </section>
  );
}