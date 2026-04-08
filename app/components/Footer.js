export default function Footer() {
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
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transition-opacity active:opacity-70"
            href="#"
          >
            Support Center
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transition-opacity active:opacity-70"
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

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center">
        <div className="flex items-center gap-2 opacity-50 grayscale">
          <img
            alt="Trusted Partner"
            className="h-6"
            data-alt="minimalist line art logo of a geometric construction company in muted grey tones for a professional trust indicator"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa4VF-37-YZgDvubNmAf2KDnAuMwm6W6V-AFyKyfV9Ufgc8l1A9idMVAlRjfwTX1E9Rd7OtT3zu-8BVIC93h3vGeCSrajaG7gkzIWTF0YrDvKtzYiSKyzsGpKxPybCgrIb0t14LGVA3-GbHWOCgeP69ZLtfON_YaTpzW-qAuoXgs4MNK7UEHFkALzPwCajx_p6gs-t_3dL0P2A1rgOrRf0UUGoNmSF6NWzgDLUnOmI_Qh7DemAVPKQYnDkY_Qk94oz32dQ1-EOSe1y"
          />
          <img
            alt="Trusted Partner"
            className="h-6"
            data-alt="abstract architectural firm logo featuring intersecting lines and sharp angles in a sophisticated monochrome palette"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj-Lm6k_HlEc3mP7Usn3HwIysNavyTnDgIWBnyg1nhKQusYb1HWfy6jc6kJOiBO7IjbN23D-747ToX5sLaoW-8ua0GtWAH4zSANDkTCLgu7BBhDtXgMYG7K9qdzxKDu9-2Yth4uUbdd96Ui9Okz_sl-wkJ2Hk_rh4OZ1BiExRzyL62e2B6eghPcBkq9f2hw9wkneGL6JikIWBUJVw7nc9M_2nwgWQpfKushQ331J6xlXsYFbMkB8ywH-HBTVRjYTV-TY9o4a-wHk6G"
          />
        </div>
      </div>
    </footer>
  );
}
