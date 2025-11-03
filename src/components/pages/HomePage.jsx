import React from 'react';
import HeroSection from '../HeroSection.jsx';
import FeaturedJobs from '../FeaturedJobs.jsx';
import CarbonTradeOverview from '../CarbonTradeOverview.jsx';
import VerificationFeed from '../VerificationFeed.jsx';

export default function HomePage() {
  return (
    <>
      <header className="relative">
        <HeroSection />
      </header>
      <main className="relative z-10">
        <FeaturedJobs />
        <CarbonTradeOverview />
        <VerificationFeed />
      </main>
    </>
  );
}
