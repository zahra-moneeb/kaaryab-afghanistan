"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({
  id,
}: DeleteButtonProps) {

    const [isOpen , setIsOpen] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
          console.log("Delete clicked", id);

  try {

    const response = await fetch(
      `/api/opportunities/${id}`,
      {
        method: "DELETE",
      }
    );


    if (!response.ok) {
      throw new Error(
        "Failed to delete opportunity"
      );
    }


    router.push("/opportunities");

    router.refresh();


  } catch (error) {

    console.error(error);

  }

};


  return (
<>
    <button
      type="button"
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-red-300
        bg-white
        px-5
        py-3
        font-medium
        text-red-600
        transition-all
        hover:bg-red-50
        dark:border-red-500/30
        dark:bg-white/10
        dark:text-red-400
        dark:hover:bg-red-500/10
      "

      onClick={() => setIsOpen(true)}
    >

      <Trash2 size={18} />

      Delete

    </button>

    {/* confirmation box */}

 {isOpen && (
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="delete-dialog-title"
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm dark:bg-black/60"
    onClick={() => setIsOpen(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/50 bg-white/70 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-black/40"
    >
      {/* Soft glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-300/20 blur-3xl dark:bg-red-500/10"
      />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 dark:bg-red-400/10 dark:text-red-400">
          <AlertTriangle size={24} />
        </div>

        <h2
          id="delete-dialog-title"
          className="mt-4 text-xl font-bold text-slate-900 dark:text-zinc-50"
        >
          Delete Opportunity?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
          This action can&apos;t be undone. The opportunity will be permanently
          removed and applicants will no longer be able to view or apply to it.
        </p>

        <div className="mt-7 flex gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-200 hover:bg-white active:scale-98 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-500 hover:shadow-lg active:scale-98"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
)}
 </>  
  );
}