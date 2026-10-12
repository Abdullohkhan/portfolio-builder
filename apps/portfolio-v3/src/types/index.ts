export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactState {
  formData: ContactFormData;
  status: 'idle' | 'loading' | 'success' | 'error';
  errorMessage: string | null;
}

export interface UIState {
  mobileMenuOpen: boolean;
  activeSection: string;
  theme: 'light' | 'dark';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tech: string[];
  grad: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
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
  role: string;
  avatar: string;
  bg: string;
  text: string;
}
