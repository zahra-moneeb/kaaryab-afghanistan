"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Something went wrong
        </h2>

        <p className="mt-2 text-slate-600 dark:text-zinc-400">
          Failed to load dashboard data.
        </p>

        <button
          onClick={() => reset()}
          className="mt-5 rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
        >
          Try again
        </button>

      </div>
    </div>
  );
}