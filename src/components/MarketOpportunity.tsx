import React from 'react';
import { Building2, Users, Scale, Briefcase, GraduationCap } from 'lucide-react';

export const MarketOpportunity: React.FC = () => {
  return (
    <section className="py-24 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
            Professional Practice Landscape
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em] leading-tight">
            A specialist platform for a high-pressure compliance environment.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The business plan identifies an addressable professional ecosystem including approximately 1,900 regulated organisations and around 3,300 individually regulated advisers, alongside immigration teams and sponsor-licensed employers.
          </p>
        </div>

        {/* 2 Primary Stats Cards + 4 Ecosystem Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Top 2 Highlight Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-xs flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
                  ≈1,900
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Regulated Organisations
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  IAA/OISC-regulated immigration organisations
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-xs flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-4xl font-extrabold text-slate-950 font-mono tracking-tight">
                  ≈3,300
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Individually Regulated Advisers
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Practitioners responsible for evidence validation
                </div>
              </div>
            </div>
          </div>

          {/* 4 Supporting Practice Sectors */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Briefcase className="w-4 h-4 text-blue-600 mb-2" />
              <div className="text-sm font-bold text-slate-900">Immigration Firms</div>
              <div className="text-xs text-slate-500 mt-1">Regulated casework practices</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Scale className="w-4 h-4 text-blue-600 mb-2" />
              <div className="text-sm font-bold text-slate-900">Solicitors' Teams</div>
              <div className="text-xs text-slate-500 mt-1">Legal immigration departments</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Building2 className="w-4 h-4 text-blue-600 mb-2" />
              <div className="text-sm font-bold text-slate-900">Sponsor Employers</div>
              <div className="text-xs text-slate-500 mt-1">Worker compliance audits</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <GraduationCap className="w-4 h-4 text-blue-600 mb-2" />
              <div className="text-sm font-bold text-slate-900">University Offices</div>
              <div className="text-xs text-slate-500 mt-1">International student offices</div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400">
            Market indicators sourced from UK immigration regulatory frameworks and sponsor compliance directories.
          </p>

        </div>

      </div>
    </section>
  );
};
