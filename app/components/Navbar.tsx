"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { JSX } from "react";
import Image from "next/image";

export default function Navbar(): JSX.Element {
  const { data: session } = useSession();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/20 shadow-sm">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-center md:justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-extrabold text-primary text-center">
              Pro To-Do App
            </span>
          </Link>
          {session ? (
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high ml-2 border-2 border-white">
                <Image
                  src="/homepage/user.png"
                  width={100} // Explicit width in pixels
                  height={24}
                  alt="User profile avatar"
                  className="w-full h-full object-cover"
                  data-alt="Professional portrait of a male executive in a studio setting with clean, soft directional lighting and neutral background"
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
        </div>
      </div>
    </nav>
  );
}
