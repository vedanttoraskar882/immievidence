import React, { useState, useEffect } from 'react';
import { X, Database, Trash2, Calendar, Mail, Phone, Building2, User, RefreshCw } from 'lucide-react';
import { getStoredPilotRequests, clearStoredPilotRequests } from '../utils/storage';
import type { PilotSubmission } from '../types';

interface SavedRequestsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SavedRequestsDrawer: React.FC<SavedRequestsDrawerProps> = ({ isOpen, onClose }) => {
  const [requests, setRequests] = useState<PilotSubmission[]>([]);

  const loadRequests = () => {
    setRequests(getStoredPilotRequests());
  };

  useEffect(() => {
    if (isOpen) {
      loadRequests();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => {
      loadRequests();
    };
    window.addEventListener('immiEvidenceStorageUpdated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('immiEvidenceStorageUpdated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="storage-viewer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 id="storage-viewer-title" className="text-base font-bold text-white flex items-center gap-2">
                <span>Stored Pilot Submissions</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-teal-300 border border-slate-700">
                  localStorage: immiEvidencePilotRequests
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Verified client-side persistent submission records ({requests.length} total)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Close storage viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {requests.length === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-3">
              <Database className="w-12 h-12 mx-auto text-slate-300 stroke-[1.5]" />
              <div className="text-base font-medium text-slate-700">No submissions recorded yet</div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Fill in the "Request a Pilot" form on the page to record a submission. Each submission is appended to the browser's local array.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {requests.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-teal-800 font-mono">
                      Submission #{index + 1}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {new Date(item.submissionDateTime).toLocaleString('en-GB')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-800">
                      <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-semibold">{item.fullName}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-800">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.organisationName}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono">{item.emailAddress}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono">{item.phoneNumber}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={loadRequests}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>

          {requests.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Clear all stored test pilot submissions from your browser localStorage?')) {
                  clearStoredPilotRequests();
                  setRequests([]);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Local Storage</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
