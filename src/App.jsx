import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import FeaturedJobs from './components/FeaturedJobs.jsx';
import CarbonTradeOverview from './components/CarbonTradeOverview.jsx';
import VerificationFeed from './components/VerificationFeed.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1f3a] via-[#0a2a2a] to-[#03121a] text-white">
      {/* Top gradient aura */}
      <div className="pointer-events-none fixed inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl h-[60vh] rounded-full blur-3xl"
             style={{ background: 'radial-gradient(ellipse at center, rgba(25,118,210,0.55), rgba(67,160,71,0.35) 60%, transparent 70%)' }} />
      </div>

      <header className="relative">
        <HeroSection />
      </header>

      <main className="relative z-10">
        <FeaturedJobs />
        <CarbonTradeOverview />
        <VerificationFeed />
      </main>

      <footer className="relative z-10 mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70">
          <p>
            Yukti — Empowering green work, learning, and fair carbon trading. Made with a green–blue futuristic theme for impact and trust.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
