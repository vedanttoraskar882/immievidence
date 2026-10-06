import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: 'What is ImmiEvidence AI?',
      answer: 'ImmiEvidence AI is a specialist documentary evidence quality-assurance platform designed for UK immigration workflows. It helps identify missing evidence, potential inconsistencies and time-sensitive documentary risks before submission.',
    },
    {
      question: 'Does ImmiEvidence AI provide immigration advice?',
      answer: 'No. The platform is designed as a quality-assurance support layer for professional immigration workflows. It does not replace the professional judgement of a regulated adviser.',
    },
    {
      question: 'Does it replace our case-management system?',
      answer: 'No. ImmiEvidence AI is designed to sit alongside existing case-management systems rather than replace them.',
    },
    {
      question: 'Which immigration routes will the platform support?',
      answer: 'The initial platform roadmap focuses on Appendix FM and the Skilled Worker route. Student, Graduate and EU Settlement Scheme legacy cases are identified as later expansion opportunities on our product roadmap.',
    },
    {
      question: 'What kinds of issues can the platform identify?',
      answer: 'The platform is designed to identify missing evidence types, cross-document inconsistencies, continuity gaps, translation/certification issues and documentary time-window risks.',
    },
    {
      question: 'Can clients upload documents directly?',
      answer: 'The product design includes a branded client-upload experience so applicants can submit documents directly and outstanding evidence can be identified earlier.',
    },
    {
      question: 'Can sponsor-licensed employers use the platform?',
      answer: 'Yes. The business plan includes a bulk-checking workflow intended for HR and immigration-compliance teams reviewing sponsored-worker evidence.',
    },
    {
      question: 'Can it integrate with existing legal software?',
      answer: 'The platform is designed around direct uploads, CSV workflows and future supported API/webhook connectors so firms do not need to replace their existing systems.',
    },
    {
      question: 'How are changes to the Immigration Rules handled?',
      answer: 'The commercial model includes a planned Rules-Update Subscription designed to maintain the evidential requirement ontology as relevant Immigration Rules change.',
    },
    {
      question: 'Is the platform ISO 27001 certified?',
      answer: 'The platform architecture is designed around robust access controls, encryption, audit logging and an ISO 27001-aligned security approach, representing an active certification pathway.',
    },
    {
      question: 'How much does ImmiEvidence AI cost?',
      answer: 'The business model includes Sole Practitioner, SME Firm and Enterprise tiers, alongside usage-based evidence checking and optional rules-update services. Contact the team for commercial pricing and pilot availability.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/70">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-[-0.03em]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Clear information about ImmiEvidence AI, evidential QA workflows and pilot requirements.
          </p>
        </div>

        {/* Clean Single Centred FAQ Container without Heavy Cards */}
        <div className="divide-y divide-slate-200 border-y border-slate-200 text-left">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-base sm:text-[17px] font-semibold text-slate-900 pr-6 group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Plus icon that rotates into X */}
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-45 bg-blue-50 text-blue-600' : 'group-hover:bg-slate-200'
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="pb-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed pr-6 animate-in fade-in"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
