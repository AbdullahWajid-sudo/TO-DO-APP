import { JSX } from "react";
import Image from "next/image";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12 px-8  font-manrope text-sm tracking-tight font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:items-start items-center gap-2">
          <div className="text-lg font-black tracking-tighter text-slate-900 dark:text-slate-100">
            Pro To-Do App
          </div>

          <span className="text-slate-500 dark:text-slate-400">
            © 2026 Pro To-Do App. Designed for the Editorial Mind.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400  duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Support Center
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Community
          </a>
        </nav>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
