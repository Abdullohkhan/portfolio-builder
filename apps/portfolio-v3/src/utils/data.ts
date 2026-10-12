import type { PortfolioItem, SkillItem, TestimonialItem } from '../types';

export const NAV_LINKS = [
  { key: 'home',      href: '#home' },
  { key: 'about',     href: '#about' },
  { key: 'skills',    href: '#skills' },
  { key: 'services',  href: '#services' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact',   href: '#contact' },
] as const;

export const SKILLS: SkillItem[] = [
  { name: 'React',         level: 92, icon: '⚛️',  color: '#61DAFB' },
  { name: 'TypeScript',    level: 88, icon: '📘',  color: '#3178C6' },
  { name: 'JavaScript',    level: 95, icon: '🟨',  color: '#F7DF1E' },
  { name: 'TailwindCSS',   level: 90, icon: '🌊',  color: '#06B6D4' },
  { name: 'Redux Toolkit', level: 85, icon: '🔄',  color: '#764ABC' },
  { name: 'Material UI',   level: 82, icon: '🧱',  color: '#007FFF' },
  { name: 'Next.js',       level: 80, icon: '▲',   color: '#a78bfa' },
  { name: 'HTML / CSS',    level: 97, icon: '🌐',  color: '#E34F26' },
];

export const SERVICE_ICONS = ['💻', '🎨', '📱', '⚡', '🔗', '🛠️'];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: 'webApp', tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'], grad: 'linear-gradient(135deg,#8b5cf6,#6d28d9)', liveUrl: '#', githubUrl: '#' },
  { id: 2, category: 'dashboard', tech: ['React', 'Redux', 'MUI', 'Recharts'],           grad: 'linear-gradient(135deg,#3b82f6,#0e7490)',  liveUrl: '#', githubUrl: '#' },
  { id: 3, category: 'webApp', tech: ['React', 'TypeScript', 'DnD', 'Tailwind'],      grad: 'linear-gradient(135deg,#ec4899,#be123c)',  liveUrl: '#', githubUrl: '#' },
  { id: 4, category: 'landing', tech: ['React', 'GSAP', 'Framer', 'Tailwind'],         grad: 'linear-gradient(135deg,#f59e0b,#c2410c)',  liveUrl: '#', githubUrl: '#' },
  { id: 5, category: 'webApp', tech: ['React', 'TypeScript', 'OpenWeather', 'CSS'],   grad: 'linear-gradient(135deg,#14b8a6,#065f46)',  liveUrl: '#', githubUrl: '#' },
  { id: 6, category: 'portfolio', tech: ['React', 'TypeScript', 'Redux', 'Tailwind'],    grad: 'linear-gradient(135deg,#6366f1,#1e40af)',  liveUrl: '#', githubUrl: '#' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 1, name: 'Alex Carter',  avatar: 'AC', bg: '#8b5cf6' },
  { id: 2, name: 'Maria Lopez',  avatar: 'ML', bg: '#ec4899' },
  { id: 3, name: 'Daniel Kim',   avatar: 'DK', bg: '#f59e0b' },
  { id: 4, name: 'Sofia Rossi',  avatar: 'SR', bg: '#14b8a6' },
];

export const STATS = ['30+', '20+', '3+', '100%'];
