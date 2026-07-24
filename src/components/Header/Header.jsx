"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { logoDark } from "@/require";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-navbar border-b border-border-divider transition-all duration-300">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-[8px]">
            <Image
              src={logoDark}
              alt="adeogram Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight text-text-footer transition-colors duration-200">
            adeogram
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
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
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors duration-200 ${
              isAbout
                ? "text-primary-green"
                : "text-text-footer-secondary hover:text-text-footer"
            }`}
          >
            About Us
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
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
