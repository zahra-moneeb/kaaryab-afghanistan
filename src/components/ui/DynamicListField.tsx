import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { Plus, X, AlertCircle, ListPlus } from "lucide-react";

import { OpportunityFormData } from "@/schemas/opportunitySchema";

type DynamicListFieldProps = {
  name: "requirements" | "benefits";
  label: string;
  control: Control<OpportunityFormData>;
  register: UseFormRegister<OpportunityFormData>;
  errors?: FieldErrors<OpportunityFormData>;
};

export default function DynamicListField({
  name,
  label,
  control,
  register,
  errors,
}: DynamicListFieldProps) {
  const { fields, append, remove } = useFieldArray({ control, name });

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (!inputValue.trim()) return;

    append({ value: inputValue.trim() });
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const error = errors?.[name];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300">
        {label}
      </label>

      {/* Add row */}
      <div className="flex gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Add ${label.toLowerCase()}`}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-50 dark:placeholder:text-zinc-600 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
        />

        <button
          type="button"
          onClick={handleAdd}
          disabled={!inputValue.trim()}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 active:scale-98 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:from-indigo-600 disabled:hover:to-violet-600 dark:from-violet-500 dark:to-purple-500 dark:hover:from-violet-400 dark:hover:to-purple-400"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* List */}
      {fields.length > 0 ? (
        <div className="space-y-2">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition-colors focus-within:border-indigo-300 focus-within:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:focus-within:border-violet-400/40 dark:focus-within:bg-white/[0.06]"
            >
              <span className="shrink-0 text-xs font-mono text-slate-400 dark:text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <input
                {...register(`${name}.${index}.value` as const)}
                defaultValue={field.value}
                className="flex-1 bg-transparent px-1 py-1 text-sm text-slate-900 outline-none dark:text-zinc-50"
              />

              <button
                type="button"
                onClick={() => remove(index)}
                aria-label={`Remove item ${index + 1}`}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 opacity-0 transition-all duration-150 hover:bg-red-50 hover:text-red-500 group-hover:opacity-100 group-focus-within:opacity-100 dark:text-zinc-500 dark:hover:bg-red-500/10 dark:hover:text-red-400"
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-slate-200 py-6 text-center dark:border-white/10">
          <ListPlus size={20} className="text-slate-300 dark:text-zinc-700" />
          <p className="text-sm text-slate-400 dark:text-zinc-600">
            No items added yet
          </p>
        </div>
      )}

      {error && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400">
          <AlertCircle size={13} className="shrink-0" />
          {error.message as string}
        </p>
      )}
    </div>
  );
}