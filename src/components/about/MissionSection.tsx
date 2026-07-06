import { BriefcaseBusiness, GraduationCap, Target } from "lucide-react";

const missions = [
  {
    title: "Career Opportunities",
    description:
      "Connect job seekers with trusted employers and meaningful career opportunities across Afghanistan.",
    icon: BriefcaseBusiness,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Education & Scholarships",
    description:
      "Provide easy access to scholarships, educational programs, and professional training opportunities.",
    icon: GraduationCap,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Our Vision",
    description:
      "Build a single platform where people can discover opportunities that help them grow personally and professionally.",
    icon: Target,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function MissionSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Mission
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Helping People Unlock New Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our mission is to make career growth, education, and professional
            development accessible for everyone through one trusted platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission) => {
            const Icon = mission.icon;

            return (
              <div
                key={mission.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${mission.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {mission.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}