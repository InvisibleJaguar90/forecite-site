import { Link } from 'react-router-dom';

const SITEMAP = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/audit', label: 'Case study' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const SERVICES = ['Audit', 'Implementation', 'Adaptation'];
const ENGINES = ['ChatGPT', 'Claude', 'Google AI Overviews', 'Perplexity', 'Gemini', 'Bing Copilot'];

export default function Footer() {
  return (
    <footer
      className="grain"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--border-bone-on-forest)',
        padding: '96px var(--gutter-md) 48px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--fg-2)',
        background: 'var(--forest-900)',
      }}
    >
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          maxWidth: 'var(--maxw-content)',
          margin: '0 auto',
        }}
      >
        <div>
          <div style={{ fontSize: 18, color: 'var(--fg-1)', marginBottom: 18 }}>Forecite.agency</div>
          <div style={{ lineHeight: 1.7, maxWidth: '38ch' }}>
            Generative engine optimization for businesses that want to be cited in the answer.
          </div>
          <div style={{ marginTop: 28, fontSize: 11, color: 'var(--mute-400)' }}>
            <div>
              <a href="mailto:andrew@forecite.agency" style={{ color: 'inherit', textDecoration: 'none' }}>
                andrew@forecite.agency
              </a>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              color: 'var(--mute-400)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 14,
              fontSize: 11,
            }}
          >
            Sitemap
          </div>
          {SITEMAP.map((item) => (
            <div key={item.to} style={{ marginBottom: 6 }}>
              <Link
                to={item.to}
                style={{ color: 'var(--fg-2)', textDecoration: 'none', display: 'inline-block' }}
              >
                <span style={{ color: 'var(--gold-500)', marginRight: 8 }}>·</span>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              color: 'var(--mute-400)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 14,
              fontSize: 11,
            }}
          >
            Services
          </div>
          {SERVICES.map((v) => (
            <div key={v} style={{ marginBottom: 6 }}>
              {v}
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              color: 'var(--mute-400)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 14,
              fontSize: 11,
            }}
          >
            Engines we audit
          </div>
          {ENGINES.map((v) => (
            <div key={v} style={{ marginBottom: 6 }}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <div
        className="footer-meta"
        style={{
          borderTop: '1px solid var(--border-bone-on-forest)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          maxWidth: 'var(--maxw-content)',
          margin: '64px auto 0',
        }}
      >
        <div>© 2026 Forecite, LLC</div>
        <div>
          <span style={{ color: 'var(--gold-500)' }}>¹</span> All statistics sourced and linked to primary research.
        </div>
      </div>
    </footer>
  );
}
