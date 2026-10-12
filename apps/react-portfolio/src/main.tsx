import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store';
import App from './App';
import './index.css';

const muiTheme = createTheme({
  palette: {
    primary: { main: '#6246EA', light: '#9B6DFF', dark: '#4A35C8' },
    secondary: { main: '#E45858' },
  },
  typography: { fontFamily: "'DM Sans', sans-serif" },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none', fontWeight: 700, borderRadius: 50 } },
    },
    MuiTextField: { defaultProps: { variant: 'outlined' } },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Provider>
  </StrictMode>
);
