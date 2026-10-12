import { useRef, useState, useEffect } from 'react';
import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';
import { SKILLS } from '../../utils/data';

const EXTRA_TAGS = ['Git', 'GitHub', 'Figma', 'Vite', 'Firebase', 'REST API', 'Axios', 'Zustand', 'ESLint', 'Prettier'];

const Skills: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: '96px 0', background: c.bgAlt }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6246EA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: '#6246EA', display: 'inline-block', borderRadius: 2 }} />My Skills
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 900, color: c.text, margin: '8px 0 10px' }}>
            Technologies I <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work With</span>
          </h2>
          <p style={{ color: c.textMuted, fontFamily: "'DM Sans',sans-serif", fontSize: 15, maxWidth: 480, margin: '0 auto' }}>I constantly learn and improve. Here are the core tools I use every day.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => (
            <div key={skill.name}
              style={{ background: c.bgCard, borderRadius: 20, padding: 20, border: `1px solid ${c.border}`, boxShadow: c.cardShadow, transition: 'transform .3s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
              <div className="flex items-center gap-2.5 mb-3">
                <span style={{ fontSize: 24 }}>{skill.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: c.text }}>{skill.name}</div>
                  <div style={{ fontSize: 11, color: c.textSub }}>{skill.level}%</div>
                </div>
              </div>
              <div style={{ height: 7, background: c.skillBg, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 4, background: skill.color, width: visible ? `${skill.level}%` : '0%', transition: `width 1.1s ${i * 80}ms ease-out` }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ fontSize: 13, color: c.textSub, marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {EXTRA_TAGS.map(tag => (
              <span key={tag} style={{ padding: '6px 14px', background: c.bgCard, border: `1px solid ${c.borderMid}`, borderRadius: 50, fontSize: 12, fontWeight: 600, color: c.textMuted, fontFamily: "'DM Sans',sans-serif" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
