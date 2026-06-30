import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemProvider";
import { ReactNode } from "react";

export const metadata = {
  title: "KaarYab Afghanistan",
  description:
    "A modern platform for discovering jobs, scholarships, internships, and learning opportunities for Afghan youth.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-slate-50 dark:bg-slate-950">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}