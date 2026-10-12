import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { ContactState, ContactFormData } from '../types';

// Telegram bot settings come from .env (see .env.example):
//   VITE_BOT_TOKEN  — token from @BotFather
//   VITE_CHAT_ID    — chat or group id that receives the messages
// Without them the form works in demo mode and sends nothing.
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN as string | undefined;
const TELEGRAM_CHAT_ID   = import.meta.env.VITE_CHAT_ID as string | undefined;

export const sendContactMessage = createAsyncThunk(
  'contact/send',
  async (data: ContactFormData, { rejectWithValue }) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      await new Promise((r) => setTimeout(r, 600));
      return { demo: true };
    }
    try {
      const text = [
        '🌟 New message from the portfolio',
        '',
        `👤 Name: ${data.name}`,
        `📧 Email: ${data.email}`,
        `📌 Subject: ${data.subject || '—'}`,
        '',
        `💬 Message:\n${data.message}`,
      ].join('\n');

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
        }
      );

      if (!res.ok) return rejectWithValue('error' as const);
      return { demo: false };
    } catch {
      return rejectWithValue('network' as const);
    }
  }
);

const blank: ContactFormData = { name: '', email: '', subject: '', message: '' };

const initialState: ContactState = {
  formData: blank,
  status: 'idle',
  demo: false,
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
      .addCase(sendContactMessage.fulfilled, (state, action) => { state.status = 'success'; state.demo = action.payload.demo; state.formData = blank; })
      .addCase(sendContactMessage.rejected,  (state, action) => { state.status = 'error'; state.errorMessage = (action.payload as 'error' | 'network' | undefined) ?? 'error'; });
  },
});

export const { updateField, resetForm, resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
