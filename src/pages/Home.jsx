import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

const STATS = [
  ['+35%', 'clicks for brands cited in AI Overviews vs. uncited competitors', 'https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update', 'Seer Interactive, 2025'],
  ['47%', 'of US adults used AI to find a local business in the past month', 'https://www.yext.com/blog/7-data-backed-facts-on-ai-trust-and-consumer-decision-making-in-2026', 'Yext, 2026'],
  ['-61%', 'organic click-through rate when AI Overviews appear', 'https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update', 'Seer Interactive, 2025'],
  ['38%', 'of AI Overview citations come from top-10 results. The rest come from elsewhere.', 'https://ahrefs.com/blog/ai-seo-statistics/', 'Ahrefs, 2026'],
];

const SERVICES = [
  { i: '01', t: 'Audit', b: 'Find out where you stand in AI search and what to fix first. We score your visibility across six categories, identify every gap, and rank the fixes by impact. Your first audit is on us.' },
  { i: '02', t: 'Implementation', b: 'We do the work the audit recommends, starting with the highest-impact changes. Schema markup, content rewrites for citability, llms.txt, author attribution, and the platform-specific signals that ChatGPT, Claude, Google AI Overviews, Perplexity, Gemini, and Bing Copilot each need to cite you.' },
  { i: '03', t: 'Ongoing optimization', b: "AI search doesn't sit still. Platforms change how they select sources constantly. We track those changes, adapt your strategy the same week, and re-audit quarterly so you can see what moved." },
];

const FAQ_TEASER = [
  ['What is GEO?', "GEO stands for generative engine optimization. It's the practice of making your business visible in AI search, so when a potential customer asks ChatGPT or Google AI Overviews a question you should be answering, your business is one of the sources cited in the response."],
  ['How is this different from SEO?', 'SEO gets your website onto a ranked list. GEO gets your business cited in a written answer. According to Ahrefs (2026), only 38% of the sources cited in AI Overviews also rank in the top 10 search results. Your search ranking and your AI visibility are two different things.'],
  ['Why should I care right now?', "Brands cited in AI Overviews earn 35% more clicks than uncited competitors on the same search (Seer Interactive, 2025). At the same time, 47% of US adults used AI to find a local business in the past month (Yext, 2026). Most businesses haven't caught up to this shift yet. The ones that move first will own the citations their competitors spend years trying to earn back."],
];

export default function Home() {
  return (
    <main>
      <Meta
        title="Forecite · When customers ask AI, you're the answer."
        description="Generative engine optimization. ChatGPT, Claude, Google AI Overviews, Perplexity, Gemini, Bing Copilot. Forecite makes sure your business is cited in the answer."
        path="/"
      />

      {/* HERO — static (no scattered-language atmosphere; motion deferred per Session 1 plan) */}
      <Section label="01 Home — Hero" style={{ paddingTop: 140, paddingBottom: 160 }}>
        <Eyebrow style={{ marginBottom: 36 }}>[Forecite] · Generative engine optimization</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(56px, 7vw, 104px)',
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            maxWidth: '14ch',
            margin: 0,
            textWrap: 'balance',
          }}
        >
          When customers ask AI, you're the answer.
        </h1>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            maxWidth: '46ch',
            marginTop: 32,
            color: 'var(--bone-200)',
          }}
        >
          ChatGPT, Claude, Google AI Overviews, Perplexity, Gemini. Your customers are already there. The businesses that build citation coverage now will own the answers their competitors spend years trying to earn back. We make sure you're first.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 48 }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="primary">
              Get your free audit <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
            </Button>
          </Link>
          <Link to="/audit" style={{ textDecoration: 'none' }}>
            <Button variant="ghost">See a real audit</Button>
          </Link>
        </div>
        <div
          style={{
            marginTop: 96,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--border-bone-on-forest)',
          }}
        >
          {STATS.map(([k, v, url, src], i) => (
            <div
              key={i}
              style={{
                padding: '24px 0',
                borderRight: i < 3 ? '1px solid var(--border-bone-on-forest)' : 'none',
                paddingLeft: i ? 24 : 0,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 500 }}>{k}</div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--mute-400)',
                  marginTop: 8,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {v}
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--mute-500)',
                  marginTop: 6,
                  display: 'inline-block',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--mute-500)',
                }}
              >
                {src}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section
        label="01 Home — Services"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <Eyebrow style={{ marginBottom: 24 }}>What we do</Eyebrow>
        <h2
          style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '20ch',
            margin: '0 0 64px',
          }}
        >
          Every engagement starts with an audit and is scoped to your business.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {SERVICES.map((s) => (
            <div
              key={s.i}
              style={{
                borderTop: '1px solid var(--border-bone-on-forest)',
                borderRight: '1px solid var(--border-bone-on-forest)',
                padding: '32px 28px 40px',
                minHeight: 320,
              }}
            >
              <Eyebrow>{s.i}</Eyebrow>
              <h3 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.01em', margin: '24px 0 16px' }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--mute-400)', lineHeight: 1.6, maxWidth: '34ch' }}>
                {s.b}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <Button variant="ghost">
              Learn more about our services <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
            </Button>
          </Link>
        </div>
      </Section>

      {/* AUDIT TEASER */}
      <Section
        label="01 Home — Proof"
        style={{ paddingTop: 120, paddingBottom: 120, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <Eyebrow style={{ marginBottom: 24 }}>Proof</Eyebrow>
        <h2
          style={{
            fontSize: 'clamp(36px, 4.5vw, 56px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            margin: '0 0 24px',
            textWrap: 'balance',
            maxWidth: '20ch',
          }}
        >
          A med spa in Manhattan. Score: 52 out of 100.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--bone-200)', lineHeight: 1.55, maxWidth: '56ch', marginBottom: 36 }}>
          Twenty years in business. Thirteen practitioners. Press in Good Housekeeping and the Today Show. And when someone asks an AI platform about cosmetic treatments in New York, the practice barely shows up. We ran a full GEO audit across 12 pages and six scoring categories. The findings tell a story about what AI search actually needs to cite a business, and how far apart that is from what most businesses have in place.
        </p>
        <Link to="/audit" style={{ textDecoration: 'none' }}>
          <Button variant="ghost">
            Read the full audit <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
        </Link>
      </Section>

      {/* FAQ TEASER */}
      <Section
        label="01 Home — FAQ teaser"
        style={{ paddingTop: 96, paddingBottom: 120, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96 }}>
          <div>
            <Eyebrow>[FAQ]</Eyebrow>
            <h2 style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '20px 0 0' }}>
              Questions we hear most
            </h2>
          </div>
          <div>
            {FAQ_TEASER.map(([q, a]) => (
              <details key={q} style={{ borderTop: '1px solid var(--border-bone-on-forest)', padding: '24px 0' }}>
                <summary
                  style={{
                    cursor: 'pointer',
                    fontSize: 20,
                    fontWeight: 500,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {q}
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--mute-400)' }}>+</span>
                </summary>
                <p style={{ marginTop: 16, color: 'var(--mute-400)', lineHeight: 1.6, maxWidth: '60ch' }}>{a}</p>
              </details>
            ))}
            <div style={{ borderTop: '1px solid var(--border-bone-on-forest)', paddingTop: 24, marginTop: 0 }}>
              <Link to="/faq" style={{ textDecoration: 'none' }}>
                <Button variant="ghost">
                  All questions <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SITEWIDE CTA */}
      <Section
        label="01 Home — CTA"
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
