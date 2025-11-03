import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';

const approvals = [
  {
    id: 1,
    project: 'Solar Pump Installation',
    org: 'Kisan Urja Pvt Ltd',
    place: 'Gwalior, MP',
    credits: '+18 CC',
    time: '2m ago',
  },
  {
    id: 2,
    project: 'Community Compost Pit',
    org: 'Swachh Nagar Mission',
    place: 'Kochi, Kerala',
    credits: '+9 CC',
    time: '15m ago',
  },
  {
    id: 3,
    project: 'EV Charging Setup',
    org: 'GreenGrid Co.',
    place: 'Ahmedabad, Gujarat',
    credits: '+27 CC',
    time: '1h ago',
  },
];

export default function VerificationFeed() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Work Verification Hub</h2>
            <p className="mt-1 text-white/70">Live approvals from Yukti AI — transparent, secure, and fair</p>
          </div>
          <button className="hidden sm:inline-flex rounded-xl bg-white text-[#0b1f3a] px-4 py-2 font-semibold hover:bg-white/90">
            Upload Proofs
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {approvals.map((a) => (
            <div key={a.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-semibold">{a.project}</p>
                    <p className="text-xs text-white/70">{a.org}</p>
                  </div>
                </div>
                <span className="text-xs rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 px-2 py-1">{a.credits}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-white/80">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {a.place}</span>
                <span className="text-white/60">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
