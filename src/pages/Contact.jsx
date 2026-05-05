import { useEffect, useCallback } from 'react';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
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

      {/* Plain forest section, content center-aligned. Per Session 4 item 4
          revision: HeroBackground dropped on Contact (the celestia treatment
          was too much next to a single-CTA page); content shifts to center
          so the modal-trigger button reads as the page's clear primary action. */}
      <Section label="06 Contact" style={{ paddingTop: 140, paddingBottom: 144 }}>
        <div style={{ maxWidth: '64ch', margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 24 }}>Contact</Eyebrow>
          <h1
            style={{
              fontSize: 'clamp(44px, 5.4vw, 76px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              maxWidth: '14ch',
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            Let&rsquo;s look at your site.
          </h1>
          <p style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.6, maxWidth: '52ch', margin: '32px auto 0', color: 'var(--bone-200)' }}>
            Free GEO audit. 30-minute call with Forecite&rsquo;s founder. We score your AI visibility across six categories and have your audit ready before we talk. Add your website URL in the notes when you book so we have it ready in time.
          </p>
          <p style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.6, maxWidth: '52ch', margin: '24px auto 0', color: 'var(--bone-200)' }}>
            The call is where the audit becomes actionable. We&rsquo;ll walk you through the findings in plain English, explain what each one means for your business, and work with you on what to fix and in what order.
          </p>

          {/* Primary CTA — bigger, more presence than the default Button.
              Inline style override bumps padding + font-size beyond the
              default primary variant; this is the page's lone action and
              it should read as such. */}
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="primary"
              onClick={openCalModal}
              style={{
                fontSize: 18,
                fontWeight: 600,
                padding: '20px 36px',
                letterSpacing: '-0.005em',
              }}
            >
              Book your audit walkthrough <span style={{ fontFamily: 'var(--font-mono)', marginLeft: 4 }}>&rarr;</span>
            </Button>
          </div>

          {/* Email fallback. Readable size and color now (was 13px mute-500
              with mute-400 link, which Andrew flagged as very hard to see).
              Visual subordination to the calendar CTA comes from being small
              + mono + below the button, not from poor contrast. */}
          <div
            style={{
              marginTop: 32,
              fontFamily: 'var(--font-mono)',
              fontSize: 15,
              color: 'var(--bone-200)',
              lineHeight: 1.6,
            }}
          >
            Prefer email?{' '}
            <a
              href="mailto:andrew@forecite.agency"
              style={{
                color: 'var(--bone-200)',
                textDecoration: 'underline',
                textDecorationColor: 'var(--mute-400)',
                textUnderlineOffset: 4,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold-500)';
                e.currentTarget.style.textDecorationColor = 'var(--gold-500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--bone-200)';
                e.currentTarget.style.textDecorationColor = 'var(--mute-400)';
              }}
            >
              andrew@forecite.agency
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
