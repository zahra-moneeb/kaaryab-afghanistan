import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "support@kaaryab.af",
    description: "Send us your questions anytime.",
    icon: Mail,
    iconColor: "text-blue-600 dark:text-blue-300",
    iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
    href: "mailto:support@kaaryab.af",
  },
  {
    title: "Phone",
    value: "+93 700 000 000",
    description: "Available during business hours.",
    icon: Phone,
    iconColor: "text-emerald-600 dark:text-emerald-300",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    href: "tel:+93700000000",
  },
  {
    title: "Office",
    value: "Kabul, Afghanistan",
    description: "Our main office location.",
    icon: MapPin,
    iconColor: "text-amber-600 dark:text-amber-300",
    iconBg: "bg-amber-500/10 dark:bg-amber-400/10",
    href: "https://maps.google.com/?q=Kabul,Afghanistan",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-zinc-950">
      {/* Atmospheric background — smoky blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-600/15" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-600/15" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
            Contact Information
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-zinc-300">
            Whether you have questions about opportunities, partnerships, or
            technical support, we are here to help.
          </p>
        </div>

        {/* Unified glass panel with horizontal rows */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/50 bg-white/40 shadow-lg shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const isLast = index === contacts.length - 1;

            return (
              <a
                key={contact.title}
                href={contact.href}
                className={
                  "group flex items-center gap-5 p-6 transition-colors duration-200 hover:bg-white/40 dark:hover:bg-white/[0.06] sm:p-8 " +
                  (isLast ? "" : "border-b border-white/50 dark:border-white/10")
                }
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl backdrop-blur-sm ${contact.iconBg}`}
                >
                  <Icon size={26} className={contact.iconColor} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-zinc-500">
                      {contact.title}
                    </h3>
                    <p className="font-semibold text-slate-900 dark:text-zinc-50">
                      {contact.value}
                    </p>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                    {contact.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-slate-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:text-zinc-600 dark:group-hover:text-violet-400"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}