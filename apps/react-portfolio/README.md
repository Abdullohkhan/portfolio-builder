# 🚀 Abdulloh — Frontend Developer Portfolio

Modern, fully responsive portfolio with **Dark/Light Mode** support.

## ⚡ Tech Stack (Latest Versions)

| Technology      | Version   |
|----------------|-----------|
| React           | **19.x**  |
| TypeScript      | **5.8.x** |
| Vite            | **6.x**   |
| TailwindCSS     | **4.x**   |
| Material UI     | **7.x**   |
| Redux Toolkit   | **2.6.x** |
| React Redux     | **9.x**   |

> **TailwindCSS v4** uses the new `@tailwindcss/vite` plugin — no `postcss.config.js` or `tailwind.config.js` needed!

---

## 📦 Installation

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

---

## 🌙 Dark / Light Mode

- Toggle button in the Navbar (☀️ / 🌙)
- Preference saved in `localStorage`
- Automatically detects OS system preference on first visit
- Managed via **Redux Toolkit** (`uiSlice.ts`)

---

## 📨 Telegram Bot Setup

Contact form sends messages directly to your Telegram.

### Step 1 — Create a bot
1. Open Telegram → search **@BotFather**
2. Send `/newbot`, follow the steps
3. Copy the **BOT TOKEN**

### Step 2 — Get your Chat ID
1. Send any message to your bot
2. Visit: `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Find `"chat":{"id": XXXXXXX}` → that's your **CHAT ID**

### Step 3 — Add to project
Open `src/store/contactSlice.ts` and replace:

```ts
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID   = 'YOUR_CHAT_ID_HERE';
```

---

## ✏️ Customization

| File | What to change |
|------|----------------|
| `src/utils/data.ts` | Projects, skills, testimonials, stats |
| `src/components/Contact/index.tsx` | Email, location, Telegram link |
| `src/components/Hero/index.tsx` | Social links (GitHub, LinkedIn, Telegram) |
| `src/components/Footer/index.tsx` | Social links |
| `src/components/About/index.tsx` | Bio text, timeline, facts |
| `src/utils/theme.ts` | Color tokens for light/dark mode |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ThemeProvider/    ← Dark/Light context + toggle button
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Services/
│   ├── Portfolio/
│   ├── Testimonials/
│   ├── Contact/          ← Telegram bot integration
│   └── Footer/
├── store/
│   ├── index.ts
│   ├── uiSlice.ts        ← theme, activeSection, mobileMenu
│   └── contactSlice.ts   ← form state + Telegram API call
├── hooks/
│   ├── redux.ts
│   └── useScrollSpy.ts
├── types/index.ts
├── utils/
│   ├── data.ts           ← All content
│   └── theme.ts          ← Light/Dark color tokens
├── App.tsx
├── main.tsx
└── index.css             ← TailwindCSS v4 (CSS-first config)
```

---

## 🌐 Deploy

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist

# GitHub Pages
npm run build && gh-pages -d dist
```

---

© 2025 Abdulloh. Built with ❤️ React 19 + TypeScript 5 + TailwindCSS 4
