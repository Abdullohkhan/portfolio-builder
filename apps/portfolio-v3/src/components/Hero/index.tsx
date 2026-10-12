import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';
import { STATS } from '../../utils/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: c.heroBg, paddingTop: 90 }}>
      <div style={{ position: 'absolute', top: 80, right: '5%', width: 420, height: 420, background: c.blob1, borderRadius: '50%', filter: 'blur(64px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 60, left: '3%', width: 300, height: 300, background: c.blob2, borderRadius: '50%', filter: 'blur(52px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div style={{ animation: 'slideUp .7s ease both' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(98,70,234,.12)', color: '#a78bfa', padding: '8px 18px', borderRadius: 50, fontSize: 13, fontWeight: 700, marginBottom: 20 }}>
              <span>👋</span> Hello, I'm Abdulloh
            </div>

            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(40px,5.5vw,70px)', fontWeight: 900, lineHeight: 1.1, color: c.text, margin: '0 0 16px' }}>
              Frontend<br />
              <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Developer</span>
            </h1>

            <p style={{ color: c.textMuted, fontSize: 16, lineHeight: 1.75, maxWidth: 460, marginBottom: 28, fontFamily: "'DM Sans',sans-serif" }}>
              Building modern, fast & beautiful web apps with React & TypeScript. Based in Tashkent — open to remote opportunities worldwide.
            </p>

            <div className="flex flex-wrap gap-3" style={{ marginBottom: 28 }}>
              <button onClick={() => go('contact')} style={{ background: '#6246EA', color: 'white', border: 'none', padding: '13px 26px', borderRadius: 50, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", boxShadow: '0 6px 20px rgba(98,70,234,.35)' }}>
                Let's Work Together →
              </button>
              <button onClick={() => go('portfolio')} style={{ background: 'transparent', color: '#6246EA', border: '2px solid #6246EA', padding: '11px 26px', borderRadius: 50, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                View My Work
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span style={{ fontSize: 13, color: c.textSub, fontFamily: "'DM Sans',sans-serif" }}>Find me on:</span>
              {[['GH', 'https://github.com/yourusername'], ['LI', 'https://linkedin.com/in/yourusername'], ['TG', 'https://t.me/yourusername']].map(([s, href]) => (
                <a key={s} href={href} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, background: c.bgCard, border: `1px solid ${c.borderMid}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: c.textMuted, textDecoration: 'none', boxShadow: c.cardShadow }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Right avatar */}
          <div className="flex justify-center" style={{ animation: 'fadeIn .9s .2s ease both', opacity: 0 }}>
            <div style={{ position: 'relative', width: 300, height: 300 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', animation: 'morph 8s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', inset: 14, background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(4px)', borderRadius: '55% 45% 50% 50% / 50% 45% 55% 50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, color: 'rgba(255,255,255,.88)', fontSize: 100 }}>A</span>
              </div>
              <div style={{ position: 'absolute', left: -20, top: 32, background: c.bgCard, borderRadius: 16, padding: '10px 14px', boxShadow: c.floatShadow, display: 'flex', alignItems: 'center', gap: 8, animation: 'float 4s ease-in-out infinite' }}>
                <span style={{ fontSize: 20 }}>⚛️</span>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 11, color: c.text }}>React</div>
                  <div style={{ fontSize: 10, color: c.textSub }}>TypeScript</div>
                </div>
              </div>
              <div style={{ position: 'absolute', right: -16, bottom: 50, background: c.bgCard, borderRadius: 16, padding: '10px 14px', boxShadow: c.floatShadow, display: 'flex', alignItems: 'center', gap: 8, animation: 'float 4s ease-in-out 1.2s infinite' }}>
                <span style={{ fontSize: 20 }}>🎨</span>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 11, color: c.text }}>Tailwind</div>
                  <div style={{ fontSize: 10, color: c.textSub }}>Material UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ marginTop: 52, animation: 'slideUp .7s .4s ease both', opacity: 0 }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ background: c.bgCard, borderRadius: 20, padding: '20px 16px', textAlign: 'center', boxShadow: c.cardShadow, border: `1px solid ${c.border}` }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 30, color: '#6246EA' }}>{value}</div>
              <div style={{ fontSize: 12, color: c.textSub, marginTop: 4, fontFamily: "'DM Sans',sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
