import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, AlertCircle, Database } from 'lucide-react';
import { savePilotRequest } from '../utils/storage';

interface PilotCTAProps {
  onOpenStorageViewer: () => void;
}

export const PilotCTA: React.FC<PilotCTAProps> = ({ onOpenStorageViewer }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required.';
    }

    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.organisationName.trim()) {
      errs.organisationName = 'Organisation Name is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    savePilotRequest(formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      organisationName: '',
    });
    setErrors({});
  };

  return (
    <section id="pilot" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Figma-Style Deep Navy Rounded Banner Container */}
        <div className="max-w-5xl mx-auto rounded-[28px] bg-slate-950 text-white p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle blue gradient orb inside banner */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-900/40 border border-blue-700/40">
              Pilot Participation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
              Bring structured evidence QA into your immigration workflow.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Request a pilot to explore how ImmiEvidence AI could support documentary evidence review within your organisation.
            </p>
          </div>

          {/* Form Box inside Banner */}
          <div className="max-w-xl mx-auto bg-white text-slate-900 rounded-[24px] p-8 sm:p-10 shadow-xl border border-slate-100 text-left relative z-10">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Pilot request recorded.
                </h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you. Your pilot request has been recorded.
                </p>
                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="h-11 px-6 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <button
                    onClick={onOpenStorageViewer}
                    className="h-11 px-4 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>View Stored</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Field 1: Full Name */}
                <div className="space-y-2">
                  <label htmlFor="cta-fullName" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cta-fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className={`w-full h-[52px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                    }`}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Field 2: Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="cta-phoneNumber" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="cta-phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="Phone number"
                    className={`w-full h-[52px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.phoneNumber ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                    }`}
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Field 3: Email Address */}
                <div className="space-y-2">
                  <label htmlFor="cta-emailAddress" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="cta-emailAddress"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="Email address"
                    className={`w-full h-[52px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.emailAddress ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                    }`}
                    required
                  />
                  {errors.emailAddress && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.emailAddress}
                    </p>
                  )}
                </div>

                {/* Field 4: Organisation Name */}
                <div className="space-y-2">
                  <label htmlFor="cta-organisationName" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Organisation Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cta-organisationName"
                    value={formData.organisationName}
                    onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                    placeholder="Organisation name"
                    className={`w-full h-[52px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                      errors.organisationName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                    }`}
                    required
                  />
                  {errors.organisationName && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.organisationName}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-75"
                  >
                    <span>Submit Pilot Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
