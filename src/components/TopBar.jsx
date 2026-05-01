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
  // For NavLink end matching: use end on Home only.
  return (
    <header
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
        aria-label="Primary"
        style={{ display: 'flex', gap: 28, marginLeft: 64, flex: 1 }}
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
      <Link to="/contact" aria-label="Get your free audit" style={{ textDecoration: 'none' }}>
        <Button variant="primary" style={{ whiteSpace: 'nowrap', padding: '12px 18px', fontSize: 14 }}>
          Get your free audit{' '}
          <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
        </Button>
      </Link>
    </header>
  );
}
