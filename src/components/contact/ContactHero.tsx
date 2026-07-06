import { MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          <MessageCircle size={18} />
          Contact Us
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            We had Love to Hear From You
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have questions about jobs, scholarships, courses, or training
            opportunities? Our team is here to help you and answer your
            questions.
          </p>
        </div>
      </div>
    </section>
  );
}