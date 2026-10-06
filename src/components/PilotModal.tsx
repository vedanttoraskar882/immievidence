import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { savePilotRequest } from '../utils/storage';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStorageViewer: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

    savePilotRequest(formData);

    setSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      organisationName: '',
    });
    setErrors({});
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm animate-in fade-in"
    >
      <div 
        className="fixed inset-0" 
        onClick={handleClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-[520px] bg-white rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden text-left z-10 animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-7 py-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 id="pilot-modal-title" className="text-xl font-bold text-slate-950">
              Request a Pilot
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tell us about your organisation and we'll record your pilot request.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-7">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-950">
                Pilot request recorded.
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you. Your pilot request has been recorded.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="h-11 px-6 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="modal-fullName" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Full name"
                  className={`w-full h-[50px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                  }`}
                  required
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="modal-phoneNumber" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Phone number"
                  className={`w-full h-[50px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    errors.phoneNumber ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                  }`}
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label htmlFor="modal-emailAddress" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="modal-emailAddress"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  placeholder="Email address"
                  className={`w-full h-[50px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    errors.emailAddress ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                  }`}
                  required
                />
                {errors.emailAddress && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div className="space-y-1.5">
                <label htmlFor="modal-organisationName" className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Organisation Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-organisationName"
                  value={formData.organisationName}
                  onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                  placeholder="Organisation name"
                  className={`w-full h-[50px] px-4 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    errors.organisationName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'
                  }`}
                  required
                />
                {errors.organisationName && (
                  <p className="text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.organisationName}
                  </p>
                )}
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
  );
};
