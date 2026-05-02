import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bracketed, Button } from './Atoms.jsx';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/audit', label: 'Audit showcase' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
];

export default function TopBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on ESC + lock body scroll while drawer is open.
  useEffect(() => {
    if (!open) {
      document.body.classList.remove('drawer-open');
      return;
    }
    document.body.classList.add('drawer-open');
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('drawer-open');
    };
  }, [open]);

  return (
    <>
      <header
        className="tb-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: 'var(--topbar-h)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          background: 'rgba(14,42,31,0.75)',
          borderBottom: '1px solid var(--border-bone-on-forest)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 var(--gutter-md)',
        }}
      >
        <Link
          to="/"
          style={{ cursor: 'pointer', fontSize: 22, color: 'var(--fg-1)', textDecoration: 'none' }}
          aria-label="Forecite home"
        >
          <Bracketed>Forecite</Bracketed>
        </Link>
        <nav
          className="tb-nav"
          aria-label="Primary"
          style={{ gap: 28, marginLeft: 64, flex: 1 }}
        >
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                cursor: 'pointer',
                color: isActive ? 'var(--fg-1)' : 'var(--fg-2)',
                textDecoration: 'none',
                borderBottom: isActive
                  ? '1px solid var(--gold-500)'
                  : '1px solid transparent',
                paddingBottom: 4,
                transition: 'color 200ms var(--ease-editorial)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          aria-label="Get your free audit"
          className="tb-cta"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="primary" style={{ whiteSpace: 'nowrap', padding: '12px 18px', fontSize: 14 }}>
            Get your free audit{' '}
            <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
        </Link>
        <button
          type="button"
          className="tb-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="tb-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="tb-burger-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      {open && (
        <div id="tb-drawer" className="tb-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
              <span className="tb-drawer-arrow">&rarr;</span>
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="tb-drawer-cta"
            onClick={() => setOpen(false)}
          >
            <span>Get your free audit</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Link>
        </div>
      )}
    </>
  );
}
