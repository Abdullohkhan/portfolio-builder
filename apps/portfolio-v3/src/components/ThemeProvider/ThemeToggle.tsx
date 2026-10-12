import { useTheme } from './index';
import { useI18n } from '../../i18n';

const ThemeToggle: React.FC = () => {
  const { dark, toggle } = useTheme();
  const { t } = useI18n();
  return (
    <button
      onClick={toggle}
      aria-label={dark ? t.ui.toLight : t.ui.toDark}
      title={dark ? t.ui.toLight : t.ui.toDark}
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
