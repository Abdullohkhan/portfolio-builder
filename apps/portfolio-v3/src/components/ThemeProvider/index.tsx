/* eslint-disable react-refresh/only-export-components -- context file exports its hook and helpers */
import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleTheme } from '../../store/uiSlice';

interface ThemeCtxType { dark: boolean; toggle: () => void; }
const ThemeCtx = createContext<ThemeCtxType>({ dark: false, toggle: () => {} });
export const useTheme = () => useContext(ThemeCtx);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((s) => s.ui.theme === 'dark');

  useEffect(() => {
    document.body.style.background = dark ? '#0d0d1a' : '#ffffff';
    document.body.style.transition = 'background .35s, color .35s';
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch { /* storage blocked */ }
  }, [dark]);

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => dispatch(toggleTheme()) }}>
      {children}
    </ThemeCtx.Provider>
  );
};
