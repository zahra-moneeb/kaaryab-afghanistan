import { CheckCircle, Zap, Shield, Globe } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Fast & Easy Application",
    description:
      "Apply to jobs, scholarships, and courses in just a few clicks without complexity.",
    icon: Zap,
  },
  {
    title: "Trusted Opportunities",
    description:
      "We verify listings to ensure safe and reliable opportunities for all users.",
    icon: Shield,
  },
  {
    title: "Global Reach",
    description:
      "Access opportunities not only locally but also internationally.",
    icon: Globe,
  },
  {
    title: "User-Friendly Experience",
    description:
      "Simple, modern, and clean interface designed for everyone.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

        {/* Left Side */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why Choose KaarYab
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            A Better Way to Find Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We simplify the process of finding jobs, scholarships, and courses
            so you can focus on what matters most — your growth.
          </p>

          <div className="mt-10 space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="text-blue-600 mt-1">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-12 lg:mt-0 flex justify-center">
          <div className="h-[420px] w-full max-w-md rounded-3xl border-2 border-dashed border-slate-300 bg-white shadow-sm flex items-center justify-center">
            <Image
  src="/about/d.jpg"
  alt="About KaarYab"
  width={500}
  height={500}
  className="h-auto w-full object-cover rounded-3xl"
/>
          </div>
        </div>

      </div>
    </section>
  );
}