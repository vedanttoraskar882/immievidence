import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  Building2, 
  Users, 
  GraduationCap, 
  Briefcase,
  Sparkles,
  FileCheck
} from 'lucide-react';

interface HeroProps {
  onOpenPilotModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPilotModal }) => {
  return (
    <section id="home" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[540px] h-[540px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 left-1/3 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-900 bg-blue-50/90 border border-blue-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Evidence Intelligence for UK Immigration</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-slate-950 tracking-[-0.035em] leading-[1.08]">
              Catch the missing document{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800">
                before the Home Office does.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-[19px] text-slate-600 font-normal leading-[1.65] max-w-[580px]">
              ImmiEvidence AI is a specialist documentary evidence quality-assurance platform for UK immigration practice. It helps advisers identify missing evidence, cross-document inconsistencies and time-sensitive risks before an application bundle is submitted.
            </p>

            {/* Secondary Supporting Statement */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 max-w-[560px]">
              <div className="p-2 rounded-xl bg-blue-100/70 text-blue-700 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-slate-700 leading-snug">
                Built to sit alongside existing legal case-management systems — <span className="font-semibold text-slate-950">not replace them.</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenPilotModal}
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl text-[15px] font-semibold text-white bg-slate-950 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>

              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl text-[15px] font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>Explore Platform</span>
              </a>
            </div>

            {/* Trust messaging below */}
            <p className="text-xs text-slate-500 pt-1 font-medium">
              Built to complement existing immigration case-management workflows.
            </p>
          </div>

          {/* Right Column: Floating Figma-Designed Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Secondary Floating Chip 1: Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] animate-in fade-in">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-800">12 Documents Analysed</span>
              </div>

              {/* Secondary Floating Chip 2: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-amber-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.06)] animate-in fade-in">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-semibold text-amber-900">3 Items Require Review</span>
              </div>

              {/* Secondary Floating Chip 3: Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-3 right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[11px] font-semibold shadow-md">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>Rules Updated</span>
              </div>

              {/* Main Floating Dashboard Card */}
              <div className="relative rounded-[22px] bg-white border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_0_0_1px_rgba(226,232,240,0.8)] overflow-hidden text-left">
                
                {/* Header bar */}
                <div className="px-6 py-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="text-xs font-medium text-slate-300 ml-2">Evidence Readiness</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-blue-950 text-blue-300 border border-blue-800/80">
                    Skilled Worker Application
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-6">
                  
                  {/* Readiness Score & Progress Bar */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Readiness Score
                      </span>
                      <span className="text-base font-extrabold text-blue-600 font-mono">
                        84%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-[84%]" />
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="text-[11px] text-slate-500 font-medium">Documents</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">12 reviewed</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <div className="text-[11px] text-emerald-800 font-medium">Checks</div>
                      <div className="text-sm font-bold text-emerald-900 mt-0.5">9 passed</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                      <div className="text-[11px] text-amber-800 font-medium">Attention</div>
                      <div className="text-sm font-bold text-amber-900 mt-0.5">3 required</div>
                    </div>
                  </div>

                  {/* Evidence Findings Section */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Evidence Findings
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100/80 text-emerald-950">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium">Identity information consistent</span>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-700 uppercase bg-emerald-100/80 px-2 py-0.5 rounded">Passed</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100/80 text-emerald-950">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium">Payslip sequence complete</span>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-700 uppercase bg-emerald-100/80 px-2 py-0.5 rounded">Passed</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-950">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span className="font-medium">Address requires review</span>
                        </div>
                        <span className="text-[10px] font-semibold text-amber-800 uppercase bg-amber-100 px-2 py-0.5 rounded">Attention</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-950">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span className="font-medium">Evidence time-window risk</span>
                        </div>
                        <span className="text-[10px] font-semibold text-amber-800 uppercase bg-amber-100 px-2 py-0.5 rounded">28-Day</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <FileCheck className="w-4 h-4 text-blue-600" />
                      <span>Evidence Readiness Report generated</span>
                    </div>

                    <a
                      href="#platform-demos"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Findings</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

                <div className="bg-slate-50 px-6 py-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Preserves professional adviser judgement</span>
                  <span className="font-mono text-slate-400">QA Mockup UI</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Credibility Strip Below Hero */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Evidence QA for modern UK immigration practice
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-50/70 border border-slate-200/70 text-slate-700">
              <Users className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Immigration Advisers</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-50/70 border border-slate-200/70 text-slate-700">
              <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Legal Teams</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-50/70 border border-slate-200/70 text-slate-700">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">Sponsor Employers</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-50/70 border border-slate-200/70 text-slate-700">
              <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">University International Offices</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
