"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-extrabold text-primary">
              Pro To-Do App
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
