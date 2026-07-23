import { FieldError, UseFormRegister } from "react-hook-form";
import { OpportunityFormData } from "@/schemas/opportunitySchema";

type FormTextareaProps = {
  label: string;
  name: keyof OpportunityFormData;

  register: UseFormRegister<OpportunityFormData>;
  error?: FieldError;

  placeholder?: string;

  required?: boolean;
  disabled?: boolean;

  rows?: number;
  helperText?: string;

  className?: string;
};

export default function FormTextarea({
  label,
  name,
  register,
  error,

  placeholder = "",

  required = false,
  disabled = false,

  rows = 5,
  helperText,

  className = "",
}: FormTextareaProps) {
  return (
    <div className="space-y-2">

      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>


      <textarea
        id={name}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}

        {...register(name)}

        className={`
          w-full rounded-lg border px-4 py-2
          outline-none transition-colors
          resize-none

          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }

          ${
            disabled
              ? "bg-gray-100 cursor-not-allowed dark:bg-gray-800"
              : "bg-white dark:bg-gray-900"
          }

          text-gray-900 dark:text-white

          ${className}
        `}
      />


      {!error && helperText && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}


      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}