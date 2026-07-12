import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 px-8 py-20 text-center shadow-xl shadow-indigo-200/50 dark:from-violet-600 dark:via-purple-600 dark:to-purple-700 dark:shadow-none">
          {/* Subtle grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
          />

          {/* Background glow effects */}
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Free for job seekers and students
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to Explore Opportunities?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100 dark:text-violet-100">
              Join KaarYab today and discover jobs, scholarships, training
              programs, and courses that can shape your future.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/jobs"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold !text-indigo-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:!text-indigo-800 active:scale-98"
              >
                Browse Opportunities
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/register"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-98"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}