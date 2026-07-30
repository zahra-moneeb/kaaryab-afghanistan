import { FieldError, UseFormRegister } from "react-hook-form";
import { OpportunityFormData } from "@/schemas/opportunitySchema";
import { AlertCircle, ChevronDown } from "lucide-react";

type SelectOption = {
  label: string;
  value: string;
};

type FormSelectProps = {
  label: string;
  name: keyof OpportunityFormData;

  register: UseFormRegister<OpportunityFormData>;
  error?: FieldError;

  options: SelectOption[];

  required?: boolean;
  disabled?: boolean;

  placeholder?: string;

  helperText?: string;

  className?: string;
};

export default function FormSelect({
  label,
  name,

  register,
  error,

  options,

  required = false,
  disabled = false,

  placeholder = "Select an option",

  helperText,

  className = "",
}: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 dark:text-zinc-300"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500 dark:text-red-400">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={name}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${name}-error` : helperText ? `${name}-helper` : undefined
          }
          {...register(name)}
          className={`w-full appearance-none rounded-xl border px-4 py-2.5 pr-10 text-slate-900 outline-none transition-all duration-200 dark:text-zinc-50 ${
            error
              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-500/30 dark:bg-red-500/5 dark:focus:border-red-400 dark:focus:ring-red-400/20"
              : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-white/[0.04] dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
          } ${
            disabled
              ? "cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-white/[0.02] dark:text-zinc-600"
              : "cursor-pointer"
          } ${className}`}
        >
          <option value="" className="text-slate-400 dark:bg-zinc-900">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-slate-900 dark:bg-zinc-900 dark:text-zinc-50"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className={`pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors ${
            disabled
              ? "text-slate-300 dark:text-zinc-700"
              : "text-slate-400 dark:text-zinc-500"
          }`}
        />
      </div>

      {!error && helperText && (
        <p id={`${name}-helper`} className="text-xs text-slate-500 dark:text-zinc-500">
          {helperText}
        </p>
      )}

      {error && (
        <p
          id={`${name}-error`}
          className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
        >
          <AlertCircle size={13} className="shrink-0" />
          {error.message}
        </p>
      )}
    </div>
  );
}