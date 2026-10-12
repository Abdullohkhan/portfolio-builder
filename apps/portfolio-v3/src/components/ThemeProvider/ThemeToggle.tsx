import { useTheme } from './index';

const ThemeToggle: React.FC = () => {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width: 44, height: 26, borderRadius: 13, border: 'none',
        cursor: 'pointer', padding: 2, flexShrink: 0,
        background: dark ? '#6246EA' : '#d1d5db',
        position: 'relative', transition: 'background .35s',
      }}
    >
      <span style={{
        position: 'absolute', top: 3, left: dark ? 20 : 3,
        width: 20, height: 20, borderRadius: '50%', background: 'white',
        transition: 'left .3s', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 11,
      }}>
        {dark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;
