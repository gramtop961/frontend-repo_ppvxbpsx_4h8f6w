import React from 'react';
import { User, Award, Leaf, TrendingUp } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column: Profile card */}
        <div className="lg:col-span-1 rounded-2xl bg-white/5 border border-white/10 p-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#43A047] to-[#1976D2] grid place-items-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Aarav Sharma</h2>
              <p className="text-white/70">Eco Level 7 • Green Builder</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p><span className="text-white/60">Location:</span> Pune, India</p>
            <p><span className="text-white/60">Skills:</span> Solar Installations, Waste Audit, ESG Research</p>
            <p><span className="text-white/60">Languages:</span> Hindi, English, Marathi</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {['Solar Pro', 'Waste Warrior', 'ESG Scout'].map((badge) => (
              <div key={badge} className="rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-center text-xs">
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Stats & timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <StatCard icon={Leaf} label="Carbon Saved" value="3.2 tCO₂e" sub="last 12 months" />
            <StatCard icon={TrendingUp} label="Credits Earned" value="840 CC" sub="lifetime" />
            <StatCard icon={Award} label="Completed Jobs" value="46" sub="verified" />
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4 text-sm">
              {[
                ['Installed 5kW rooftop solar for school', '+65 CC'],
                ['Led community e-waste drive (320kg)', '+22 CC'],
                ['Audited SME energy usage (ISO 50001)', '+18 CC'],
              ].map(([task, reward], idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-white/85">{task}</span>
                  <span className="text-[#43A047]">{reward}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="flex items-center gap-3 text-white/80">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#43A047] to-[#1976D2] grid place-items-center">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="text-xs">{label}</div>
      </div>
      <div className="mt-3 text-2xl font-semibold">{value}</div>
      <div className="text-xs text-white/60">{sub}</div>
    </div>
  );
}
