import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  type,
  ...props
}: ButtonProps) {
  // Smooth micro-interactions and focus rings that adapt to dark mode
  const baseStyle =
    "px-5 py-2.5 rounded-xl font-semibold tracking-wide text-sm transition-all duration-200 ease-in-out transform active:scale-98 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 antialiased shadow-sm";

  const variants = {
    // Primary: Vibrant electric indigo gradient in light mode; higher contrast vivid purple glow in dark mode
    primary:
      "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-indigo-200/50 hover:shadow-md focus:ring-indigo-500 dark:from-violet-500 dark:to-purple-500 dark:hover:from-violet-400 dark:hover:to-purple-400 dark:focus:ring-violet-400 dark:shadow-none",

    // Secondary: Soft gray/slate in light mode; subtle translucent glassmorphism in dark mode
    secondary:
      "bg-zinc-100 text-zinc-800 hover:bg-zinc-200/80 border border-zinc-200/50 focus:ring-zinc-400 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:border-zinc-800 dark:focus:ring-zinc-700",
  };

  return (
    <button
      {...props}
      type={type ?? "button"}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}