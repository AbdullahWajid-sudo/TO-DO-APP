import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthProvider from "./components/AuthProvider";
import Footer from "./components/Footer";
import { ReactNode, JSX } from "react";
import type { Metadata } from "next";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Pro To-Do App",
  description: "Task management application",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body bg-background text-on-background">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
