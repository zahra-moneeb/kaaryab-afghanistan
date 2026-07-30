import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-50 p-8 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}