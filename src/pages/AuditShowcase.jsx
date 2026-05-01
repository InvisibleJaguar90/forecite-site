import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

// Category scores from the real Tribeca MedSpa audit (redacted)
const CATEGORIES = [
  { name: 'Technical Foundations', score: 72, color: 'var(--gold-500)' },
  { name: 'Content & E-E-A-T', score: 67, color: 'var(--gold-500)' },
  { name: 'Schema & Structured Data', score: 55, color: 'var(--gold-500)' },
  { name: 'AI Citability', score: 50, color: 'var(--alert-500)' },
  { name: 'Platform Optimization', score: 40, color: 'var(--alert-500)' },
  { name: 'Brand Authority', score: 28, color: 'var(--alert-500)' },
];

const PLATFORMS = [
  { name: 'Google AI Overviews', score: 56, missing: 'No publication dates, no comparison tables, no author bylines' },
  { name: 'Google Gemini', score: 54, missing: 'No LocalBusiness schema, incomplete entity data' },
  { name: 'Bing Copilot', score: 42, missing: 'No IndexNow, no Bing Webmaster Tools, weak LinkedIn' },
  { name: 'ChatGPT', score: 32, missing: 'No Wikipedia or Wikidata entity, weak Bing optimization' },
  { name: 'Perplexity', score: 14, missing: 'Zero Reddit presence, no original research data' },
];

const FINDINGS = [
  {
    title: 'Thirteen practitioners, zero author attribution',
    body: 'The team page lists 13 qualified providers, including a board-certified dermatologist and a board-certified plastic surgeon. Credentials, training, and specialties are all documented there. None of that information is connected to the content those providers inform. Blog posts carry no byline. Service pages carry no author. AI systems evaluating medical content for trustworthiness see a site where nobody is willing to put their name on anything.',
  },
  {
    title: "Twenty years of press coverage AI can't verify",
    body: "This practice has been featured in nationally recognized publications. Awards, designations, and media logos appear on the site. But no Wikipedia article exists. No Wikidata entry. No structured link between the brand and its press history in any format an AI system can verify. ChatGPT draws 47.9% of its citations from Wikipedia. Without an entity there, the practice's entire press history is invisible to the platform that answers the most consumer health and beauty questions.",
  },
  {
    title: "Two locations, and AI doesn't know about either one",
    body: 'The site runs two physical locations in different neighborhoods. The schema markup contains an Organization type with a name, a URL, and a logo set to 1-pixel-by-1-pixel dimensions. No address. No phone number. No hours. No geo-coordinates. For any location-based query, "best med spa near me," "botox in [neighborhood]," AI platforms have no structured way to know this business is local, or where it is.',
  },
];

function ScoreBar({ label, score, color }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 13 }}>
        <span>{label}</span>
        <span style={{ color }}>{score}</span>
      </div>
      <div style={{ height: 4, background: 'var(--forest-700)', borderRadius: 2 }}>
        <div
          style={{
            height: '100%',
            width: score + '%',
            background: color,
            borderRadius: 2,
            transition: 'width 800ms var(--ease-editorial)',
          }}
        />
      </div>
    </div>
  );
}

export default function AuditShowcase() {
  return (
    <main>
      <Meta
        title="Audit showcase · Forecite"
        description="A real GEO audit, redacted for privacy. Manhattan med spa scored 52 out of 100. See how AI search reads a successful 20-year-old business, and what's missing."
        path="/audit"
      />

      {/* HERO */}
      <Section label="03 Audit — Hero" style={{ paddingTop: 140, paddingBottom: 96 }}>
        <Eyebrow style={{ marginBottom: 24 }}>Proof</Eyebrow>
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
          A med spa in Manhattan. Score: 52 out of 100.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: '54ch', marginTop: 32, color: 'var(--bone-200)' }}>
          A real GEO audit, redacted for privacy. This is what we find when we look under the hood.
        </p>
      </Section>

      {/* BLOCK 01 — THE SETUP */}
      <Section
        label="03 Audit — Setup"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ maxWidth: '62ch' }}>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            Twenty years in business. Two locations. A physician-led medical team of 13 practitioners with board certifications in dermatology, plastic surgery, and aesthetics. Press features in Good Housekeeping, Today Show, Town & Country, and Manhattan Magazine. A Diamond Level Allergan designation. Over 150 Yelp reviews.
          </p>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            By any conventional measure, this is a successful, well-established practice.
          </p>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            We ran a GEO audit across 12 pages of their site. The question was simple: when someone asks ChatGPT, Claude, Google AI Overviews, or Perplexity a question this practice should be answering, does the practice show up?
          </p>
        </div>
      </Section>

      {/* BLOCK 02 — OVERALL SCORE */}
      <Section
        label="03 Audit — Score"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 64 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(80px, 10vw, 140px)',
              fontWeight: 500,
              color: 'var(--alert-500)',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            52
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                color: 'var(--mute-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 12,
              }}
            >
              out of 100 · Poor
            </div>
            <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, maxWidth: '52ch' }}>
              This practice has spent two decades building the kind of reputation that should make it a primary source for AI platforms answering questions about cosmetic treatments in New York. Instead, most of that authority sits in formats AI systems either can't find or can't parse.
            </p>
          </div>
        </div>
      </Section>

      {/* BLOCK 03 — CATEGORY BREAKDOWN */}
      <Section
        label="03 Audit — Categories"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <Eyebrow style={{ marginBottom: 48 }}>Category breakdown</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            {CATEGORIES.map((c) => (
              <ScoreBar key={c.name} label={c.name} score={c.score} color={c.color} />
            ))}
          </div>
          <div>
            <p style={{ fontSize: 16, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 20 }}>
              Two categories scored above average. The site runs on WordPress with server-side rendering, which means AI crawlers can read the HTML without executing JavaScript. That alone puts the technical floor higher than most. And the content is real: FAQ sections with 13 treatment questions and direct answers on a single service page, before-and-after photography, published pricing.
            </p>
            <p style={{ fontSize: 16, color: 'var(--bone-200)', lineHeight: 1.65 }}>
              The problem is everywhere else. Brand Authority at 28 means the platforms AI relies on for verification, Wikipedia, Reddit, LinkedIn, have almost no signal that this practice exists. Platform Optimization at 40 means five different AI systems are each missing different pieces of what they need to cite this business.
            </p>
          </div>
        </div>
      </Section>

      {/* BLOCK 04 — PLATFORM DASHBOARD */}
      <Section
        label="03 Audit — Platforms"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <Eyebrow style={{ marginBottom: 48 }}>What the platforms see</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              style={{
                borderTop: '1px solid var(--border-bone-on-forest)',
                borderRight: i < 4 ? '1px solid var(--border-bone-on-forest)' : 'none',
                padding: '28px 20px 32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 32,
                  fontWeight: 500,
                  color: p.score >= 50 ? 'var(--gold-500)' : 'var(--alert-500)',
                }}
              >
                {p.score}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--mute-400)',
                  marginTop: 8,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {p.name}
              </div>
              <p style={{ fontSize: 13, color: 'var(--mute-500)', lineHeight: 1.5, marginTop: 12 }}>
                {p.missing}
              </p>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: '62ch', marginTop: 40 }}>
          <p style={{ fontSize: 16, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 20 }}>
            Each platform pulls from different sources and weighs different signals. Google AI Overviews leans on structured headings, tables, and freshness dates. ChatGPT leans on Wikipedia and Bing's index. Perplexity leans on Reddit and community content. A site can score well on one and be invisible on another.
          </p>
          <p style={{ fontSize: 16, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            This practice's Perplexity score is 14 out of 100. Reddit accounts for nearly half of Perplexity's citations. This practice has zero Reddit threads discussing it. For anyone using Perplexity to find a med spa in Manhattan, this business does not exist.
          </p>
        </div>
      </Section>

      {/* BLOCK 05 — THREE FINDINGS */}
      <Section
        label="03 Audit — Findings"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <Eyebrow style={{ marginBottom: 48 }}>Three findings that tell the story</Eyebrow>
        {FINDINGS.map((f, i) => (
          <div
            key={i}
            style={{
              borderTop: '1px solid var(--border-bone-on-forest)',
              padding: '32px 0',
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 32,
            }}
          >
            <Eyebrow style={{ paddingTop: 4 }}>0{i + 1}</Eyebrow>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em', margin: '0 0 16px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 16, color: 'var(--mute-400)', lineHeight: 1.65, maxWidth: '60ch' }}>
                {f.body}
              </p>
            </div>
          </div>
        ))}
      </Section>

      {/* BLOCK 06 — WHAT MOVES */}
      <Section
        label="03 Audit — What moves"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <Eyebrow style={{ marginBottom: 24 }}>What moves</Eyebrow>
        <div style={{ maxWidth: '62ch' }}>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            The audit doesn't just score. It ranks every fix by impact and sequences a 30-day action plan.
          </p>
          <p style={{ fontSize: 16, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            For this practice, the five highest-leverage changes could be completed in a single afternoon: adding their LinkedIn profile to the site's entity data, creating a Wikidata entry with founding date and location, registering with Bing's webmaster tools, enabling instant indexing for new content, and deploying a machine-readable site summary for AI crawlers. Combined, those five changes would move the overall score by an estimated 8 to 12 points.
          </p>
          <p style={{ fontSize: 16, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            The deeper structural work, connecting practitioners to the content they inform, building the Wikipedia case from existing press coverage, beginning authentic community engagement in the forums Perplexity actually reads, fills weeks two through four and moves the score further.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section
        label="03 Audit — CTA"
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
          What would your score be?
        </h2>
        <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.6, maxWidth: '48ch', marginBottom: 36 }}>
          Every audit is specific to your site, your platforms, and your competitive landscape. The first one is free.
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
