"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Opportunities", href: "/opporunities" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-slate-100/90 backdrop-blur-xl shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 font-semibold text-white shadow-lg shadow-green-100 dark:shadow-green-950/30">
              K
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                KaarYab
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Opportunities made simple</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 p-1 md:flex dark:border-slate-800 dark:bg-slate-800/70">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-600 text-white shadow-sm"
                      : "text-slate-700 hover:bg-green-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-green-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="/saved"
              className="rounded-full border border-slate-200 bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 dark:border-slate-700"
            >
              Saved
            </Link>
            <Link
              href="/add-opportunity"
              className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700 dark:shadow-green-950/30"
            >
              Post Opportunity
            </Link>
          </div>

          <Button
            variant="secondary"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 bg-white px-2 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-green-600 text-white"
                        : "text-slate-700 hover:bg-green-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-green-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                <Link
                  href="/saved"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-green-600 px-3 py-2 text-center text-sm font-medium text-white"
                >
                  Saved
                </Link>
                <Link
                  href="/add-opportunity"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Post Opportunity
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}