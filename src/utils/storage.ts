import type { PilotSubmission } from '../types';

export const STORAGE_KEY = "immiEvidencePilotRequests";

export function getStoredPilotRequests(): PilotSubmission[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read pilot requests from localStorage:", error);
    return [];
  }
}

export function savePilotRequest(data: {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}): PilotSubmission {
  let submissions: PilotSubmission[] = [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    submissions = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(submissions)) {
      submissions = [];
    }
  } catch {
    submissions = [];
  }

  const submission: PilotSubmission = {
    fullName: data.fullName.trim(),
    phoneNumber: data.phoneNumber.trim(),
    emailAddress: data.emailAddress.trim(),
    organisationName: data.organisationName.trim(),
    submissionDateTime: new Date().toISOString()
  };

  submissions.push(submission);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

  window.dispatchEvent(new Event('immiEvidenceStorageUpdated'));

  return submission;
}

export function clearStoredPilotRequests(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('immiEvidenceStorageUpdated'));
  } catch (error) {
    console.error("Failed to clear pilot requests:", error);
  }
}
