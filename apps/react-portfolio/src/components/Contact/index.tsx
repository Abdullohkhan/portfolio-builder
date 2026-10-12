import { useEffect } from 'react';
import { useTheme } from '../ThemeProvider';
import { THEME } from '../../utils/theme';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateField, resetStatus, sendContactMessage } from '../../store/contactSlice';
import type { ContactFormData } from '../../types';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Contact: React.FC = () => {
  const { dark } = useTheme();
  const c = dark ? THEME.dark : THEME.light;
  const dispatch = useAppDispatch();
  const { formData, status, errorMessage } = useAppSelector(s => s.contact);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const t = setTimeout(() => dispatch(resetStatus()), 6000);
      return () => clearTimeout(t);
    }
  }, [status, dispatch]);

  const onChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    dispatch(updateField({ field, value: e.target.value }));

  const onSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    dispatch(sendContactMessage(formData));
  };

  const muiSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily: "'DM Sans',sans-serif",
      background: c.inputBg,
      color: c.text,
      '& fieldset': { borderColor: c.borderMid },
      '&:hover fieldset': { borderColor: '#6246EA' },
      '&.Mui-focused fieldset': { borderColor: '#6246EA' },
    },
    '& .MuiInputLabel-root': { color: c.textSub, fontFamily: "'DM Sans',sans-serif" },
    '& .MuiInputLabel-root.Mui-focused': { color: '#6246EA' },
    '& .MuiInputBase-input': { color: c.text },
  };

  return (
    <section id="contact" style={{ padding: '96px 0', background: c.bgAlt }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#6246EA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: '#6246EA', display: 'inline-block', borderRadius: 2 }} />Contact
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(24px,3.5vw,42px)', fontWeight: 900, color: c.text, margin: '8px 0 10px' }}>
            Get In <span style={{ background: 'linear-gradient(135deg,#6246EA,#9B6DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h2>
          <p style={{ color: c.textMuted, maxWidth: 460, margin: '0 auto', fontFamily: "'DM Sans',sans-serif", fontSize: 15 }}>Have a project? Send me a message — I'll reply within 24 hours!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Info sidebar */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div style={{ background: c.bgCard, borderRadius: 22, padding: '24px 20px', border: `1px solid ${c.border}` }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, color: c.text, marginBottom: 18 }}>Let's talk!</h3>
              {[
                { e: '✉️', l: 'Email',         v: 'abdulloh@email.com' },
                { e: '📍', l: 'Location',      v: 'Tashkent, Uzbekistan' },
                { e: '🕐', l: 'Response time', v: 'Within 24 hours' },
              ].map(item => (
                <div key={item.l} className="flex gap-3 mb-4">
                  <div style={{ width: 42, height: 42, background: 'rgba(98,70,234,.12)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.e}</div>
                  <div>
                    <div style={{ fontSize: 10, color: c.textSub, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2, fontFamily: "'DM Sans',sans-serif" }}>{item.l}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: c.text, fontFamily: "'DM Sans',sans-serif" }}>{item.v}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" style={{ background: '#229ED9', borderRadius: 18, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 10, color: 'white', textDecoration: 'none' }}>
              <span style={{ fontSize: 20 }}>✈️</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 13, fontFamily: "'Syne',sans-serif" }}>Chat on Telegram</div>
                <div style={{ fontSize: 11, opacity: .85, fontFamily: "'DM Sans',sans-serif" }}>Replies within 1 hour</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 16 }}>→</span>
            </a>
          </div>

          {/* Form */}
          <div className="md:col-span-3" style={{ background: c.bgCard, borderRadius: 22, padding: '32px 28px', border: `1px solid ${c.border}` }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>✅</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 19, color: c.text, marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: c.textMuted, fontFamily: "'DM Sans',sans-serif" }}>Delivered to Telegram. I'll reply soon!</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField label="Your Name"      value={formData.name}    onChange={onChange('name')}    required fullWidth sx={muiSx} />
                  <TextField label="Email Address"  value={formData.email}   onChange={onChange('email')}   required fullWidth type="email" sx={muiSx} />
                </div>
                <TextField label="Subject"          value={formData.subject} onChange={onChange('subject')}         fullWidth sx={muiSx} />
                <TextField label="Your Message"     value={formData.message} onChange={onChange('message')} required fullWidth multiline rows={5} sx={muiSx} />

                {status === 'error' && (
                  <Alert severity="error" sx={{ borderRadius: '12px', fontFamily: "'DM Sans',sans-serif" }}>
                    {errorMessage ?? 'Something went wrong. Please try again.'}
                  </Alert>
                )}

                <button onClick={onSubmit} disabled={status === 'loading' || !formData.name || !formData.email || !formData.message}
                  style={{ background: '#6246EA', color: 'white', border: 'none', padding: 14, borderRadius: 12, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: (status === 'loading' || !formData.name || !formData.email || !formData.message) ? .6 : 1, boxShadow: '0 6px 20px rgba(98,70,234,.3)' }}>
                  {status === 'loading' ? <><CircularProgress size={16} sx={{ color: 'white' }} /> Sending...</> : '✈️ Send Message'}
                </button>
                <p style={{ textAlign: 'center', fontSize: 12, color: c.textSub, fontFamily: "'DM Sans',sans-serif" }}>📨 Message delivered to Telegram instantly</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
