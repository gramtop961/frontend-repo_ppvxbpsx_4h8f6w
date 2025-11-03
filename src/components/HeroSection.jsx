import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">
            Green-Blue Future • Earn • Trade • Learn
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Build your climate career with Yukti
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            An AI-driven platform to discover sustainability jobs, trade carbon credits, verify impact, and upskill in regional languages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#jobs" className="px-5 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-[#43A047] to-[#1976D2] shadow hover:opacity-95 transition">Explore Jobs</a>
            <a href="#trade" className="px-5 py-3 rounded-xl font-medium text-[#1976D2] bg-[#1976D2]/10 hover:bg-[#1976D2]/15 transition">Trade Credits</a>
          </div>
          <ul className="mt-6 text-sm text-slate-600 grid sm:grid-cols-3 gap-3">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Verified green work</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-500"></span> AI job matching</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500"></span> Learn in your language</li>
          </ul>
        </div>
        <div className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg bg-white">
          <Spline scene="https://prod.spline.design/7dMZ7k7P4hQ3KxKq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
