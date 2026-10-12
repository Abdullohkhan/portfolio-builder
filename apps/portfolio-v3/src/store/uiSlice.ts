import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UIState } from '../types';

const initialState: UIState = {
  mobileMenuOpen: false,
  activeSection: 'home',
  theme: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => { state.mobileMenuOpen = !state.mobileMenuOpen; },
    closeMobileMenu:  (state) => { state.mobileMenuOpen = false; },
    setActiveSection: (state, action: PayloadAction<string>) => { state.activeSection = action.payload; },
    toggleTheme:      (state) => { state.theme = state.theme === 'light' ? 'dark' : 'light'; },
    setTheme:         (state, action: PayloadAction<'light' | 'dark'>) => { state.theme = action.payload; },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActiveSection, toggleTheme, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
