import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-16 text-center shadow-xl">

          {/* Background glow effect */}
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Ready to Explore Opportunities?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join KaarYab today and discover jobs, scholarships, training
              programs, and courses that can shape your future.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              <Link
                href="/jobs"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:scale-105 hover:bg-blue-50"
              >
                Browse Opportunities
              </Link>

              <Link
                href="/register"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
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