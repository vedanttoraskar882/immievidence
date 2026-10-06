import React, { useState } from 'react';
import { ArrowUp, X } from 'lucide-react';

interface FooterProps {
  onOpenPilotModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPilotModal }) => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      title: 'Privacy Policy Notice',
      content: 'ImmiEvidence AI processes evidential data in accordance with UK GDPR principles and professional confidentiality standards. Client-uploaded documentary materials and pilot submissions are retained strictly according to agreed evaluation protocols with role-based access controls and encryption in transit and at rest.'
    });
  };

  const handleOpenTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setLegalModalContent({
      title: 'Terms of Use & Disclaimer',
      content: 'ImmiEvidence AI is an evidence quality-assurance platform designed to support qualified and regulated immigration practitioners, sponsor-licensed employers, and university international offices. The platform provides automated checking and cross-referencing support but does not provide legal advice or replace the statutory professional judgement of a regulated immigration adviser.'
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-14 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                ImmiEvidence
                <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-950 text-blue-400 border border-blue-800/80">
                  AI
                </span>
              </span>
            </div>

            <p className="text-sm font-semibold text-blue-400 italic">
              “Catch the missing document before the Home Office does.”
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Documentary evidence quality assurance designed for modern UK immigration practice.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Founder: <span className="text-slate-300 font-medium">Rabia Ashraf</span>
            </div>
          </div>

          {/* Navigation - Column 2: Platform */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Platform
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Market Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation - Column 3: Company & Legal */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPilotModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Request a Pilot
                </button>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={handleOpenPrivacy}
                  className="hover:text-white transition-colors"
                >
                  Privacy Notice
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={handleOpenTerms}
                  className="hover:text-white transition-colors"
                >
                  Terms & Disclaimer
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            ImmiEvidence AI is designed as a quality-assurance support tool and does not replace professional immigration advice or adviser judgement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2 gap-4">
            <div>
              © 2026 ImmiEvidence AI. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Lightweight Legal Information Modal for Privacy / Terms */}
      {legalModalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in"
        >
          <div
            className="fixed inset-0"
            onClick={() => setLegalModalContent(null)}
          />
          <div className="relative w-full max-w-md bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 z-10">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <h3 className="text-base font-bold text-slate-900">
                {legalModalContent.title}
              </h3>
              <button
                onClick={() => setLegalModalContent(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {legalModalContent.content}
            </p>
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
