import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { setActiveSection } from '../store/uiSlice';

export const useScrollSpy = (ids: string[]) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) dispatch(setActiveSection(e.target.id)); }),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids, dispatch]);
};
