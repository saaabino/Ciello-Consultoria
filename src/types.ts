export interface PillarModule {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface CommunityPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface TestimonialScreenshot {
  id: number;
  src: string;
  alt: string;
  caption: string;
  resultBadge: string;
  category?: 'all' | 'revenue' | 'confidence';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  segment?: string;
  mainChallenge?: string;
}

export interface AppConfig {
  whatsAppPhone: string;
  whatsAppMessage: string;
  webhookUrl: string;
}

export interface SavedLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  segment?: string;
  mainChallenge?: string;
  createdAt: string;
  webhookStatus?: 'success' | 'failed' | 'not_configured';
  webhookResponse?: string;
}
