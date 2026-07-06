import { ShieldCheck, Globe, Users, Sparkles } from "lucide-react";

const values = [
  {
    title: "Trust & Safety",
    description:
      "We ensure all opportunities are verified and safe for users across the platform.",
    icon: ShieldCheck,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Global Access",
    description:
      "Our platform connects people with opportunities beyond borders and limitations.",
    icon: Globe,
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    title: "Community Driven",
    description:
      "We grow with our users by listening, improving, and building together.",
    icon: Users,
    color: "text-purple-600 bg-purple-100",
  },
  {
    title: "Innovation",
    description:
      "We use modern technology to simplify access to jobs, education, and training.",
    icon: Sparkles,
    color: "text-amber-600 bg-amber-100",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Values
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            What We Stand For
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our values guide every decision we make while building KaarYab as a
            trusted opportunity platform.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-5 inline-flex rounded-2xl p-3 ${value.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}