export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <div className="h-8 w-48 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
          <div className="mt-3 h-4 w-80 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1,2,3,4].map((item) => (
            <div
              key={item}
              className="h-32 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/10"
            />
          ))}
        </div>


        <div className="mt-8 h-80 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/10" />

      </div>
    </main>
  );
}