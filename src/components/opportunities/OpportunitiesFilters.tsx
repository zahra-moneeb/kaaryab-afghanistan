export default function OpportunitiesFilters() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <div className="flex flex-wrap gap-3">

        <button className="rounded-full bg-blue-600 px-4 py-2 text-white">
          All
        </button>

        <button className="rounded-full border px-4 py-2">
          Jobs
        </button>

        <button className="rounded-full border px-4 py-2">
          Scholarships
        </button>

        <button className="rounded-full border px-4 py-2">
          Courses
        </button>

        <button className="rounded-full border px-4 py-2">
          Internships
        </button>

      </div>
    </div>
  );
}