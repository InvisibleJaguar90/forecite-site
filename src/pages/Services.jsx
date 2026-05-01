import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

const SERVICES = [
  {
    i: '01',
    t: 'GEO audit',
    lead: 'Find out where you stand in AI search and what to fix first.',
    body: [
      "When someone asks ChatGPT, Claude, or Google AI Overviews a question about what you do, does your business show up in the answer? The audit tells you. We score your AI visibility across six categories, identify every gap, and rank the fixes by how much they'll move the needle. You walk away knowing exactly what's working, what's not, and where to start.",
      'Your first audit is on us.',
    ],
    deliverables: [
      'AI visibility score with category breakdown',
      'Ranked findings with a prioritized action plan',
      'Walkthrough call to go through it together',
    ],
  },
  {
    i: '02',
    t: 'Implementation',
    lead: 'We do the work the audit recommends, starting with the highest-impact fixes.',
    body: [
      'After the audit, we scope an implementation plan specific to your site and your goals. The work follows your audit findings, not a generic checklist. We start with the changes that will have the biggest effect on whether AI platforms cite you, then work outward from there.',
      'The work spans three layers. Structural changes are things your visitors never see but AI systems rely on. Content work means rewriting pages so AI can actually extract and cite useful answers from your site. And off-site work builds your presence on the platforms AI pulls from most.',
      "We don't run the same playbook twice. What shapes the work is your site, your competitive landscape, the platforms your customers actually use. An engagement for a cosmetic surgery group competing in Manhattan has almost nothing in common with one for a nonprofit clinic serving rural patients.",
    ],
    deliverables: null,
  },
  {
    i: '03',
    t: 'Ongoing optimization',
    lead: "AI search doesn't sit still. Neither do we.",
    body: [
      "The platforms that answer your customers' questions change how they find and cite sources constantly. A schema format that worked in January gets deprecated in March. A new AI platform gains traction and starts pulling from sources the others ignore. Google adjusts how AI Overviews selects citations, and sites that were visible last quarter drop out.",
      "Keeping up with this is a job in itself, and it's not yours. We track platform changes as they happen. When Google restructures AI Overviews, or ChatGPT shifts how it selects sources, your strategy adapts the same week. Your competitors find out three months later, when the leads dry up and they can't figure out why.",
      "The quarterly re-audit measures how far you've moved and where the next wave of visibility is, so you can focus on running your business while we keep AI sending people to it.",
    ],
    deliverables: null,
  },
];

export default function Services() {
  return (
    <main>
      <Meta
        title="Services · Forecite"
        description="Audit, implementation, and ongoing optimization for AI search visibility. Every engagement starts with an audit and is scoped to your business."
        path="/services"
      />

      <Section label="02 Services — Hero" style={{ paddingTop: 140, paddingBottom: 96 }}>
        <Eyebrow style={{ marginBottom: 24 }}>Services</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '18ch',
            margin: 0,
          }}
        >
          What we do
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: '52ch', marginTop: 32, color: 'var(--bone-200)' }}>
          Every engagement starts with an audit and is scoped to your business. No packages, no templates.
        </p>
      </Section>

      {SERVICES.map((s) => (
        <Section
          key={s.i}
          label={`02 Services — ${s.t}`}
          style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr' + (s.deliverables ? ' 1fr' : ''),
              gap: 64,
              alignItems: 'start',
            }}
          >
            <Eyebrow style={{ paddingTop: 8 }}>{s.i}</Eyebrow>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  margin: 0,
                  textWrap: 'balance',
                }}
              >
                {s.t}
              </h2>
              <p
                style={{
                  fontSize: 22,
                  lineHeight: 1.4,
                  marginTop: 24,
                  maxWidth: '24ch',
                  color: 'var(--bone-200)',
                }}
              >
                {s.lead}
              </p>
              {s.body.map((paragraph, pi) => (
                <p
                  key={pi}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'var(--mute-400)',
                    marginTop: pi === 0 ? 24 : 16,
                    maxWidth: '52ch',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {s.deliverables && (
              <div style={{ borderLeft: '1px solid var(--border-bone-on-forest)', paddingLeft: 32 }}>
                <Eyebrow style={{ marginBottom: 16 }}>Deliverables</Eyebrow>
                {s.deliverables.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 12,
                      padding: '10px 0',
                      borderTop: i ? '1px solid var(--border-bone-on-forest)' : 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 13,
                    }}
                  >
                    <span style={{ color: 'var(--gold-500)' }}>·</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>
      ))}

      <Section
        label="02 Services — CTA"
        style={{ paddingTop: 120, paddingBottom: 144, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            maxWidth: '20ch',
            margin: '0 0 24px',
          }}
        >
          Start with the audit.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.6, maxWidth: '48ch', marginBottom: 36 }}>
          Free, specific to your business, and you'll see exactly how AI search sees you today.
        </p>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Button variant="primary">
            Get your free audit <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
        </Link>
      </Section>
    </main>
  );
}
