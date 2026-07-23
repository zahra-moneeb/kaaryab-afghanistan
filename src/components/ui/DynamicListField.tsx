import {
  Control,
  UseFormRegister,
  FieldErrors
} from "react-hook-form";

import { useState } from "react";

import {
  useFieldArray
} from "react-hook-form";


import {
  OpportunityFormData
} from "@/schemas/opportunitySchema";

type DynamicListFieldProps = {

  name:
  "requirements" | "benefits";


  label: string;


  control: Control<OpportunityFormData>;


  register:
  UseFormRegister<OpportunityFormData>;


  errors?: FieldErrors<OpportunityFormData>;

};

export default function DynamicListField({

 name,
 label,
 control,
 register,
 errors,

}: DynamicListFieldProps) {

const {
    fields,
    append,
    remove,
  } = useFieldArray({ control, name, });

  

const [inputValue, setInputValue] = useState("");

const handleAdd = () => {

  if (!inputValue.trim()) return;


  append({
    value: inputValue,
  });


  setInputValue("");

};
const error =
  errors?.[name];

return (
  <div className="space-y-4">

    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
      {label}
    </label>


    <div className="flex gap-2">

      <input
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
        placeholder={`Add ${label}`}
        className="
          flex-1 rounded-lg border px-4 py-2
          border-gray-300
          dark:bg-gray-900
          dark:text-white
        "
      />


      <button
        type="button"
        onClick={handleAdd}
        className="
          rounded-lg
          bg-blue-600
          px-4
          text-white
        "
      >
        Add
      </button>

    </div>


    <div className="space-y-2">

{fields.map((field, index) => (

  <div
    key={field.id}
    className="
      flex items-center gap-2
      rounded-lg border px-3 py-2
    "
  >

    <input
      {...register(
        `${name}.${index}.value` as const
      )}

      defaultValue={field.value}

      className="
        flex-1 rounded-md border px-3 py-1
        dark:bg-gray-900
        dark:text-white
      "
    />


    <button
      type="button"
      onClick={() => remove(index)}

      className="
        text-red-500
      "
    >
      Remove
    </button>


  </div>

))}

    </div>


    {error && (
      <p className="text-sm text-red-500">
        {error.message as string}
      </p>
    )}

  </div>
);


}