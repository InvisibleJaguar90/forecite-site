import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import HeroBackground from '../components/HeroBackground.jsx';
import Meta from '../components/Meta.jsx';

const STEPS = [
  { i: '01', t: 'Audit', anchor: '#audit' },
  { i: '02', t: 'Implementation', anchor: '#implementation' },
  { i: '03', t: 'Adaptation', anchor: '#adaptation' },
];

const CATEGORIES = [
  'AI Citability',
  'Brand Authority',
  'Content & E-E-A-T',
  'Technical Foundations',
  'Schema & Structured Data',
  'Platform Optimization',
];

const SERVICES = [
  {
    i: '01',
    id: 'audit',
    t: 'Audit',
    lead: 'Find out where you stand in AI search and what to fix first.',
    body: [
      { type: 'p', text: 'When someone asks ChatGPT, Claude, or Google AI Overviews a question about what you do, does your business show up in the answer? The audit tells you. We score your AI visibility across six categories:' },
      { type: 'categories', items: CATEGORIES },
      { type: 'p', text: "Then we rank the fixes by how much they'll move the needle and walk you through the findings together. You leave knowing exactly what's working, what's not, and where to start." },
      { type: 'p', text: 'Your first audit is on us.' },
    ],
    deliverables: [
      'AI visibility score with category breakdown',
      'Ranked findings with a prioritized action plan',
      'Walkthrough call to go through it together',
    ],
  },
  {
    i: '02',
    id: 'implementation',
    t: 'Implementation',
    lead: 'We do the work the audit recommends, starting with the highest-impact fixes.',
    body: [
      { type: 'p', text: 'After the audit, we scope an implementation plan specific to your site and your goals. The work follows your audit findings, not a generic checklist. We start with the changes that will have the biggest effect on whether AI platforms cite you, then work outward from there.' },
      { type: 'p', text: 'The work spans three layers. Structural changes are things your visitors never see but AI systems rely on. Content work means rewriting pages so AI can actually extract and cite useful answers from your site. And off-site work builds your presence on the platforms AI pulls from most.' },
      { type: 'p', text: "We don't run the same playbook twice. What shapes the work is your site, your competitive landscape, the platforms your customers actually use. An engagement for a cosmetic surgery group competing in Manhattan has little in common with one for a regional law firm in the Midwest." },
    ],
    deliverables: null,
  },
  {
    i: '03',
    id: 'adaptation',
    t: 'Adaptation',
    lead: "AI search doesn't sit still. Neither do we.",
    body: [
      { type: 'p', text: "The platforms that answer your customers' questions change how they find and cite sources constantly. A schema format that worked in January gets deprecated in March. A new AI platform gains traction and starts pulling from sources the others ignore. Google adjusts how AI Overviews selects citations, and sites that were visible last quarter drop out." },
      { type: 'p', text: "Keeping up with this is a job in itself, and it's not yours. We track platform changes as they happen. When Google restructures AI Overviews, or ChatGPT shifts how it selects sources, your strategy adapts the same week. Your competitors find out three months later, when the leads dry up and they can't figure out why." },
      { type: 'p', text: "The quarterly re-audit measures how far you've moved and where the next wave of visibility is, so you can focus on running your business while we keep AI sending people to it." },
    ],
    deliverables: null,
  },
];

export default function Services() {
  return (
    <main>
      <Meta
        title="Services · Forecite"
        description="Audit, implementation, and adaptation for AI search visibility. We get AI platforms recommending your business, and keep them recommending it as the platforms change."
        path="/services"
      />

      <HeroBackground align="left" label="02 Services — Hero">
        <Eyebrow style={{ marginBottom: 24 }}>Services</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(44px, 5.2vw, 80px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '14ch',
            margin: 0,
          }}
        >
          What we do
        </h1>
        <p style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.45, maxWidth: '32ch', marginTop: 32, color: 'var(--bone-200)' }}>
          We get AI platforms recommending your business.
        </p>
      </HeroBackground>

      {/* STEP CARDS — split out of hero (Session 4 item 2) */}
      <Section label="02 Services — Steps" style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div
          className="cards-3 services-steps"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--border-bone-on-forest)',
            borderBottom: '1px solid var(--border-bone-on-forest)',
          }}
        >
          {STEPS.map((step, i) => (
            <a
              key={step.i}
              href={step.anchor}
              className="services-step"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                padding: '32px 28px 36px',
                borderRight: i < STEPS.length - 1 ? '1px solid var(--border-bone-on-forest)' : 'none',
                display: 'block',
              }}
            >
              <Eyebrow>{step.i}</Eyebrow>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  margin: '20px 0 20px',
                }}
              >
                {step.t}
              </div>
              <span
                className="services-step-arrow"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--mute-400)',
                  fontSize: 14,
                  letterSpacing: '0.04em',
                }}
              >
                ↓ Read more
              </span>
            </a>
          ))}
        </div>
      </Section>

      {SERVICES.map((s) => (
        <Section
          key={s.i}
          id={s.id}
          label={`02 Services — ${s.t}`}
          style={{
            paddingTop: 96,
            paddingBottom: 96,
            borderTop: '1px solid var(--border-bone-on-forest)',
            scrollMarginTop: 'var(--topbar-h)',
          }}
        >
          <div
            className="services-row"
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
              {s.body.map((block, pi) => {
                if (block.type === 'categories') {
                  return (
                    <div
                      key={pi}
                      className="categories-grid"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px 32px',
                        margin: '20px 0 8px',
                        maxWidth: '52ch',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 13,
                      }}
                    >
                      {block.items.map((cat, ci) => (
                        <div key={ci} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                          <span style={{ color: 'var(--gold-500)', fontSize: 11, letterSpacing: '0.04em' }}>
                            {String(ci + 1).padStart(2, '0')}
                          </span>
                          <span>{cat}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
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
                    {block.text}
                  </p>
                );
              })}
            </div>
            {s.deliverables && (
              <div className="deliverables-col" style={{ borderLeft: '1px solid var(--border-bone-on-forest)', paddingLeft: 32 }}>
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
