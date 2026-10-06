import React from 'react';
import { 
  ClipboardCheck, 
  GitCompare, 
  FileQuestion, 
  Clock, 
  ShieldAlert, 
  UserCheck, 
  Award, 
  Languages, 
  CheckCircle2, 
  Info
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
            Why ImmiEvidence AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em] leading-tight">
            Evidence preparation shouldn't depend on scattered checklists.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Preparing an immigration application involves far more than simply collecting documents. Advisers must determine whether the evidence supplied actually satisfies the requirements of the relevant Immigration Rules, remains valid at the point of submission and is internally consistent across the entire bundle.
          </p>
          <p className="text-sm font-medium text-slate-500">
            Today, much of this quality assurance is still dependent on manual checklists, individual experience and repeated review of Home Office guidance.
          </p>
        </div>

        {/* Bento Grid Layout for Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 max-w-6xl mx-auto">
          
          {/* Bento Card 1: Large Card (Span 7) */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                  Process Risk
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-2.5">
                  Manual Evidence Checking
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Caseworkers frequently rely on manual or ad hoc checklists to determine whether documentary requirements have been met.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Evidential Completeness</span>
              <span className="text-blue-600 font-semibold">Challenge 01</span>
            </div>
          </div>

          {/* Stacked Column (Span 5): 2 Smaller Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Bento Card 2: Small Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between flex-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <GitCompare className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                    Discrepancy Risk
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950">
                  Cross-Document Inconsistencies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Names, addresses, dates and financial figures may differ across documents and can require time-consuming manual comparison.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                Challenge 02
              </div>
            </div>

            {/* Bento Card 3: Small Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between flex-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <FileQuestion className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                    Omission Risk
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950">
                  Missing Evidence
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A document referenced elsewhere in an application bundle may be absent or incomplete.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                Challenge 03
              </div>
            </div>

          </div>

          {/* Bento Card 4: Wide Card (Span 7) */}
          <div className="md:col-span-7 p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                  Validity Window
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1.5">
                  Time-Sensitive Documents
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evidence may fall outside an applicable validity or documentary time window before the planned submission date.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
              Challenge 04
            </div>
          </div>

          {/* Bento Card 5: Compliance Card (Span 5) */}
          <div className="md:col-span-5 p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                  Sponsor Risk
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1.5">
                  Growing Compliance Pressure
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sponsor-licensed employers may need to review evidential records across multiple sponsored workers ahead of audits and compliance visits.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
              Challenge 05
            </div>
          </div>

        </div>

        {/* The Solution Callout Box */}
        <div className="p-8 sm:p-11 rounded-3xl bg-slate-950 text-white shadow-xl mb-20 text-left max-w-6xl mx-auto relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.18),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-900/40 border border-blue-700/40">
              The ImmiEvidence AI Architecture Solution
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              An intelligent QA layer built for UK immigration accuracy.
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              ImmiEvidence AI is designed as an evidence-quality-assurance layer that helps identify these issues before submission while leaving professional judgement and final sign-off with the regulated adviser.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-blue-200/90 font-medium">
              <Info className="w-4 h-4 shrink-0 text-blue-400" />
              <span>
                ImmiEvidence AI is an evidence verification tool and does not provide legal advice.
              </span>
            </div>
          </div>
        </div>

        {/* Founder / Origin Story Inside About (Rabia Ashraf) */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-11 text-left shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Founder Intro */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Founder & Origin Story</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Rabia Ashraf
                  </h3>
                  <p className="text-sm font-semibold text-blue-700 mt-0.5">
                    Founder, ImmiEvidence AI
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    LLB (Hons) British Law Student | Legal Caseworker / Legal Assistant
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed italic">
                  “ImmiEvidence AI was developed from first-hand exposure to the documentary evidence workflows involved in immigration casework.”
                </div>
              </div>

              {/* Right Profile Details */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Founder Background
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Rabia Ashraf is an LLB (Hons) British Law student at the University of London and works as a Legal Caseworker / Legal Assistant, with practical experience supporting immigration and property law matters, preparing legal applications and supporting documents, conducting legal and factual research, drafting correspondence and maintaining case records.
                  </p>
                </div>

                {/* Practical Competencies Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Relevant Practical Experience
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Legal research and drafting</span>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Immigration and property casework</span>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Documentary evidence review</span>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Case management systems & Salesforce CRM</span>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Certificate in Advocacy</span>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <Languages className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>English, Urdu and Punjabi</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
