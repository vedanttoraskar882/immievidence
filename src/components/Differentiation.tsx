import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Differentiation: React.FC = () => {
  return (
    <section className="py-24 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
            System Positioning & Complementarity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em]">
            Not another case-management system.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ImmiEvidence AI is intended to complement both existing case-management and identity/compliance platforms rather than replace them.
          </p>
        </div>

        {/* 3 Columns Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          
          {/* Column 1: Traditional Case Management */}
          <div className="p-8 rounded-[22px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Platform Type</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">Practice Hub</span>
              </div>

              <h3 className="text-lg font-bold text-slate-950">
                Traditional Case Management
              </h3>
              
              <p className="text-xs text-slate-500 leading-relaxed">
                Foundational legal practice tools for matter files, matter tracking and billing.
              </p>

              <ul className="space-y-3 pt-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Stores documents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Organises matters</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Supports workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Billing and time management</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium font-mono">
              Role: Operational Infrastructure
            </div>
          </div>

          {/* Column 2: Identity / AML Platforms */}
          <div className="p-8 rounded-[22px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Platform Type</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">Onboarding</span>
              </div>

              <h3 className="text-lg font-bold text-slate-950">
                Identity / AML Platforms
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                Specialist biometric verification and anti-money laundering checks at client intake.
              </p>

              <ul className="space-y-3 pt-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Identity verification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>KYC compliance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>Source-of-funds checks</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium font-mono">
              Role: Regulatory Intake Verification
            </div>
          </div>

          {/* Column 3: ImmiEvidence AI */}
          <div className="p-8 rounded-[22px] bg-white border-2 border-blue-600 shadow-[0_12px_36px_-6px_rgba(37,99,235,0.12)] flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              Evidence QA Layer
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">ImmiEvidence AI</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold">Specialist QA</span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-950">
                ImmiEvidence AI
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Documentary evidence completeness and consistency checking against immigration rules.
              </p>

              <ul className="space-y-3 pt-3 text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Evidence completeness</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Immigration-route requirements</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Cross-document consistency</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Evidence readiness</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Time-window risk</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Adviser QA support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-blue-700 font-bold font-mono">
              Role: Pre-Submission Evidence QA
            </div>
          </div>

        </div>

        {/* Integration Callout */}
        <div className="max-w-3xl mx-auto mt-12 p-4 rounded-xl bg-white border border-slate-200 text-center text-xs sm:text-sm text-slate-600 shadow-xs">
          Designed to fit into your existing stack via direct bundle upload, CSV workflows and future connectors — avoiding workflow disruption.
        </div>

      </div>
    </section>
  );
};
