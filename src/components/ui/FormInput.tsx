import { FieldError, UseFormRegister } from "react-hook-form";
import { OpportunityFormData } from "@/schemas/opportunitySchema";
import { AlertCircle } from "lucide-react";

type FormInputProps = {
  label: string;
  name: keyof OpportunityFormData;
  register: UseFormRegister<OpportunityFormData>;
  error?: FieldError;

  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;

  required?: boolean;
  disabled?: boolean;
  helperText?: string;

  className?: string;
};

export default function FormInput({
  label,
  name,
  register,
  error,

  type = "text",
  placeholder = "",

  required = false,
  disabled = false,

  helperText,
  className = "",
}: FormInputProps) {
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

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${name}-error` : helperText ? `${name}-helper` : undefined
        }
        {...register(name)}
        className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 dark:text-zinc-50 dark:placeholder:text-zinc-600 ${
          error
            ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-500/30 dark:bg-red-500/5 dark:focus:border-red-400 dark:focus:ring-red-400/20"
            : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-white/[0.04] dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
        } ${
          disabled
            ? "cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-white/[0.02] dark:text-zinc-600"
            : ""
        } ${className}`}
      />

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