import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Form
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Send Us a Message
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Fill out the form below and our team will get back to you as soon
            as possible.
          </p>

          <form className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/contact/contact.jpg"
              alt="Contact KaarYab"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}