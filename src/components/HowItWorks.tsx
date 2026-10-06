import React from 'react';
import { 
  UploadCloud, 
  FileSearch, 
  Cpu, 
  GitCompare, 
  FileCheck2, 
  UserCheck, 
  AlertCircle, 
  ArrowRight 
} from 'lucide-react';

interface HowItWorksProps {
  onOpenPilotModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenPilotModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Upload the Evidence Bundle',
      description: 'The adviser or client uploads the relevant documentary evidence through the platform or an available case-management workflow.',
      icon: UploadCloud,
    },
    {
      step: '02',
      title: 'Classify the Documents',
      description: 'The ingestion layer identifies document types such as bank statements, payslips, tenancy agreements, sponsor letters and translations.',
      icon: FileSearch,
    },
    {
      step: '03',
      title: 'Apply the Relevant Route Rules',
      description: 'The evidence rules engine matches the bundle against the requirement set associated with the immigration route selected by the adviser.',
      icon: Cpu,
    },
    {
      step: '04',
      title: 'Cross-Check the Evidence',
      description: 'The system compares information across documents and identifies potential missing evidence, inconsistencies, continuity gaps and time-window risks.',
      icon: GitCompare,
    },
    {
      step: '05',
      title: 'Generate the Evidence Readiness Report',
      description: 'A structured report presents the issues identified and their associated evidential context for adviser review.',
      icon: FileCheck2,
    },
    {
      step: '06',
      title: 'Adviser Review & Client Action',
      description: 'The adviser reviews and signs off the findings. Where appropriate, an outstanding-items checklist can then be shared with the client.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Sticky Section Heading & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
              6-Step Evidence Workflow
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em] leading-tight">
              From uploaded documents to evidence readiness.
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed">
              A structured, repeatable sequence that turns unstructured document bundles into an audited evidence readiness review before submission.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span>Statutory Practice Standard</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                ImmiEvidence AI is designed as a quality-assurance support tool. Final professional judgement and case decisions remain with the relevant adviser.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenPilotModal}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-colors shadow-sm"
              >
                <span>Request a Pilot to Test Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Connected Vertical Timeline Journey */}
          <div className="lg:col-span-7 space-y-6 text-left relative">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 hidden sm:block" />

            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all group"
                >
                  {/* Step circle / number */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0 border border-slate-200 text-slate-800 font-bold font-mono text-sm z-10">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
