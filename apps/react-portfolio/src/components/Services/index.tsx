import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';
import { SERVICES } from '../../utils/data';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Services: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;

  return (
    <section id="services" style={{ padding: '96px 0', background: c.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6246EA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: '#6246EA', display: 'inline-block', borderRadius: 2 }} />Services
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 900, color: c.text, margin: '8px 0' }}>
            What I <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title}
              style={{ background: c.bgAlt, borderRadius: 22, padding: '26px 22px', border: `1px solid ${c.border}`, cursor: 'default', transition: 'all .3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = dark ? '0 16px 40px rgba(98,70,234,.2)' : '0 16px 40px rgba(98,70,234,.1)'; e.currentTarget.style.background = c.bgCard; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = c.bgAlt; }}
            >
              <div style={{ width: 46, height: 46, background: 'rgba(98,70,234,.12)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, color: c.text, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: c.textMuted, fontSize: 13.5, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ marginTop: 44, background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', borderRadius: 26, padding: '44px 36px', textAlign: 'center', color: 'white' }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 'clamp(18px,2.5vw,28px)', marginBottom: 10 }}>Interested in working with me?</h3>
          <p style={{ opacity: .85, marginBottom: 22, fontFamily: "'DM Sans',sans-serif", fontSize: 15 }}>Let's discuss your project and create something amazing together.</p>
          <button onClick={() => go('contact')} style={{ background: 'white', color: '#6246EA', border: 'none', padding: '13px 30px', borderRadius: 50, fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: 14, cursor: 'pointer' }}>
            Start a Project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
