# Portfolio Builder

Abdulmajid Sharipovning portfolio loyihalari bitta monorepoda.

| Papka | Texnologiya | Manba repo |
|---|---|---|
| `apps/react-portfolio` | React 19, TypeScript, Vite, Tailwind, MUI, Redux | `portfolio-demo-1` (`portfolio-demo-2` bilan kodi bir xil) |
| `apps/bootstrap-portfolio` | Vite, Bootstrap, SCSS | `portfolio` (`portfolio-1` ning yangi versiyasi) |
| `apps/jack-portfolio` | HTML, CSS, JS | `jack-portfolio` (codewithsadee shabloni, litsenziyasiz — "free to use") |

## Ishga tushirish

```bash
npm run install:all
npm run dev:react        # React portfolio
npm run dev:bootstrap    # Bootstrap portfolio
npm run dev:jack         # Jack portfolio (statik)
```

## Bootstrap portfolio — kontakt formasi

Forma xabarlarni Telegram botga yuboradi. `apps/bootstrap-portfolio/.env`
fayl yarating (`.env.example` dan nusxa) va to'ldiring:

```
VITE_BOT_TOKEN=
VITE_GROUP_TOKEN=
```

`.env` repoga tushmaydi. Tokenni hech qachon kodga yozmang.
