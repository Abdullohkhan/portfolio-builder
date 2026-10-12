import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleTheme, setTheme } from '../../store/uiSlice';

interface ThemeCtxType { dark: boolean; toggle: () => void; }
const ThemeCtx = createContext<ThemeCtxType>({ dark: false, toggle: () => {} });
export const useTheme = () => useContext(ThemeCtx);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((s) => s.ui.theme === 'dark');

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ?? (prefersDark ? 'dark' : 'light');
    dispatch(setTheme(initial));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.background = dark ? '#0d0d1a' : '#ffffff';
    document.body.style.transition = 'background .35s, color .35s';
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => dispatch(toggleTheme()) }}>
      {children}
    </ThemeCtx.Provider>
  );
};
