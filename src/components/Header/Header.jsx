"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { logoDark } from "@/require";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-navbar border-b border-border-divider transition-all duration-300">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5 group">
          
          <div className="text-xl font-bold tracking-tight text-text-footer transition-colors duration-200">
            QrCodey
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-200 ${
              isHome
                ? "text-primary-green"
                : "text-text-footer-secondary hover:text-text-footer"
            }`}
          >
            Home
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-text-footer-secondary hover:text-text-footer transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
