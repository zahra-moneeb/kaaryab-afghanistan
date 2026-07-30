"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Briefcase,
  Bookmark,
  FilePlus2,
  FolderKanban,
  UserCircle,
  SlidersHorizontal,
  LucideIcon,
} from "lucide-react";


type NavItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
};


function NavItem({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-indigo-50 text-indigo-700 dark:bg-violet-500/10 dark:text-violet-300"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-100"
      }`}
    >
      <span
        className={`absolute left-0 h-5 w-1 rounded-r-full bg-gradient-to-b from-indigo-600 to-violet-600 transition-opacity duration-200 dark:from-violet-400 dark:to-purple-400 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <Icon
        className={`h-5 w-5 ${
          isActive
            ? "text-indigo-600 dark:text-violet-400"
            : "text-slate-400 group-hover:text-slate-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
        }`}
      />

      <span>{label}</span>
    </Link>
  );
}


export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");


  const closeSidebar = () => {
    setOpen(false);
  };


  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        className="fixed left-4 top-20 z-50 rounded-lg bg-white p-2 shadow-md dark:bg-zinc-900 lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>


      {/* Backdrop */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}


      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          border-r border-slate-200
          bg-white
          transition-transform duration-300
          dark:border-white/10 dark:bg-zinc-950

          lg:static lg:translate-x-0

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Close button mobile */}
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>


        <nav className="px-4 py-6">


          <div className="mb-6">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-600">
              Main
            </p>

            <div className="space-y-1">

              <NavItem
                href="/dashboard"
                label="Dashboard"
                icon={LayoutDashboard}
                isActive={isActive("/dashboard")}
                onClick={closeSidebar}
              />

              <NavItem
                href="/opportunities"
                label="Opportunities"
                icon={Briefcase}
                isActive={isActive("/opportunities")}
                onClick={closeSidebar}
              />

              <NavItem
                href="/saved"
                label="Saved Opportunities"
                icon={Bookmark}
                isActive={isActive("/saved")}
                onClick={closeSidebar}
              />

            </div>
          </div>



          <div className="mb-6">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-600">
              Manage
            </p>

            <div className="space-y-1">

              <NavItem
                href="/add-opportunity"
                label="Add Opportunity"
                icon={FilePlus2}
                isActive={isActive("/add-opportunity")}
                onClick={closeSidebar}
              />


              <NavItem
                href="/my-opportunities"
                label="My Opportunities"
                icon={FolderKanban}
                isActive={isActive("/my-opportunities")}
                onClick={closeSidebar}
              />

            </div>
          </div>



          <div>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-600">
              Account
            </p>

            <div className="space-y-1">

              <NavItem
                href="/profile"
                label="Profile"
                icon={UserCircle}
                isActive={isActive("/profile")}
                onClick={closeSidebar}
              />


              <NavItem
                href="/settings"
                label="Settings"
                icon={SlidersHorizontal}
                isActive={isActive("/settings")}
                onClick={closeSidebar}
              />

            </div>
          </div>


        </nav>

      </aside>
    </>
  );
}