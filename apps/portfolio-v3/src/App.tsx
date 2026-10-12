import { ThemeProvider } from './components/ThemeProvider';
import { I18nProvider } from './i18n';
import DemoToast from './components/DemoToast';
import { useScrollSpy } from './hooks/useScrollSpy';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = ['home', 'about', 'skills', 'services', 'portfolio', 'testimonials', 'contact'];

const AppContent: React.FC = () => {
  useScrollSpy(SECTIONS);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <DemoToast />
    </>
  );
};

const App: React.FC = () => (
  <I18nProvider>
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  </I18nProvider>
);

export default App;
