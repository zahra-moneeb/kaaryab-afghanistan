"use client";

import {Moon , Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="secondary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}