import { Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "support@kaaryab.af",
    description: "Send us your questions anytime.",
    icon: Mail,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Phone",
    value: "+93 700 000 000",
    description: "Available during business hours.",
    icon: Phone,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Office",
    value: "Kabul, Afghanistan",
    description: "Our main office location.",
    icon: MapPin,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Information
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you have questions about opportunities, partnerships, or
            technical support, we are here to help.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <div
                key={contact.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${contact.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {contact.title}
                </h3>

                <p className="mt-3 font-medium text-slate-700">
                  {contact.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {contact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}