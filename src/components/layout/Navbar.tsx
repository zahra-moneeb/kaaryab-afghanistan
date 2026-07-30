"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bookmark, LayoutDashboard, PlusCircle } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 font-bold text-white shadow-lg shadow-indigo-200/50 dark:from-violet-500 dark:to-purple-500 dark:shadow-none">
              K
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-zinc-50">
                KaarYab
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-500">
                Opportunities made simple
              </p>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 md:flex dark:border-white/10 dark:bg-white/5">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm dark:from-violet-500 dark:to-purple-500"
                      : "text-slate-600 hover:bg-white hover:text-indigo-700 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-violet-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <Link
              href="/saved"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-zinc-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
            >
              <Bookmark size={15} />
              Saved
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-zinc-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
            >
              <LayoutDashboard size={15} />
              Dashboard
            </Link>

            <Link
              href="/add-opportunity"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-md active:scale-98 dark:from-violet-500 dark:to-purple-500 dark:hover:from-violet-400 dark:hover:to-purple-400"
            >
              <PlusCircle size={15} />
              Post Opportunity
            </Link>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="secondary"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white px-2 py-4 dark:border-white/10 dark:bg-zinc-950 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white dark:from-violet-500 dark:to-purple-500"
                        : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 dark:text-zinc-400 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3 dark:border-white/10">
                <Link
                  href="/saved"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-zinc-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                >
                  <Bookmark size={16} />
                  Saved
                </Link>

                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-zinc-300 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>

                <Link
                  href="/add-opportunity"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-2.5 text-sm font-semibold text-white transition-all duration-200 active:scale-98 dark:from-violet-500 dark:to-purple-500"
                >
                  <PlusCircle size={16} />
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