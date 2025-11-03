import { Home, Briefcase, TrendingUp, ShieldCheck, Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#43A047] to-[#1976D2] grid place-items-center text-white">
            <Leaf size={18} />
          </div>
          <span className="font-semibold text-lg tracking-tight">Yukti</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition"><Home size={16}/>Home</a>
          <a href="#jobs" className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition"><Briefcase size={16}/>Jobs</a>
          <a href="#trade" className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition"><TrendingUp size={16}/>Trade</a>
          <a href="#verify" className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition"><ShieldCheck size={16}/>Verify</a>
        </nav>
        <a href="#get-started" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-[#43A047] to-[#1976D2] shadow hover:opacity-95 transition">
          Get Started
        </a>
      </div>
    </header>
  );
}
