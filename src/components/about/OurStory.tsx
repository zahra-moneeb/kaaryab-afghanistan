import { BookOpen, BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "1000+",
    label: "Job Opportunities",
  },
  {
    icon: GraduationCap,
    value: "500+",
    label: "Scholarships",
  },
  {
    icon: BookOpen,
    value: "300+",
    label: "Training Programs",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Community Members",
  },
];

export default function OurStory() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Story
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Empowering People Through Opportunities
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            KaarYab was created to make opportunities more accessible for
            everyone in Afghanistan. We believe that every individual deserves
            access to career growth, quality education, and professional
            development.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our platform brings together jobs, scholarships, training programs,
            and educational courses in one trusted place, helping individuals
            build brighter futures while supporting organizations in reaching
            talented and motivated people.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="mb-3 text-blue-600" size={28} />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="flex h-[450px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">
            <div className="relative h-[450px] w-full max-w-md overflow-hidden rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">
              <Image
                src="/about/b.jpg"
                alt="About KaarYab"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}