"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
    "
  >

    <div
      className="
        rounded-2xl
        bg-white
        p-8
        shadow-xl
        dark:bg-zinc-900
      "
    >

      <h2 className="text-xl font-bold">
        Delete Opportunity?
      </h2>


      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Are you sure you want to delete this opportunity?
      </p>


      <div className="mt-6 flex gap-3">


        <button
          onClick={() => setIsOpen(false)}
          className="
            rounded-lg
            border
            px-4
            py-2
          "
        >
          Cancel
        </button>


        <button
        onClick= { handleDelete}
          className="
            rounded-lg
            bg-red-600
            px-4
            py-2
            text-white
          "
        >
          Delete
        </button>


      </div>


    </div>

  </div>

)}
 </>  
  );
}