import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pro To-Do App",
  description: "Task management application",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // This connects to Tailwind
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body bg-background text-on-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
