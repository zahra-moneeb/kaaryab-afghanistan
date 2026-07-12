"use client";

import { useState } from "react";

export default function OpportunityForm() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    type: "job",
    location: "",
    description: "",
    deadline: "",
    applyLink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Opportunity Data:", form);
    // بعداً API اینجا وصل می‌شود
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">

        <h2 className="text-3xl font-bold text-slate-900">
          Add New Opportunity
        </h2>

        <p className="mt-4 text-slate-600">
          Create jobs, scholarships, courses or internships for users.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">

          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          >
            <option value="job">Job</option>
            <option value="scholarship">Scholarship</option>
            <option value="course">Course</option>
            <option value="internship">Internship</option>
          </select>

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
            rows={5}
          />

          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            name="applyLink"
            placeholder="Apply Link"
            value={form.applyLink}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Create Opportunity
          </button>

        </form>
      </div>
    </section>
  );
}