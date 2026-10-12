import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const About: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;

  const facts = [
    ['Name', 'Abdulloh'],
    ['Location', 'Tashkent, Uzbekistan'],
    ['Available', 'Freelance & Remote'],
    ['Email', 'abdulloh@email.com'],
  ];

  return (
    <section id="about" style={{ padding: '96px 0', background: c.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — avatar card */}
          <div>
            <div style={{ aspectRatio: '1', maxWidth: 380, margin: '0 auto', background: dark ? 'linear-gradient(135deg,rgba(98,70,234,.18),rgba(167,139,250,.1))' : 'linear-gradient(135deg,rgba(98,70,234,.07),rgba(167,139,250,.1))', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: 170, color: dark ? 'rgba(98,70,234,.18)' : 'rgba(98,70,234,.07)', lineHeight: 1 }}>A</span>
              <div style={{ position: 'absolute', bottom: 12, left: 12, background: c.bgCard, borderRadius: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, boxShadow: c.floatShadow }}>
                <span>📍</span><span style={{ fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", color: c.text }}>Tashkent, UZ</span>
              </div>
              <div style={{ position: 'absolute', top: 12, right: 12, background: dark ? 'rgba(34,197,94,.13)' : '#f0fdf4', border: dark ? '1px solid rgba(34,197,94,.25)' : '1px solid #bbf7d0', borderRadius: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 7, height: 7, background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#16a34a', fontFamily: "'DM Sans',sans-serif" }}>Available</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-4">
              {facts.map(([l, v]) => (
                <div key={l} style={{ background: c.factBg, borderRadius: 14, padding: '12px 14px', border: `1px solid ${c.border}` }}>
                  <div style={{ fontSize: 10, color: c.textSub, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3, fontFamily: "'DM Sans',sans-serif" }}>{l}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: c.text, fontFamily: "'DM Sans',sans-serif", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6246EA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
              <span style={{ width: 32, height: 2, background: '#6246EA', borderRadius: 2, display: 'inline-block' }} />About Me
            </div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 900, lineHeight: 1.15, color: c.text, marginBottom: 18 }}>
              Passionate Frontend<br />
              <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Developer</span>
            </h2>
            <p style={{ color: c.textMuted, lineHeight: 1.8, marginBottom: 14, fontFamily: "'DM Sans',sans-serif", fontSize: 15 }}>
              I'm a Frontend Developer based in Tashkent, Uzbekistan with a passion for crafting clean, performant, and beautiful user interfaces. I specialize in React and TypeScript ecosystems.
            </p>
            <p style={{ color: c.textMuted, lineHeight: 1.8, marginBottom: 24, fontFamily: "'DM Sans',sans-serif", fontSize: 15 }}>
              I love working with TailwindCSS, Material UI, and Redux Toolkit. Clean architecture, maintainable code, and outstanding UX are my top priorities.
            </p>

            {/* Timeline */}
            <div style={{ marginBottom: 26 }}>
              {[
                { icon: '💼', title: 'Frontend Developer', place: 'Freelance',   date: '2023 — Present' },
                { icon: '🎓', title: 'Web Development',    place: 'Self-taught', date: '2022 — 2023' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <div style={{ width: 40, height: 40, background: 'rgba(98,70,234,.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: c.text }}>{item.title}</span>
                    <span style={{ fontSize: 11, color: c.textSub }}>·</span>
                    <span style={{ fontSize: 12, color: c.textMuted, fontFamily: "'DM Sans',sans-serif" }}>{item.place}</span>
                    <span style={{ fontSize: 11, background: 'rgba(98,70,234,.12)', color: '#a78bfa', padding: '2px 10px', borderRadius: 50, fontWeight: 600 }}>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/cv.pdf" download style={{ background: '#6246EA', color: 'white', padding: '12px 24px', borderRadius: 50, fontWeight: 700, fontSize: 14, textDecoration: 'none', fontFamily: "'DM Sans',sans-serif" }}>⬇ Download CV</a>
              <button onClick={() => go('contact')} style={{ background: 'transparent', color: '#6246EA', border: '2px solid #6246EA', padding: '10px 24px', borderRadius: 50, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
