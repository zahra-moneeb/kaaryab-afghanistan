import { MessageCircle, Mail, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-zinc-950">
      {/* Atmospheric background — smoky blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl dark:bg-purple-700/20" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-violet-300">
          <MessageCircle size={16} />
          Contact Us
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl dark:text-zinc-50">
            We&apos;d Love to Hear
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
              From You
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-zinc-300">
            Have questions about jobs, scholarships, courses, or training
            opportunities? Our team is here to help you and answer your
            questions.
          </p>
        </div>

        {/* Quick-contact glass panel — signature element */}
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-white/50 bg-white/40 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl sm:flex-row sm:gap-10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-600/10 p-2.5 dark:bg-violet-400/10">
              <Mail size={20} className="text-indigo-700 dark:text-violet-300" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-zinc-500">Email us</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-50">
                support@kaaryab.com
              </p>
            </div>
          </div>

          <div className="hidden w-px bg-white/60 sm:block dark:bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-600/10 p-2.5 dark:bg-violet-400/10">
              <Clock size={20} className="text-indigo-700 dark:text-violet-300" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-zinc-500">Response time</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-50">
                Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}