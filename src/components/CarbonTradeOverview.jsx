import React from 'react';
import { TrendingUp } from 'lucide-react';

const projects = [
  { name: 'Rooftop Solar Yojana', credits: 420, saved: 1300 },
  { name: 'Smart Irrigation', credits: 280, saved: 740 },
  { name: 'Urban Composting', credits: 195, saved: 520 },
];

export default function CarbonTradeOverview() {
  const totalCredits = projects.reduce((a, p) => a + p.credits, 0);
  const totalSaved = projects.reduce((a, p) => a + p.saved, 0);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Carbon Credit & Trade Center</h2>
            <p className="mt-1 text-white/70">Track earnings, savings, and peer-to-peer trades with confidence</p>
          </div>
          <button className="hidden sm:inline-flex rounded-xl bg-white text-[#0b1f3a] px-4 py-2 font-semibold hover:bg-white/90">
            Start Trading
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/70 text-sm">Total Credits</p>
            <p className="mt-2 text-3xl font-extrabold">{totalCredits.toLocaleString()} CC</p>
            <div className="mt-4 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-[#43A047] to-[#1976D2]" style={{ width: '78%' }} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/70 text-sm">Carbon Saved</p>
            <p className="mt-2 text-3xl font-extrabold">{totalSaved.toLocaleString()} tCO₂e</p>
            <div className="mt-4 space-y-3">
              {projects.map((p) => (
                <div key={p.name} className="">
                  <div className="flex justify-between text-xs text-white/70">
                    <span>{p.name}</span>
                    <span>{p.saved} t</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-emerald-400" style={{ width: Math.min(100, (p.saved / (totalSaved || 1)) * 100) + '%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Trending Opportunities</p>
                <p className="mt-2 text-xl font-semibold">High-Impact Projects</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {projects.map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 border border-white/10">
                  <span className="text-sm">{p.name}</span>
                  <span className="text-xs text-white/70">{p.credits} credits</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#43A047] to-[#1976D2] px-4 py-2.5 font-medium hover:opacity-90">
              Verify & Earn
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
