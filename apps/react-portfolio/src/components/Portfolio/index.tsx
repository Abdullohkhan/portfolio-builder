import { useState } from 'react';
import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';
import { PORTFOLIO_ITEMS } from '../../utils/data';

const CATS = ['All', 'Web App', 'Dashboard', 'Landing', 'Portfolio'];

const Portfolio: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;
  const [active, setActive] = useState('All');
  const items = active === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === active);

  return (
    <section id="portfolio" style={{ padding: '96px 0', background: c.bgAlt }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6246EA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: '#6246EA', display: 'inline-block', borderRadius: 2 }} />Portfolio
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 900, color: c.text, margin: '8px 0' }}>
            My Recent <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ padding: '8px 18px', borderRadius: 50, cursor: 'pointer', border: active === cat ? 'none' : `1px solid ${c.borderMid}`, background: active === cat ? '#6246EA' : c.bgCard, color: active === cat ? 'white' : c.textMuted, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 13, transition: 'all .2s' }}>{cat}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(p => (
            <div key={p.id}
              style={{ background: c.bgCard, borderRadius: 22, overflow: 'hidden', border: `1px solid ${c.border}`, transition: 'all .3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = dark ? '0 20px 50px rgba(0,0,0,.5)' : '0 20px 50px rgba(0,0,0,.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Thumbnail */}
              <div style={{ height: 170, background: p.grad, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 76, color: 'rgba(255,255,255,.15)' }}>{p.title[0]}</span>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'rgba(0,0,0,0)', transition: 'background .3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,.55)'; Array.from((e.currentTarget as HTMLDivElement).querySelectorAll('a')).forEach(a => (a.style.opacity = '1')); }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0)'; Array.from((e.currentTarget as HTMLDivElement).querySelectorAll('a')).forEach(a => (a.style.opacity = '0')); }}>
                  {[{ label: '🔗 Live', href: p.liveUrl }, { label: '⭐ GitHub', href: p.githubUrl }].map(btn => (
                    <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
                      style={{ background: 'white', color: '#1a1a2e', padding: '8px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700, textDecoration: 'none', opacity: 0, transition: 'opacity .3s', fontFamily: "'DM Sans',sans-serif" }}>
                      {btn.label}
                    </a>
                  ))}
                </div>
                <span style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(4px)', color: 'white', fontSize: 10, fontWeight: 700, padding: '4px 11px', borderRadius: 50 }}>{p.category}</span>
              </div>

              <div style={{ padding: 18 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, color: c.text, marginBottom: 7 }}>{p.title}</h3>
                <p style={{ color: c.textMuted, fontSize: 13, lineHeight: 1.6, marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: 10, background: c.tagBg, color: c.tagClr, padding: '3px 9px', borderRadius: 50, fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
