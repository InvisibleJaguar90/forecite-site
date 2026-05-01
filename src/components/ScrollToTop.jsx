import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets window scroll on every route change. Without this, clicking from
// a deep section on /services to /about lands at the same scroll offset
// on the new page (the original SPA behavior the rebuild fixes).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
