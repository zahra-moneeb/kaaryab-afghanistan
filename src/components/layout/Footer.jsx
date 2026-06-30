import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              KaarYab
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              A modern platform for jobs, internships, and learning opportunities for Afghan youth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Quick Links</h3>
            <div className="flex flex-col gap-2 text-slate-600 dark:text-slate-300">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link href="/jobs" className="hover:text-blue-600 dark:hover:text-blue-400">
                Jobs
              </Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Contact</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Email: support@kaaryab.com
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Phone: +93 700 000 000
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} KaarYab. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}