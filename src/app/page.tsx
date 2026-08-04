import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import OpportunitiesGrid from "@/components/opportunities/OpportunitiesGrid";
import { MapPin } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Kabul",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Herat",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "CodeCraft",
    location: "Remote",
  },
];

const categories = [
  "All Categories",
  "Software Engineering",
  "Design",
  "Marketing",
  "Data",
  "Education",
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.58),rgba(15,23,42,0.72)),url('/job.jpg')] bg-cover bg-center bg-no-repeat" />

      <div className="relative z-10">
        {/* HERO */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center shadow-2xl backdrop-blur-md md:px-12">
              <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold tracking-[0.2em] text-slate-100 uppercase">
                Career opportunities
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Find Your Dream Job
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 md:text-lg">
                Discover jobs, internships and opportunities tailored for your next big career move.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="primary" className="min-w-44">
                  Explore Jobs
                </Button>
                <Button variant="secondary" className="min-w-44 bg-white/10 text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      index === 0
                        ? "bg-white text-slate-900"
                        : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURED JOBS */}
        <section className="px-4 pb-16 pt-4 md:px-0">
          <Container>
<div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row md:text-left">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-sky-300 uppercase">
                    Featured roles
                  </p>
                  <h2 className="text-3xl font-bold text-white">
                    Featured Jobs
                  </h2>
                </div>

             
            </div>
        <OpportunitiesGrid
          featuredOnly
          limit={3}
        />
 
          </Container>
        </section>
      </div>
    </div>
  );
}