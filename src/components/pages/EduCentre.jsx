import React from 'react';
import { BookOpen, Award, Globe } from 'lucide-react';

const courses = [
  { title: 'Solar PV Basics (hi-IN)', tag: 'Beginner', dur: '2.5h' },
  { title: 'Waste Segregation & Recycling (en-IN)', tag: 'Beginner', dur: '1.5h' },
  { title: 'Intro to Carbon Markets (bn-IN)', tag: 'Intermediate', dur: '3h' },
  { title: 'ESG Essentials for SMEs (ta-IN)', tag: 'Intermediate', dur: '2h' },
];

export default function EduCentre() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5" /> Yukti EduCentre
        </h2>
        <button className="rounded-full bg-white/10 border border-white/10 px-3 py-2 text-sm flex items-center gap-2">
          <Globe className="h-4 w-4" /> Change language
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-sm text-white/70">{c.tag}</div>
            <div className="mt-1 text-lg font-medium">{c.title}</div>
            <div className="text-xs text-white/60">Duration: {c.dur}</div>
            <button className="mt-4 rounded-full bg-gradient-to-r from-[#43A047] to-[#1976D2] px-4 py-2 text-sm font-medium">Start Learning</button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center justify-between">
        <div>
          <div className="font-medium">Earn Certificates</div>
          <p className="text-sm text-white/70">Complete tracks to unlock shareable certificates and boost your Eco Level.</p>
        </div>
        <Award className="h-10 w-10 text-white/80" />
      </div>
    </div>
  );
}
