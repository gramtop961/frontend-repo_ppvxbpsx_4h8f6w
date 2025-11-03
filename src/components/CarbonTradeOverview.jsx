import { TrendingUp, LineChart, ShieldCheck } from 'lucide-react';

export default function CarbonTradeOverview() {
  return (
    <section id="trade" className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Carbon Trade Overview</h2>
          <a href="#trade" className="text-sm text-[#1976D2] hover:underline">Go to Trade Center</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700"><ShieldCheck size={18}/> Verified Credits</div>
            <div className="mt-3 text-3xl font-bold">1,240</div>
            <p className="text-sm text-slate-600 mt-1">Across 18 projects</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700"><TrendingUp size={18}/> Market Price</div>
            <div className="mt-3 text-3xl font-bold">₹1,120<span className="text-base font-semibold text-emerald-600"> +3.4%</span></div>
            <p className="text-sm text-slate-600 mt-1">24h change</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-black/5 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-slate-700"><LineChart size={18}/> Performance</div>
            <div className="mt-4 h-20 w-full bg-gradient-to-r from-emerald-100 via-sky-100 to-indigo-100 rounded-xl overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400/60 to-sky-400/60" />
            </div>
            <p className="text-sm text-slate-600 mt-2">Portfolio coverage 67%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
