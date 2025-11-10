import { Menu, ShieldCheck, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/20" />
            <span className="text-white font-semibold tracking-tight">HoloAuth</span>
            <span className="ml-2 inline-flex items-center gap-1 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              SOC2-ready
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#product" className="hover:text-white transition">Product</a>
            <a href="#code" className="hover:text-white transition">Docs</a>
            <a href="#trust" className="hover:text-white transition">Security</a>
            <a href="#waitlist" className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white transition border border-white/10">Join waitlist</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
          </nav>

          <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/80 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 text-sm text-white/80 space-y-2">
            <a href="#product" className="block py-2">Product</a>
            <a href="#code" className="block py-2">Docs</a>
            <a href="#trust" className="block py-2">Security</a>
            <a href="#waitlist" className="block py-2 rounded-md px-3 bg-white/10 border border-white/10 text-white">Join waitlist</a>
          </div>
        )}
      </div>
    </header>
  );
}
