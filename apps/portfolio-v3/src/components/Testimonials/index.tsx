import { useState } from 'react';
import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';
import { TESTIMONIALS } from '../../utils/data';

const Testimonials: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;
  const [cur, setCur] = useState(0);
  const t = TESTIMONIALS[cur];

  return (
    <section id="testimonials" style={{ padding: '96px 0', background: c.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6246EA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: '#6246EA', display: 'inline-block', borderRadius: 2 }} />Testimonials
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 900, color: c.text, margin: '8px 0' }}>
            Client <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Reviews</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Featured */}
          <div style={{ background: c.bgAlt, borderRadius: 26, padding: '34px 30px', position: 'relative', border: `1px solid ${c.border}` }}>
            <span style={{ position: 'absolute', top: 18, right: 22, fontSize: 52, color: 'rgba(98,70,234,.1)', fontFamily: 'serif' }}>"</span>
            <div className="flex gap-1 mb-4">
              {'★★★★★'.split('').map((_, i) => <span key={i} style={{ color: '#f59e0b', fontSize: 17 }}>★</span>)}
            </div>
            <p style={{ color: c.textMuted, fontSize: 16, lineHeight: 1.8, fontStyle: 'italic', marginBottom: 24, fontFamily: "'DM Sans',sans-serif" }}>"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 14, fontFamily: "'Syne',sans-serif" }}>{t.avatar}</div>
              <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, color: c.text }}>{t.name}</div>
                <div style={{ fontSize: 12, color: c.textSub, fontFamily: "'DM Sans',sans-serif" }}>{t.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mt-5">
              <button onClick={() => setCur(x => (x === 0 ? TESTIMONIALS.length - 1 : x - 1))} style={{ width: 36, height: 36, borderRadius: '50%', border: `2px solid ${c.borderMid}`, background: c.bgCard, cursor: 'pointer', fontSize: 13, color: c.textMuted }}>←</button>
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 22 : 8, height: 8, borderRadius: 4, background: i === cur ? '#6246EA' : c.borderMid, border: 'none', cursor: 'pointer', transition: 'all .3s' }} />
                ))}
              </div>
              <button onClick={() => setCur(x => (x === TESTIMONIALS.length - 1 ? 0 : x + 1))} style={{ width: 36, height: 36, borderRadius: '50%', border: `2px solid ${c.borderMid}`, background: c.bgCard, cursor: 'pointer', fontSize: 13, color: c.textMuted }}>→</button>
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-3">
            {TESTIMONIALS.map((tt, i) => (
              <button key={tt.id} onClick={() => setCur(i)} style={{ textAlign: 'left', padding: '14px 16px', borderRadius: 16, border: `2px solid ${i === cur ? '#6246EA' : c.border}`, background: i === cur ? (dark ? 'rgba(98,70,234,.1)' : 'rgba(98,70,234,.04)') : c.bgCard, cursor: 'pointer', transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: tt.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{tt.avatar}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: c.text }}>{tt.name}</div>
                  <div style={{ fontSize: 11, color: c.textSub, fontFamily: "'DM Sans',sans-serif", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tt.role}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#f59e0b', fontSize: 10, flexShrink: 0 }}>★★★★★</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
