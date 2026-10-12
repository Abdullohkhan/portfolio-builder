export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactState {
  formData: ContactFormData;
  status: 'idle' | 'loading' | 'success' | 'error';
  /** true when no Telegram bot is configured and the form only simulates sending */
  demo: boolean;
  /** 'error' | 'network' — translated in the Contact component */
  errorMessage: 'error' | 'network' | null;
}

export interface UIState {
  mobileMenuOpen: boolean;
  activeSection: string;
  theme: 'light' | 'dark';
}

export type PortfolioCategory = 'webApp' | 'dashboard' | 'landing' | 'portfolio';

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  tech: string[];
  grad: string;
  liveUrl: string;
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  avatar: string;
  bg: string;
}
