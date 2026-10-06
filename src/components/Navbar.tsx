import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Database } from 'lucide-react';
import { getStoredPilotRequests } from '../utils/storage';

interface NavbarProps {
  onOpenPilotModal: () => void;
  onOpenStorageViewer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPilotModal, onOpenStorageViewer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

  const updateCount = () => {
    setRequestCount(getStoredPilotRequests().length);
  };

  useEffect(() => {
    updateCount();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('immiEvidenceStorageUpdated', updateCount);
    window.addEventListener('storage', updateCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('immiEvidenceStorageUpdated', updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Market Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Wordmark - Icon removed as requested */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg py-1"
            aria-label="ImmiEvidence AI Homepage"
          >
            <span className="text-[21px] font-bold tracking-tight text-slate-950 flex items-center gap-1.5">
              ImmiEvidence
              <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/80 transition-colors group-hover:bg-blue-100">
                AI
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-slate-600 hover:text-slate-950 transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {requestCount > 0 && (
              <button
                onClick={onOpenStorageViewer}
                title="Inspect recorded pilot submissions in localStorage"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200/80"
                aria-label="View recorded pilot submissions"
              >
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>{requestCount} Stored</span>
              </button>
            )}

            <button
              onClick={onOpenPilotModal}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 border-t border-slate-200/80 pb-5 space-y-1.5 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPilotModal();
                }}
                className="w-full flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-all shadow-sm"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {requestCount > 0 && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStorageViewer();
                  }}
                  className="w-full flex items-center justify-center gap-2 h-10 rounded-xl text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Stored Pilot Requests ({requestCount})</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
