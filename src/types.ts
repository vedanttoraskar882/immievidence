export interface PilotSubmission {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submissionDateTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface PlatformModule {
  id: number;
  title: string;
  description: string;
  coverage?: string;
  badge?: string;
  category: 'core' | 'analysis' | 'workflow' | 'enterprise';
}
