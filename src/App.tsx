import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { PlatformDemos } from './components/PlatformDemos';
import { Differentiation } from './components/Differentiation';
import { HowItWorks } from './components/HowItWorks';
import { MarketOpportunity } from './components/MarketOpportunity';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { PilotCTA } from './components/PilotCTA';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { SavedRequestsDrawer } from './components/SavedRequestsDrawer';

export function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [isStorageViewerOpen, setIsStorageViewerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white flex flex-col">
      {/* Sticky Responsive Navigation */}
      <Navbar
        onOpenPilotModal={() => setIsPilotModalOpen(true)}
        onOpenStorageViewer={() => setIsStorageViewerOpen(true)}
      />

      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero
          onOpenPilotModal={() => setIsPilotModalOpen(true)}
        />

        {/* Section 2: About (Problems, Solution & Founder Rabia Ashraf) */}
        <About />

        {/* Section 3: Platform (15 Modules, Architecture Visual & Who it is for) */}
        <Platform />

        {/* Section 3b: Visual Platform Demos (3 Interactive Mockup Cards) */}
        <PlatformDemos
          onOpenPilotModal={() => setIsPilotModalOpen(true)}
        />

        {/* Section 3c: Differentiation (Not another CMS) */}
        <Differentiation />

        {/* Section 4: How It Works (6 Steps & Professional Judgement Disclaimer) */}
        <HowItWorks
          onOpenPilotModal={() => setIsPilotModalOpen(true)}
        />

        {/* Section 5a: Market Opportunity (Pre-pricing Market Ecosystem) */}
        <MarketOpportunity />

        {/* Section 5: Market Pricing (3 Tiered Plans & Commercial Options) */}
        <Pricing
          onOpenPilotModal={() => setIsPilotModalOpen(true)}
        />

        {/* Section 6: FAQ (11 Accordion Questions) */}
        <FAQ />

        {/* Section 7: Dedicated Request a Pilot Section & In-Page Form */}
        <PilotCTA
          onOpenStorageViewer={() => setIsStorageViewerOpen(true)}
        />
      </main>

      {/* Section 8: Footer */}
      <Footer
        onOpenPilotModal={() => setIsPilotModalOpen(true)}
      />

      {/* Modal Dialog for Global "Request a Pilot" CTAs */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        onOpenStorageViewer={() => setIsStorageViewerOpen(true)}
      />

      {/* LocalStorage Submissions Inspection Drawer */}
      <SavedRequestsDrawer
        isOpen={isStorageViewerOpen}
        onClose={() => setIsStorageViewerOpen(false)}
      />
    </div>
  );
}

export default App;
