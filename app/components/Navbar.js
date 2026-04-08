"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/20 shadow-sm">
      {/* Added px-6 for mobile padding and items-center for centering */}
      <div className="max-w-7xl mx-auto py-4">
        {/* justify-between works well on desktop, but on mobile we ensure it's centered if only one item exists */}
        <div className="flex items-center justify-center md:justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-extrabold text-primary text-center">
              Pro To-Do App
            </span>
          </Link>
          {session ? (
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high ml-2 border-2 border-white">
                <img
                  alt="User profile avatar"
                  className="w-full h-full object-cover"
                  data-alt="Professional portrait of a male executive in a studio setting with clean, soft directional lighting and neutral background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL459lsUGMM2TVz2LjkXDQng2EVa1thpvNuhgM8nqv5WJ3DfCcT7CSJF0JREKihPebMTl47O1YWNh-0DvaR38w6j1djkQ55g9SgRWMidxFV2zLaihn2Ib5c6vK3JhcMbI_jevK7DS7Jc0Zv4mWATOksJ3VB442yCyerpTlGZpaM4UW2k81d_WfalJAv_0R1HRFTJ26k2ANVee1_NShH9tyXJ6UP6ZV3B5Objbd4URv8jOi-ZwvQinnQu4DHaPzmXyIy7KYHdFD65MK"
                />
              </div>
              <span className="text-on-surface uppercase font-headline hidden md:inline">
                {session.user.name}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="font-medium text-white bg-primary-container py-2 px-2.5 rounded-lg  hover:opacity-90 transition-opacity cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="font-medium text-on-surface hover:text-primary transition-colors cursor-pointer"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-primary text-on-primary font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Register
              </Link>
            </div>
          )}
          {/* If you add menu items later, they will appear on the right on desktop thanks to md:justify-between */}
        </div>
      </div>
    </nav>
  );
}
