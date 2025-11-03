import { Briefcase, MapPin, Leaf } from 'lucide-react';

const jobs = [
  {
    title: 'Solar Rooftop Technician',
    company: 'SunGrid Co.',
    location: 'Pune, IN',
    impact: 'High impact',
    credits: 24,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Urban Tree Plantation Lead',
    company: 'GreenCity Labs',
    location: 'Bengaluru, IN',
    impact: 'Community',
    credits: 16,
    color: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'Waste Segregation Trainer',
    company: 'EcoCircle',
    location: 'Jaipur, IN',
    impact: 'Foundational',
    credits: 10,
    color: 'from-lime-500 to-green-600',
  },
];

export default function FeaturedJobs() {
  return (
    <section id="jobs" className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Featured Sustainability Jobs</h2>
          <a href="#jobs" className="text-sm text-[#1976D2] hover:underline">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <article key={job.title} className="group rounded-2xl bg-white ring-1 ring-black/5 p-5 shadow-sm hover:shadow-md transition">
              <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${job.color}`}>
                <Leaf size={14} />
                {job.impact}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{job.title}</h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <Briefcase size={16} /> {job.company}
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={16} /> {job.location}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-700"><span className="font-semibold">{job.credits}</span> credits</span>
                <button className="px-3 py-2 rounded-xl text-sm font-medium text-white bg-[#1976D2] hover:opacity-95">
                  Apply
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
