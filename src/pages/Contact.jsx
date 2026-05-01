import { useEffect } from 'react';
import { Eyebrow, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

export default function Contact() {
  useEffect(() => {
    // Cal.com inline embed loader. Same boot script as before, just lifted
    // from the JSX-globals world into a real ESM useEffect.
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

    window.Cal.ns['geo-audit-walkthrough']('inline', {
      elementOrSelector: '#my-cal-inline-geo-audit-walkthrough',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' },
      calLink: 'forecite/geo-audit-walkthrough',
    });

    window.Cal.ns['geo-audit-walkthrough']('ui', {
      theme: 'dark',
      cssVarsPerTheme: { dark: { 'cal-brand': '#c8a55a' } },
      hideEventTypeDetails: true,
      layout: 'month_view',
    });
  }, []);

  return (
    <main>
      <Meta
        title="Contact · Forecite"
        description="Book your free GEO audit walkthrough. We score your AI visibility across six categories and walk through the findings together."
        path="/contact"
      />

      <Section label="06 Contact" style={{ paddingTop: 140, paddingBottom: 144 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
          <div>
            <Eyebrow style={{ marginBottom: 24 }}>Contact</Eyebrow>
            <h1
              style={{
                fontSize: 'clamp(48px, 5.5vw, 80px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                maxWidth: '14ch',
                margin: 0,
              }}
            >
              Let's look at your site.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: '46ch', marginTop: 32, color: 'var(--bone-200)' }}>
              Every engagement starts with a free GEO audit. We score your AI visibility across six categories, identify the highest-impact fixes, and walk through the findings together on a call. Book a time below and include your website URL so we can have the audit ready before we talk.
            </p>
            <div
              style={{
                marginTop: 48,
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                color: 'var(--mute-400)',
                lineHeight: 1.8,
              }}
            >
              <div>
                Prefer email?{' '}
                <a
                  href="mailto:andrew@forecite.agency"
                  style={{
                    color: 'var(--gold-500)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--gold-500)',
                  }}
                >
                  andrew@forecite.agency
                </a>
              </div>
            </div>
          </div>

          {/* Cal.com inline scheduling embed */}
          <div style={{ minHeight: 580 }}>
            <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-geo-audit-walkthrough" />
          </div>
        </div>
      </Section>
    </main>
  );
}
