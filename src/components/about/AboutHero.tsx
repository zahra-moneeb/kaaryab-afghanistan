import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
        {/* Left Side */}
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <BriefcaseBusiness size={18} />
            About KaarYab
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Connecting Afghan Talent
            <span className="block text-blue-600">
              With Meaningful Opportunities
            </span>
          </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            KaarYab is a platform that connects people across Afghanistan with jobs,
            scholarships, training programs, and educational opportunities, while
            helping organizations discover talented and motivated individuals.
         </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center">
          <div className="flex h-80 w-full max-w-md items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm">
            <Image
  src="/about/c.jpg"
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