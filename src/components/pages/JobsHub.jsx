import React from 'react';
import { Briefcase, MapPin, Leaf, Search } from 'lucide-react';

const jobs = [
  { title: 'Solar Technician', company: 'SunGrid', location: 'Ahmedabad', impact: 'High', credits: 70 },
  { title: 'Carbon Analyst', company: 'GreenLedger', location: 'Bengaluru', impact: 'Medium', credits: 45 },
  { title: 'Waste Mgmt Intern', company: 'EcoCycle', location: 'Pune', impact: 'Medium', credits: 28 },
  { title: 'Sustainability Associate', company: 'BlueEarth', location: 'Delhi', impact: 'High', credits: 60 },
];

export default function JobsHub() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Briefcase className="h-5 w-5" /> Jobs & Worker Hub
        </h2>
        <div className="relative max-w-md w-full">
          <input
            placeholder="Find roles, skills, or locations"
            className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-2 pl-10 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-[#1976D2]/50"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.title} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/7.5 transition">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-medium">{job.title}</div>
                <div className="text-sm text-white/70">{job.company}</div>
              </div>
              <span className="text-xs rounded-full bg-[#43A047]/20 text-[#43A047] px-2 py-1">{job.impact} impact</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4" /> {job.location}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#43A047]">
                <Leaf className="h-4 w-4" /> +{job.credits} CC
              </div>
              <button className="rounded-full bg-gradient-to-r from-[#43A047] to-[#1976D2] px-4 py-2 text-sm font-medium shadow hover:opacity-95">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
