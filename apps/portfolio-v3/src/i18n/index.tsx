/* eslint-disable react-refresh/only-export-components -- context file exports its hook and helpers */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import en, { type Dict } from './en';
import uz from './uz';
import ru from './ru';

export type Lang = 'uz' | 'en' | 'ru';
export const LANGS: Lang[] = ['uz', 'en', 'ru'];
const DICTS: Record<Lang, Dict> = { uz, en, ru };

const readLang = (): Lang => {
  try {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null;
    if (saved && LANGS.includes(saved)) return saved;
  } catch { /* storage blocked */ }
  return 'uz';
};

interface I18nCtxType { lang: Lang; setLang: (l: Lang) => void; t: Dict; }
const I18nCtx = createContext<I18nCtxType>({ lang: 'uz', setLang: () => {}, t: uz });

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(readLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('portfolio-lang', lang); } catch { /* storage blocked */ }
  }, [lang]);

  return <I18nCtx.Provider value={{ lang, setLang, t: DICTS[lang] }}>{children}</I18nCtx.Provider>;
};

export const useI18n = () => useContext(I18nCtx);
