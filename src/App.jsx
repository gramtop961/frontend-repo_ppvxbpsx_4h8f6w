import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedJobs from './components/FeaturedJobs';
import CarbonTradeOverview from './components/CarbonTradeOverview';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-emerald-50">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedJobs />
        <CarbonTradeOverview />
        <section id="verify" className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Impact Verification</h2>
              <p className="mt-2 text-slate-600">Upload proof of work and get AI-assisted verification with audit trails. Coming soon.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-50 text-emerald-800 p-4">Smart checks for authenticity</div>
                <div className="rounded-xl bg-sky-50 text-sky-800 p-4">Fast approvals and badges</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-black/5 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Yukti • Green-Blue Future</p>
          <a href="#home" className="text-[#1976D2] hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
