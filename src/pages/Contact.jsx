import { useEffect, useCallback } from 'react';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

// Session 4 item 4: Cal.com modal sitewide.
//
// First pass shipped a modal that rendered with broken empty bands above
// and below the calendar on desktop. Second pass uses iframeAttrs (in
// the modal call) plus CSS overrides on the modal host element (in
// responsive.css) to cap iframe height and let the modal size to
// content rather than reserve the full viewport. Mobile already worked
// fine; the same constraints apply harmlessly there.
//
// If Cal.com isn't loaded yet (very fast click before embed.js finishes
// fetching), the anchor's default target="_blank" behavior fires as a
// graceful fallback. Nothing breaks.
const CAL_BOOKING_URL = 'https://cal.com/forecite/geo-audit-walkthrough';

export default function Contact() {
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

  const handleBookingClick = useCallback((e) => {
    if (typeof window === 'undefined') return;
    const calReady = window.Cal && window.Cal.ns?.['geo-audit-walkthrough'];
    if (calReady) {
      e.preventDefault();
      window.Cal.ns['geo-audit-walkthrough']('modal', {
        config: { layout: 'month_view', theme: 'dark' },
        calLink: 'forecite/geo-audit-walkthrough',
        // iframeAttrs constrains the iframe element itself; combined
        // with the .cal-embed CSS overrides this caps the modal height
        // so the calendar fills it rather than floating in empty bands.
        iframeAttrs: {
          style: 'height: 680px; max-height: 90vh; width: 100%; border: 0;',
        },
      });
    }
    // Cal not yet loaded (fast click before embed.js finishes): anchor's
    // default target="_blank" behavior fires as a fallback.
  }, []);

  return (
    <main>
      <Meta
        title="Contact · Forecite"
        description="Book your free GEO audit walkthrough. We score your AI visibility across six categories and walk through the findings together."
        path="/contact"
      />

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

          {/* Primary CTA — anchor wraps the button so the link semantics
              and target="_blank" fallback work cleanly on desktop. The
              click handler intercepts on mobile only, opening the modal. */}
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookingClick}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="primary"
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  padding: '20px 36px',
                  letterSpacing: '-0.005em',
                }}
              >
                Book your audit walkthrough <span style={{ fontFamily: 'var(--font-mono)', marginLeft: 4 }}>&rarr;</span>
              </Button>
            </a>
          </div>

          {/* Email fallback. Readable size and color (was 13px in mute tones,
              which Andrew flagged as very hard to see). Visual subordination
              to the calendar CTA comes from being small + mono + below the
              button, not from poor contrast. */}
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
