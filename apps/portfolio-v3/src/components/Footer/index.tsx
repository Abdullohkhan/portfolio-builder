import { NAV_LINKS } from '../../utils/data';
import { useI18n } from '../../i18n';
import { showDemo } from '../../utils/demo';

const TECH = ['React 19', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS 4', 'MUI', 'Vite'];

const Footer: React.FC = () => {
  const { t } = useI18n();
  const go = (href: string) => document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer style={{ background: '#0d0d1a', color: 'white', padding: '52px 0 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 mb-9">
          <div>
            <div className="flex items-center gap-2" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 19, marginBottom: 12 }}>
              <span style={{ width: 32, height: 32, background: '#6246EA', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900 }}>J</span>
              John<span style={{ color: '#6246EA' }}>.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 13.5, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", maxWidth: 260 }}>{t.footer.desc}</p>
            <div className="flex gap-2 mt-3.5">
              {['GH', 'LI', 'TG'].map((s) => (
                <a key={s} href="#" onClick={showDemo} aria-label={s} style={{ width: 34, height: 34, background: 'rgba(255,255,255,.08)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.55)', fontSize: 11, fontWeight: 800, textDecoration: 'none', transition: 'all .2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#6246EA'; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,.08)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,.55)'; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 11, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14 }}>{t.footer.navigation}</h4>
            {NAV_LINKS.map(({ key, href }) => (
              <button key={href} onClick={() => go(href)} style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,.45)', fontSize: 13, cursor: 'pointer', padding: '4px 0', fontFamily: "'DM Sans',sans-serif", transition: 'color .2s' }}
                onMouseEnter={e => ((e.target as HTMLButtonElement).style.color = 'white')}
                onMouseLeave={e => ((e.target as HTMLButtonElement).style.color = 'rgba(255,255,255,.45)')}>
                {t.nav[key]}
              </button>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 11, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14 }}>{t.footer.tech}</h4>
            <div className="flex flex-wrap gap-1.5">
              {TECH.map(tech => (
                <span key={tech} style={{ fontSize: 11, background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.5)', padding: '4px 10px', borderRadius: 50, fontFamily: "'DM Sans',sans-serif" }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
          <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>© {new Date().getFullYear()} John Doe · {t.footer.rights}</p>
          <p style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>
            {t.footer.dev}{' '}
            <a href="https://t.me/Abdulloh_77700" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa', fontWeight: 700 }}>t.me/Abdulloh_77700</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
