import React from 'react';
import { TrendingUp, ArrowRightLeft, LineChart } from 'lucide-react';

export default function TradeCenter() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <TrendingUp className="h-5 w-5" /> Carbon Credit & Trade Center
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card title="Total Credits" value="1,240 CC" subtitle="Portfolio value" />
        <Card title="Available to Trade" value="380 CC" subtitle="Unstaked" />
        <Card title="This Month" value="+120 CC" subtitle="Earnings" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-white/80">
              <LineChart className="h-5 w-5" />
              Market Overview
            </div>
            <select className="bg-white/10 border border-white/10 rounded-md px-2 py-1 text-sm">
              <option>30 days</option>
              <option>90 days</option>
              <option>1 year</option>
            </select>
          </div>
          <div className="h-56 rounded-xl bg-gradient-to-br from-[#1976D2]/20 to-[#43A047]/20 border border-white/10 grid place-items-center text-white/60">
            Interactive chart coming soon
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
          <div className="flex items-center gap-2 text-white/80">
            <ArrowRightLeft className="h-5 w-5" /> Quick Trade
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <label className="block text-white/70 mb-1">Amount (CC)</label>
              <input type="number" defaultValue={50} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none" />
            </div>
            <div>
              <label className="block text-white/70 mb-1">Action</label>
              <select className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2">
                <option>Sell Credits</option>
                <option>Buy Credits</option>
              </select>
            </div>
            <button className="w-full rounded-full bg-gradient-to-r from-[#43A047] to-[#1976D2] px-4 py-2 text-sm font-medium shadow">Execute</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="text-xs text-white/60">{subtitle}</div>
    </div>
  );
}
