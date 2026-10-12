import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useI18n } from '../../i18n';
import { DEMO_EVENT } from '../../utils/demo';

const DemoToast: React.FC = () => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(DEMO_EVENT, show);
    return () => window.removeEventListener(DEMO_EVENT, show);
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      message={t.ui.demo}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
};

export default DemoToast;
