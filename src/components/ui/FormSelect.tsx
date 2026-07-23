import { FieldError, UseFormRegister } from "react-hook-form";
import { OpportunityFormData } from "@/schemas/opportunitySchema";

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
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >

        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}

      </label>



      <select
        id={name}

        disabled={disabled}

        {...register(name)}

        className={`
          w-full rounded-lg border px-4 py-2
          outline-none transition-colors

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
      >


        <option value="">
          {placeholder}
        </option>


        {options.map((option) => (

          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>

        ))}


      </select>



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