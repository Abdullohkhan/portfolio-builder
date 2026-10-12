import type { PortfolioItem, SkillItem, TestimonialItem } from '../types';

export const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact' },
];

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

export const SERVICES = [
  { icon: '💻', title: 'Frontend Development',    desc: 'Modern, fast, and responsive web apps using React & TypeScript. Clean code, best practices, scalable architecture.' },
  { icon: '🎨', title: 'UI/UX Implementation',    desc: 'Figma to pixel-perfect reality. Interactive interfaces with smooth animations and delightful user experiences.' },
  { icon: '📱', title: 'Responsive Design',       desc: 'Layouts that look and feel great on every screen — mobile, tablet, and desktop. No compromises.' },
  { icon: '⚡', title: 'Performance Optimization', desc: 'Code splitting, lazy loading, bundle optimization. Your app will score 90+ on Lighthouse.' },
  { icon: '🔗', title: 'API Integration',          desc: 'Seamlessly connecting frontends with REST APIs, Firebase, and third-party services using clean state management.' },
  { icon: '🛠️', title: 'Code Review',             desc: 'Reviewing codebases, refactoring legacy code, and helping teams adopt modern frontend best practices.' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'AquaPro CRM',          category: 'Web App',   tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'], grad: 'linear-gradient(135deg,#8b5cf6,#6d28d9)', liveUrl: '#', githubUrl: '#', description: 'Full-featured CRM for a plumbing supply store with inventory, sales analytics & customer tracking.' },
  { id: 2, title: 'E-Commerce Dashboard', category: 'Dashboard', tech: ['React', 'Redux', 'MUI', 'Recharts'],           grad: 'linear-gradient(135deg,#3b82f6,#0e7490)',  liveUrl: '#', githubUrl: '#', description: 'Admin dashboard with real-time sales data, product management, and detailed analytics charts.' },
  { id: 3, title: 'Task Manager',         category: 'Web App',   tech: ['React', 'TypeScript', 'DnD', 'Tailwind'],      grad: 'linear-gradient(135deg,#ec4899,#be123c)',  liveUrl: '#', githubUrl: '#', description: 'Kanban-style task manager with drag-and-drop, team collaboration, and deadline tracking.' },
  { id: 4, title: 'SaaS Landing Page',    category: 'Landing',   tech: ['React', 'GSAP', 'Framer', 'Tailwind'],         grad: 'linear-gradient(135deg,#f59e0b,#c2410c)',  liveUrl: '#', githubUrl: '#', description: 'High-converting SaaS landing page with scroll animations, testimonials, and pricing section.' },
  { id: 5, title: 'Weather App',          category: 'Web App',   tech: ['React', 'TypeScript', 'OpenWeather', 'CSS'],   grad: 'linear-gradient(135deg,#14b8a6,#065f46)',  liveUrl: '#', githubUrl: '#', description: 'Real-time weather app with 7-day forecast, location search, and interactive charts.' },
  { id: 6, title: 'Portfolio Website',    category: 'Portfolio', tech: ['React', 'TypeScript', 'Redux', 'Tailwind'],    grad: 'linear-gradient(135deg,#6366f1,#1e40af)',  liveUrl: '#', githubUrl: '#', description: 'Personal portfolio with Telegram contact form, smooth animations, and responsive design.' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 1, name: 'Jasur Karimov',    role: 'CEO @ TechStart UZ',   avatar: 'JK', bg: '#8b5cf6', text: 'Abdulloh delivered an outstanding CRM system. His attention to detail and code quality exceeded our expectations. Highly recommended!' },
  { id: 2, name: 'Dilnoza Yusupova', role: 'PM @ DigitalHive',     avatar: 'DY', bg: '#ec4899', text: 'Working with Abdulloh was a pleasure. He understood our requirements quickly and delivered a beautiful, responsive dashboard on time.' },
  { id: 3, name: 'Bobur Tashmatov',  role: 'CTO @ SoftBridge',     avatar: 'BT', bg: '#f59e0b', text: "One of the best frontend developers I've worked with. Clean code, great communication, and excellent TypeScript skills." },
  { id: 4, name: 'Malika Ergasheva', role: 'Founder @ CreativeBox', avatar: 'ME', bg: '#14b8a6', text: 'He transformed our old website into a modern React app. The result was beyond what we imagined. Will definitely hire again!' },
];

export const STATS = [
  { value: '30+',  label: 'Projects Completed' },
  { value: '20+',  label: 'Happy Clients' },
  { value: '2+',   label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction' },
];
