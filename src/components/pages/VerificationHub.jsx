import React from 'react';
import { ShieldCheck, UploadCloud, MapPin } from 'lucide-react';

export default function VerificationHub() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <ShieldCheck className="h-5 w-5" /> Work Verification Hub
      </h2>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="font-medium mb-4">Upload Proof</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Project Title</label>
              <input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="e.g., Household biogas installation" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Location</label>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/70" />
                <input className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="City, State" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70 mb-1">Details</label>
              <textarea className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" rows={4} placeholder="Describe the work done, materials used, team, etc." />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70 mb-1">Upload Photos / Video</label>
              <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
                <UploadCloud className="h-6 w-6 mx-auto mb-2 text-white/70" />
                <p className="text-sm text-white/70">Drag & drop files here or click to browse</p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button className="rounded-full bg-gradient-to-r from-[#43A047] to-[#1976D2] px-5 py-2 text-sm font-medium">
                Submit for AI Verification
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="font-medium mb-4">Status</h3>
          <ul className="space-y-4 text-sm">
            {[
              ['Community tree plantation (150 saplings)', 'VERIFIED', '+35 CC'],
              ['Plastic waste collection (220kg)', 'IN REVIEW', '+? CC'],
              ['Rooftop solar maintenance', 'VERIFIED', '+12 CC'],
            ].map(([label, state, reward], idx) => (
              <li key={idx} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white/85">{label}</div>
                  <span className={`text-xs rounded-full px-2 py-1 ${
                    state === 'VERIFIED' ? 'bg-[#43A047]/20 text-[#43A047]' : 'bg-yellow-400/20 text-yellow-300'
                  }`}>{state}</span>
                </div>
                <div className="text-xs text-white/60 mt-2">Reward: {reward}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
