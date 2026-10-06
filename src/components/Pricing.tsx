import React from 'react';
import { Check, ArrowRight, Sparkles, Building, Layers, Zap } from 'lucide-react';

interface PricingProps {
  onOpenPilotModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenPilotModal }) => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
            Commercial Model & Pilots
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em] leading-tight">
            Flexible pricing for different immigration workflows.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tiered SaaS structures tailored to the scale of casework and operational requirements of UK immigration organisations.
          </p>
        </div>

        {/* 3 Large Vertical Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 text-left items-stretch">
          
          {/* Card 1: Sole Practitioner */}
          <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  SOLE PRACTITIONER
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  Individual
                </span>
              </div>

              <div className="my-6">
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-950 tracking-tight">
                  Contact for Pricing
                </div>
                <p className="text-xs text-slate-500 mt-1.5">
                  For individual immigration professionals
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Included capabilities:
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Per-seat SaaS access</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Route-specific evidence checking</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Missing-document detection</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Cross-document consistency checks</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Evidence Readiness Reports</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Adviser review workflow</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Client outstanding-items checklist</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <button
                onClick={onOpenPilotModal}
                className="w-full h-12 rounded-xl text-sm font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Card 2: SME Firm (Elevated with "Designed for Teams") */}
          <div className="p-8 sm:p-9 rounded-[24px] bg-white border-2 border-blue-600 shadow-[0_12px_36px_-6px_rgba(37,99,235,0.12)] flex flex-col justify-between relative scale-[1.02] z-10">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Designed for Teams</span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                  SME FIRM
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700">
                  Practices & Chambers
                </span>
              </div>

              <div className="my-6">
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-950 tracking-tight">
                  Contact for Pricing
                </div>
                <p className="text-xs text-slate-500 mt-1.5">
                  For growing immigration practices
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                  Included capabilities:
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Multi-user / per-seat access</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Multi-matter workflow</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Evidence Readiness Reports</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Adviser override and audit logs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Branded client upload experience</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Case-management connectivity options</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Rules-update service options</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <button
                onClick={onOpenPilotModal}
                className="w-full h-12 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  ENTERPRISE
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  Institutional
                </span>
              </div>

              <div className="my-6">
                <div className="text-2xl sm:text-[28px] font-extrabold text-slate-950 tracking-tight">
                  Custom Pricing
                </div>
                <p className="text-xs text-slate-500 mt-1.5">
                  For sponsor employers & larger teams
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Included capabilities:
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Bulk evidence checking</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Sponsor-workforce review</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Enterprise workflow support</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Compliance-focused reporting</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Role-based access controls</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Integration options</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Dedicated deployment discussions</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <button
                onClick={onOpenPilotModal}
                className="w-full h-12 rounded-xl text-sm font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Discuss Enterprise Pilot</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Subtitle Note */}
        <p className="text-center text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto mb-16">
          Commercial pricing will depend on organisation size, usage and selected platform capabilities.
        </p>

        {/* Section 20: Additional Commercial Options in 3 Minimal Cards */}
        <div className="max-w-5xl mx-auto pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              Additional Commercial Options
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complementary commercial models tailored to specific operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  Usage-Based Evidence Checking
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Usage-based Evidence Check fees are planned for organisations running high-volume bundle reviews.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  Annual Rules-Update Subscription
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                An optional annual rules-update service is intended to keep the platform’s evidential requirement sets aligned with relevant Statements of Changes to the Immigration Rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Building className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  Integration / Referral Arrangements
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commercial integration or referral revenue arrangements may be explored with compatible case-management providers where agreed.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
