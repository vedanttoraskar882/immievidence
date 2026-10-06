import React, { useState } from 'react';
import { 
  FileUp, 
  Cpu, 
  FileSearch, 
  GitCompare, 
  Calendar, 
  AlertCircle, 
  Languages, 
  FileCheck, 
  History, 
  ListChecks, 
  UsersRound, 
  Network, 
  UploadCloud, 
  LayoutGrid, 
  FolderDown, 
  ShieldCheck, 
  Lock, 
  Server, 
  Eye, 
  FileLock, 
  ArrowRight,
  Briefcase, 
  Building2, 
  GraduationCap, 
  UserCheck,
  AlertTriangle
} from 'lucide-react';

export const Platform: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'intake' | 'intelligence' | 'reporting' | 'org'>('all');

  const categories = [
    { id: 'all', name: 'All 15 Capabilities' },
    { id: 'intake', name: '1. Evidence Intake' },
    { id: 'intelligence', name: '2. Evidence Intelligence' },
    { id: 'reporting', name: '3. Review & Reporting' },
    { id: 'org', name: '4. Organisation-Level Tools' },
  ];

  const modules = [
    // Category 1: Evidence Intake
    {
      id: 1,
      cat: 'intake',
      title: 'Document Ingestion & Classification',
      desc: 'Upload evidence through the adviser portal, client portal or supported case-management workflow. The platform classifies documents such as bank statements, payslips, tenancy agreements, sponsor letters and translations.',
      icon: FileUp,
      tag: 'Ingestion'
    },
    {
      id: 2,
      cat: 'intake',
      title: 'Route-Specific Rules Engine',
      desc: 'Evidence is assessed against a maintained requirement set associated with the selected immigration route.',
      coverage: 'Initial planned coverage: Appendix FM and Skilled Worker. Future roadmap may include Student, Graduate and EU Settlement Scheme legacy cases.',
      icon: Cpu,
      tag: 'Rules Engine'
    },
    {
      id: 13,
      cat: 'intake',
      title: 'Branded Client Upload Portal',
      desc: 'A firm-branded submission experience can allow applicants to provide documents directly while outstanding evidence is identified earlier in the case lifecycle.',
      icon: UploadCloud,
      tag: 'Client Intake'
    },

    // Category 2: Evidence Intelligence
    {
      id: 3,
      cat: 'intelligence',
      title: 'Missing-Document Detection',
      desc: 'Identify evidence types required for the selected route that appear to be absent from the uploaded bundle.',
      icon: FileSearch,
      tag: 'Completeness'
    },
    {
      id: 4,
      cat: 'intelligence',
      title: 'Cross-Document Consistency Checker',
      desc: 'Compare important information such as names, addresses, dates and monetary figures across documents to identify potential inconsistencies.',
      icon: GitCompare,
      tag: 'Consistency'
    },
    {
      id: 5,
      cat: 'intelligence',
      title: 'Continuity Gap Detection',
      desc: 'Identify non-continuous periods in document sequences such as bank statements and payslips.',
      icon: Calendar,
      tag: 'Sequencing'
    },
    {
      id: 6,
      cat: 'intelligence',
      title: 'Expiry & Time-Window Alerts',
      desc: 'Highlight evidence that may fall outside an applicable documentary time window by the intended submission date.',
      icon: AlertCircle,
      tag: 'Time-Window'
    },
    {
      id: 7,
      cat: 'intelligence',
      title: 'Translation & Certification Checks',
      desc: 'Identify whether non-English evidence includes the required translation or certification information for review.',
      icon: Languages,
      tag: 'Compliance'
    },

    // Category 3: Review & Reporting
    {
      id: 8,
      cat: 'reporting',
      title: 'Evidence Readiness Report',
      desc: 'Generate a structured report summarising missing evidence, inconsistencies and time-sensitive risks for adviser review.',
      icon: FileCheck,
      tag: 'Readiness Report'
    },
    {
      id: 9,
      cat: 'reporting',
      title: 'Adviser Review & Audit Trail',
      desc: 'Advisers can review findings, record manual overrides and preserve a structured audit trail.',
      icon: History,
      tag: 'Audit Trail'
    },
    {
      id: 10,
      cat: 'reporting',
      title: 'Client Outstanding-Items Checklist',
      desc: 'Convert outstanding evidence requirements into a simpler client-facing checklist.',
      icon: ListChecks,
      tag: 'Client Action'
    },
    {
      id: 15,
      cat: 'reporting',
      title: 'Compliance Pack Export',
      desc: 'Structured audit information can be exported for internal compliance, regulator or insurer review.',
      icon: FolderDown,
      tag: 'Audit Export'
    },

    // Category 4: Organisation Tools
    {
      id: 11,
      cat: 'org',
      title: 'Bulk Sponsor Checking',
      desc: 'Designed for sponsor-licensed employers and compliance teams that need to review evidential records across multiple sponsored workers.',
      icon: UsersRound,
      tag: 'Sponsor HR'
    },
    {
      id: 12,
      cat: 'org',
      title: 'Case Management Connectivity',
      desc: 'Designed to work alongside existing legal case-management systems through direct upload, CSV and future supported API/webhook integrations. Osprey Approach, Clio and LEAP-style systems are examples of the type of case-management environment the platform is designed to complement.',
      icon: Network,
      tag: 'Connectivity'
    },
    {
      id: 14,
      cat: 'org',
      title: 'Multi-Matter Overview',
      desc: 'A firm-wide view can help teams monitor evidence-readiness status across multiple matters.',
      icon: LayoutGrid,
      tag: 'Firm Oversight'
    }
  ];

  const filteredModules = activeCategory === 'all'
    ? modules
    : modules.filter(m => m.cat === activeCategory);

  return (
    <section id="platform" className="py-24 md:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading & Subheading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
            Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em] leading-tight">
            One evidence intelligence layer.<br />Multiple checks.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Designed to complement existing case-management workflows by analysing documentary evidence before submission.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 15 Modules in Refined Bento-Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {filteredModules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className="p-7 rounded-[20px] bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-200 text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                      {module.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-950 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {module.desc}
                    </p>

                    {module.coverage && (
                      <div className="mt-3.5 p-3 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs text-blue-950 font-medium">
                        {module.coverage}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Capability #{String(module.id).padStart(2, '0')}</span>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Platform Demonstrations (Section 14 of Prompt) */}
        <div className="mb-24 pt-10 border-t border-slate-100 max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
              Visual Platform Demonstrations
            </span>
            <h3 className="text-2xl font-bold text-slate-950">
              Clear evidential feedback for immigration caseworkers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Visual 1: Cross-Document Consistency */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Cross-Document Consistency Check
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Mismatch
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-500 uppercase text-[10px]">Bank Statement</div>
                  <div className="text-slate-500">Address</div>
                  <div className="font-bold text-slate-900">21 Example Street</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-500 uppercase text-[10px]">Tenancy Agreement</div>
                  <div className="text-slate-500">Address</div>
                  <div className="font-bold text-slate-900">27 Example Street</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
                <div>
                  <span className="font-bold">Status:</span> Potential mismatch detected
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 font-semibold text-amber-900 text-[11px]">
                  Review Evidence
                </span>
              </div>
            </div>

            {/* Visual 2: Evidence Timeline Continuity */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Evidence Timeline & Continuity
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">
                  Payslip Sequence
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-white border border-emerald-200">
                  <div className="font-semibold text-slate-600 text-[11px]">January</div>
                  <div className="text-emerald-600 font-bold mt-1 text-sm">✓ Passed</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-emerald-200">
                  <div className="font-semibold text-slate-600 text-[11px]">February</div>
                  <div className="text-emerald-600 font-bold mt-1 text-sm">✓ Passed</div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-300">
                  <div className="font-semibold text-amber-900 text-[11px]">March</div>
                  <div className="text-amber-700 font-bold mt-1 text-sm">⚠ Missing</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-emerald-200">
                  <div className="font-semibold text-slate-600 text-[11px]">April</div>
                  <div className="text-emerald-600 font-bold mt-1 text-sm">✓ Passed</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span>Continuity alert surfaced for adviser validation</span>
                <span className="font-mono text-[11px] text-slate-500">6-Month Rule</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 10: Platform Architecture Visual */}
        <div className="mb-24 pt-10 border-t border-slate-200 max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200/70">
              System Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Platform Architecture & Evidential Pipeline
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              How documentary evidence flows through classification, rule evaluation and cross-document verification before presenting findings for regulated adviser review.
            </p>

            {/* Data Flow Strip */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <span className="text-blue-700 font-bold uppercase tracking-wider text-[11px]">Data Flow:</span>
                <span>Upload</span>
                <span className="text-slate-400">→</span>
                <span>Classify</span>
                <span className="text-slate-400">→</span>
                <span>Rule Match</span>
                <span className="text-slate-400">→</span>
                <span>Cross-Check</span>
                <span className="text-slate-400">→</span>
                <span>Flag</span>
                <span className="text-slate-400">→</span>
                <span>Report</span>
                <span className="text-slate-400">→</span>
                <span className="text-blue-700 font-bold">Adviser Review</span>
              </div>
            </div>
          </div>

          {/* Architecture Visual Diagram Box */}
          <div className="p-7 sm:p-10 rounded-3xl bg-slate-50/60 border border-slate-200 shadow-sm text-left">
            <div className="space-y-5">
              
              {/* Level 1: Ingestion Sources */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                  Level 1: Input Channels
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Adviser Portal</div>
                      <div className="text-[11px] text-slate-500">Direct bundle upload</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <UploadCloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Client Upload Portal</div>
                      <div className="text-[11px] text-slate-500">Applicant self-submission</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Case Management Connector</div>
                      <div className="text-[11px] text-slate-500">CSV & future connectors</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Down Arrow */}
              <div className="flex justify-center text-slate-300">
                <div className="w-0.5 h-5 bg-slate-300" />
              </div>

              {/* Level 2: Ingestion & OCR */}
              <div className="p-4.5 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-blue-400">
                    <FileUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400">Ingestion Layer</div>
                    <div className="text-sm font-bold text-white">Document Ingestion & Classification</div>
                  </div>
                </div>
                <div className="text-xs text-slate-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg">
                  OCR Engine + Document Type Recogniser
                </div>
              </div>

              {/* Down Arrow */}
              <div className="flex justify-center text-slate-300">
                <div className="w-0.5 h-5 bg-slate-300" />
              </div>

              {/* Level 3: Rules & Cross-Reference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4.5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Cpu className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-bold text-slate-900 uppercase">Evidence Rules Engine</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">Route-Specific Requirements</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluates evidence sets against Appendix FM, Skilled Worker rules and mandatory evidentiary categories.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <GitCompare className="w-4 h-4 text-indigo-700" />
                    <span className="text-xs font-bold text-slate-900 uppercase">Consistency Engine</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">Cross-Reference & Consistency Checker</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cross-checks applicant names, addresses, dates, monetary values, continuous sequences and time windows.
                  </p>
                </div>
              </div>

              {/* Down Arrow */}
              <div className="flex justify-center text-slate-300">
                <div className="w-0.5 h-5 bg-slate-300" />
              </div>

              {/* Level 4: Report Generator */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-500">Synthesis Layer</div>
                    <div className="text-sm font-bold text-slate-900">Evidence Readiness Report Generator</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  Structured Findings
                </span>
              </div>

              {/* Down Arrow */}
              <div className="flex justify-center text-slate-300">
                <div className="w-0.5 h-5 bg-slate-300" />
              </div>

              {/* Level 5: Outputs */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                  Level 5: Actionable Outputs
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-slate-950 text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-blue-400">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Adviser Dashboard</div>
                      <div className="text-xs text-slate-300">Detailed findings, manual overrides & full audit trail</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-blue-200 flex items-center gap-3 shadow-xs">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                      <ListChecks className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Client Checklist Export</div>
                      <div className="text-xs text-slate-600">Simplified outstanding-items list for applicants</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Security Positioning Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Security & Compliance Framework</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-left">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <Server className="w-3.5 h-3.5 text-blue-700 mb-1" />
                  <div className="text-xs font-bold text-slate-900">UK/EEA Hosting</div>
                  <div className="text-[10px] text-slate-500">Residency aligned</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <Lock className="w-3.5 h-3.5 text-blue-700 mb-1" />
                  <div className="text-xs font-bold text-slate-900">Encryption</div>
                  <div className="text-[10px] text-slate-500">Transit & rest</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <Eye className="w-3.5 h-3.5 text-blue-700 mb-1" />
                  <div className="text-xs font-bold text-slate-900">Role-Based Access</div>
                  <div className="text-[10px] text-slate-500">RBAC controls</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <History className="w-3.5 h-3.5 text-blue-700 mb-1" />
                  <div className="text-xs font-bold text-slate-900">Audit Logging</div>
                  <div className="text-[10px] text-slate-500">Immutable logs</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <FileLock className="w-3.5 h-3.5 text-blue-700 mb-1" />
                  <div className="text-xs font-bold text-slate-900">GDPR-Aligned</div>
                  <div className="text-[10px] text-slate-500">Data handling</div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-800 mb-1" />
                  <div className="text-xs font-bold text-blue-950">ISO 27001 Pathway</div>
                  <div className="text-[10px] text-blue-800">Aligned controls</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-3">
                Security positioning reflects an ISO 27001-aligned controls and certification pathway.
              </p>
            </div>

          </div>
        </div>

        {/* Section 11: Who The Platform Is For */}
        <div className="pt-10 border-t border-slate-200 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200/70">
              Target Organisations
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Built for organisations managing high-stakes immigration evidence.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Tailored to address the specific quality-assurance and audit pressures faced across UK immigration practices and sponsor operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center border border-slate-200">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Immigration Advisers & Sole Practitioners
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured evidence QA designed to help reduce repetitive manual bundle checking while preserving adviser sign-off.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 font-mono">
                Solo & Boutique
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center border border-slate-200">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Immigration Law Firms
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Create greater consistency across paralegals, caseworkers and supervising lawyers.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 font-mono">
                Multi-Fee-Earner
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center border border-slate-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  Sponsor-Licensed Employers
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review evidence across sponsored-worker records ahead of internal audits or UKVI compliance activity.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 font-mono">
                HR & Compliance
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center border border-slate-200">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  University International Offices
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Support high-volume evidence-preparation workflows for international students and graduates.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 font-mono">
                Higher Education
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
