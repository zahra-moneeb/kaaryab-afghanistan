"use client";

interface SearchFilterProps {
  search: string;
  type: string;
  location: string;

  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

export default function OpportunitiesFilters({
  search,
  type,
  location,
  onSearchChange,
  onTypeChange,
  onLocationChange,
}: SearchFilterProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search opportunities..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          outline-none
          focus:border-blue-600
          "
        />

        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          "
        >
          <option value="">All Types</option>
          <option value="Job">Job</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Course">Course</option>
          <option value="Training">Training</option>
        </select>

        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          outline-none
          focus:border-blue-600
          "
        />
      </div>
    </section>
  );
}