import { useEffect, useCallback } from 'react';
import { Eyebrow, Button } from '../components/Atoms.jsx';
import HeroBackground from '../components/HeroBackground.jsx';
import Meta from '../components/Meta.jsx';

export default function Contact() {
  // Cal.com modal init. Same loader as the inline embed had, but we
  // configure for a modal-mode trigger instead of pinning the calendar
  // into a layout slot. Inline embed retired in Session 4 item 4 — it
  // rendered broken on mobile (white block below the calendar; the 640px
  // min-height floor exceeded Cal's mobile slots view height) and was a
  // recurring layout-jank source. Modal floats over the page on click,
  // user stays on /contact, no reservation issues.
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', 'geo-audit-walkthrough', { origin: 'https://app.cal.com' });

    window.Cal.ns['geo-audit-walkthrough']('ui', {
      theme: 'dark',
      cssVarsPerTheme: { dark: { 'cal-brand': '#c8a55a' } },
      hideEventTypeDetails: true,
      layout: 'month_view',
    });
  }, []);

  // Click handler opens the Cal modal with the same calLink + dark theme
  // as the previous inline embed. Defensive null check in case Cal hasn't
  // finished loading yet (e.g. fast click before embed.js finishes fetching).
  const openCalModal = useCallback(() => {
    if (typeof window === 'undefined' || !window.Cal || !window.Cal.ns?.['geo-audit-walkthrough']) return;
    window.Cal.ns['geo-audit-walkthrough']('modal', {
      config: { layout: 'month_view', theme: 'dark' },
      calLink: 'forecite/geo-audit-walkthrough',
    });
  }, []);

  return (
    <main>
      <Meta
        title="Contact · Forecite"
        description="Book your free GEO audit walkthrough. We score your AI visibility across six categories and walk through the findings together."
        path="/contact"
      />

      <HeroBackground align="left" label="06 Contact — Hero">
        <Eyebrow style={{ marginBottom: 24 }}>Contact</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(44px, 5.2vw, 72px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '14ch',
            margin: 0,
          }}
        >
          Let&rsquo;s look at your site.
        </h1>
        <p style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.6, maxWidth: '46ch', marginTop: 32, color: 'var(--bone-200)' }}>
          Free GEO audit. 30-minute call with Forecite&rsquo;s founder. We score your AI visibility across six categories and have your audit ready before we talk. Add your website URL in the notes when you book so we have it ready in time.
        </p>
        <p style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.6, maxWidth: '46ch', marginTop: 24, color: 'var(--bone-200)' }}>
          The call is where the audit becomes actionable. We&rsquo;ll walk you through the findings in plain English, explain what each one means for your business, and work with you on what to fix and in what order.
        </p>
        <div style={{ marginTop: 36 }}>
          <Button variant="primary" onClick={openCalModal}>
            Book your audit walkthrough <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
        </div>
        <div
          style={{
            marginTop: 36,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--mute-500)',
            lineHeight: 1.8,
          }}
        >
          <div>
            Prefer email?{' '}
            <a
              href="mailto:andrew@forecite.agency"
              style={{
                color: 'var(--mute-400)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-500)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mute-400)')}
            >
              andrew@forecite.agency
            </a>
          </div>
        </div>
      </HeroBackground>
    </main>
  );
}
