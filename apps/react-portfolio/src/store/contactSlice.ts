import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { ContactState, ContactFormData } from '../types';

// ═══════════════════════════════════════════════════
//  🔧 TELEGRAM BOT CONFIG — Replace these values!
// ═══════════════════════════════════════════════════
//  1. Open Telegram → @BotFather → /newbot → copy TOKEN
//  2. Send a message to your bot, then visit:
//     https://api.telegram.org/bot<TOKEN>/getUpdates
//     Find "chat":{"id": XXXXXX} → that's your CHAT_ID
// ═══════════════════════════════════════════════════
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID   = 'YOUR_CHAT_ID_HERE';

export const sendContactMessage = createAsyncThunk(
  'contact/send',
  async (data: ContactFormData, { rejectWithValue }) => {
    try {
      const text = [
        '🌟 *Yangi xabar — Portfolio saytidan!*',
        '',
        `👤 *Ism:* ${data.name}`,
        `📧 *Email:* ${data.email}`,
        `📌 *Mavzu:* ${data.subject || '—'}`,
        '',
        `💬 *Xabar:*\n${data.message}`,
        '',
        '_Abdulloh Portfolio saytidan yuborildi_',
      ].join('\n');

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
        }
      );

      if (!res.ok) {
        const err = await res.json() as { description?: string };
        return rejectWithValue(err.description ?? 'Telegram API xatosi');
      }
      return true;
    } catch {
      return rejectWithValue('Tarmoq xatosi. Qayta urinib ko\'ring.');
    }
  }
);

const blank: ContactFormData = { name: '', email: '', subject: '', message: '' };

const initialState: ContactState = {
  formData: blank,
  status: 'idle',
  errorMessage: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof ContactFormData; value: string }>) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    resetForm:   (state) => { state.formData = blank; state.status = 'idle'; state.errorMessage = null; },
    resetStatus: (state) => { state.status = 'idle'; state.errorMessage = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending,   (state) => { state.status = 'loading'; state.errorMessage = null; })
      .addCase(sendContactMessage.fulfilled, (state) => { state.status = 'success'; state.formData = blank; })
      .addCase(sendContactMessage.rejected,  (state, action) => { state.status = 'error'; state.errorMessage = action.payload as string; });
  },
});

export const { updateField, resetForm, resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
