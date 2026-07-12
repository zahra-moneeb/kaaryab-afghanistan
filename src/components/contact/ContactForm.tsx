import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-zinc-950">
      {/* Atmospheric background — smoky blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl dark:bg-purple-700/20" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
            Contact Form
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Send Us a Message
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-700 dark:text-zinc-300">
            Fill out the form below and our team will get back to you as soon
            as possible.
          </p>
        </div>

        {/* Glow behind the glass panel */}
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl dark:from-violet-500/15 dark:to-purple-500/15"
          />

          {/* Glass form panel */}
          <div className="relative rounded-3xl border border-white/40 bg-white/20 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:p-10 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/50">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-zinc-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none backdrop-blur-md transition focus:border-indigo-500 focus:bg-white/50 focus:ring-2 focus:ring-indigo-300/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:bg-white/[0.08] dark:focus:ring-violet-400/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none backdrop-blur-md transition focus:border-indigo-500 focus:bg-white/50 focus:ring-2 focus:ring-indigo-300/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:bg-white/[0.08] dark:focus:ring-violet-400/30"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-zinc-300">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none backdrop-blur-md transition focus:border-indigo-500 focus:bg-white/50 focus:ring-2 focus:ring-indigo-300/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:bg-white/[0.08] dark:focus:ring-violet-400/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none backdrop-blur-md transition focus:border-indigo-500 focus:bg-white/50 focus:ring-2 focus:ring-indigo-300/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:bg-white/[0.08] dark:focus:ring-violet-400/30"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}