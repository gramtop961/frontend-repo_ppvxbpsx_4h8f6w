import React from 'react';
import { Sun, Leaf, Recycle, Briefcase, MapPin, TrendingUp } from 'lucide-react';

const jobs = [
  {
    title: 'Solar Technician',
    location: 'Jaipur, Rajasthan',
    impact: 'High solar adoption',
    carbon: '2.4 tCO₂e/yr',
    icon: Sun,
    color: 'from-yellow-400/20 to-orange-500/10',
  },
  {
    title: 'Carbon Analyst',
    location: 'Bengaluru, Karnataka',
    impact: 'Corporate ESG reporting',
    carbon: '1.1 tCO₂e/yr',
    icon: TrendingUp,
    color: 'from-blue-400/20 to-indigo-500/10',
  },
  {
    title: 'Waste Mgmt Intern',
    location: 'Pune, Maharashtra',
    impact: 'Urban recycling ops',
    carbon: '0.6 tCO₂e/yr',
    icon: Recycle,
    color: 'from-emerald-400/20 to-teal-500/10',
  },
  {
    title: 'Sustainability Associate',
    location: 'Delhi NCR',
    impact: 'Green audits + compliance',
    carbon: '0.9 tCO₂e/yr',
    icon: Leaf,
    color: 'from-green-400/20 to-lime-500/10',
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured eco-opportunities</h2>
            <p className="mt-1 text-white/70">Curated roles to accelerate climate action and livelihoods</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-[#0b1f3a] px-4 py-2 font-semibold hover:bg-white/90">
            <Briefcase className="h-4 w-4" /> Post a job
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => {
            const Icon = job.icon;
            return (
              <div key={job.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden">
                <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${job.color}`} aria-hidden />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/30 border border-white/10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs rounded-full bg-white/10 border border-white/10 px-2 py-1">{job.carbon}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{job.title}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                    <MapPin className="h-4 w-4" /> {job.location}
                  </div>
                  <p className="mt-2 text-sm text-white/70">{job.impact}</p>
                  <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#43A047] to-[#1976D2] px-4 py-2.5 font-medium hover:opacity-90">Apply now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
