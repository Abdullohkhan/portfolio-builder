import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleMobileMenu, closeMobileMenu } from '../../store/uiSlice';
import { useTheme } from '../ThemeProvider';
import ThemeToggle from '../ThemeProvider/ThemeToggle';
import { NAV_LINKS } from '../../utils/data';
import { THEME } from '../../utils/theme';
import { LANGS, useI18n, type Lang } from '../../i18n';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mobileMenuOpen, activeSection } = useAppSelector((s) => s.ui);
  const { dark } = useTheme();
  const { t, lang, setLang } = useI18n();
  const c = dark ? THEME.dark : THEME.light;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (href: string) => {
    dispatch(closeMobileMenu());
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? c.navBg : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      boxShadow: scrolled ? c.navShadow : 'none',
      transition: 'all .3s',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, gap: 12 }}>

        {/* Logo */}
        <a href="#home" onClick={() => handleNav('#home')} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 21, color: c.text, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <span style={{ width: 32, height: 32, background: '#6246EA', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: 14 }}>J</span>
          John<span style={{ color: '#6246EA' }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {NAV_LINKS.map(({ key, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <button key={href} onClick={() => handleNav(href)} style={{
                padding: '8px 16px', borderRadius: 50, border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 14,
                background: active ? '#6246EA' : 'transparent',
                color: active ? '#fff' : c.textMuted, transition: 'all .2s',
              }}>{t.nav[key]}</button>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3" style={{ flexShrink: 0 }}>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            aria-label={t.ui.lang}
            style={{ height: 34, padding: '0 8px', borderRadius: 10, border: `1px solid ${c.borderMid}`, background: c.bgCard, color: c.text, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
          >
            {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
          <ThemeToggle />
          <button onClick={() => handleNav('#contact')} className="hidden md:flex" style={{ background: '#6246EA', color: 'white', border: 'none', padding: '10px 22px', borderRadius: 50, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            {t.hireMe}
          </button>
          <button onClick={() => dispatch(toggleMobileMenu())} className="flex md:hidden" aria-label={t.ui.menu} style={{ background: c.factBg, border: 'none', width: 40, height: 40, borderRadius: 10, cursor: 'pointer', alignItems: 'center', justifyContent: 'center', color: c.textMuted }}>
            {mobileMenuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{ maxHeight: mobileMenuOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height .3s ease', background: c.bgCard, borderTop: mobileMenuOpen ? `1px solid ${c.border}` : 'none' }}>
        <div style={{ padding: '10px 20px 14px' }}>
          {NAV_LINKS.map(({ key, href }) => (
            <button key={href} onClick={() => handleNav(href)} style={{
              display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px',
              borderRadius: 12, border: 'none', cursor: 'pointer', marginBottom: 3,
              fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 15,
              background: activeSection === href.replace('#', '') ? '#6246EA' : 'transparent',
              color: activeSection === href.replace('#', '') ? 'white' : c.textMuted,
            }}>{t.nav[key]}</button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
