import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import HeroBackground from '../components/HeroBackground.jsx';
import Meta from '../components/Meta.jsx';
// Imported through Vite so the build emits portrait-[hash].jpg. Each new
// portrait file ships at a fresh URL — no browser/CDN cache can serve a
// stale version. Static /public/portrait.jpg ate three iterations of
// "deployed but still showing the old image" — never doing that again.
import portraitImg from '../assets/portrait.jpg';

export default function About() {
  return (
    <main>
      <Meta
        title="About · Forecite"
        description="Forecite is run by Andrew Bushnell. Independent generative engine optimization audits and implementation. No layers between you and the work."
        path="/about"
      />

      <HeroBackground align="left" variant="B" label="04 About — Hero">
        <Eyebrow style={{ marginBottom: 24 }}>About</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(44px, 5.6vw, 80px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '14ch',
            margin: 0,
          }}
        >
          Why this exists
        </h1>
      </HeroBackground>

      {/* Block 02 — Why this matters (bone band, top edge is the color cut from hero).
          Two-col editorial layout: eyebrow + heading on the left, prose on the right.
          Brings these bone-tier sections into the same structural pattern as every
          other section on the site (FAQ 1fr 2fr, Block 04 1fr 1fr) — fixes the empty
          right-side on the prior single-column treatment. */}
      <Section
        surface="bone"
        label="04 About — Why this matters"
        style={{ paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="about-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>Context</Eyebrow>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                margin: '20px 0 0',
                maxWidth: '14ch',
              }}
            >
              Why this matters
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, color: 'var(--fg-1)', lineHeight: 1.65, marginBottom: 24 }}>
              Most business owners don't yet know AI search exists as a discovery channel. The ones who do tend to underestimate it. They look at an AI mention the way they'd look at a Google result, and Google results have been losing trust for years.
            </p>
            <p style={{ fontSize: 18, color: 'var(--fg-1)', lineHeight: 1.65 }}>
              An AI citation is a different kind of signal. When someone asks ChatGPT or Claude or Perplexity which therapist to call, which dentist to use, which firm to hire, and a name comes back, the user weights that name more heavily than they would a sponsored link. Right or wrong, people see god in the machine. They trust what the AI says more than they trust what an algorithm ranked. Customers are deciding inside those answers right now, ahead of competitors who haven't noticed there's a decision to make. That's the bet behind the name: foresight in a market where citation is the new currency.
            </p>
          </div>
        </div>
      </Section>

      {/* Block 03 — What Forecite does (bone band continues; borderTop becomes a
          forest-on-bone divider via scope override). Same two-col editorial layout
          as Block 02. */}
      <Section
        surface="bone"
        label="04 About — What Forecite does"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div className="about-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>Approach</Eyebrow>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.6vw, 44px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                margin: '20px 0 0',
                maxWidth: '14ch',
              }}
            >
              What Forecite does
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, color: 'var(--fg-1)', lineHeight: 1.65, marginBottom: 24 }}>
              Most agencies are still optimizing for Google. In sectors where customers are already turning to AI first, like healthcare, legal, and financial advisory, that strategy isn't enough. Forecite finds where AI platforms aren't recommending your business and fixes the structural reasons why. Implementation is scoped to your site's actual gaps, not a generic checklist. Ongoing adaptation tracks platform changes so visibility holds as the platforms shift.
            </p>
            <p style={{ fontSize: 18, color: 'var(--fg-1)', lineHeight: 1.65 }}>
              Hiring someone to do this work should mean not having to learn what llms.txt is.
            </p>
          </div>
        </div>
      </Section>

      {/* Block 04 — How this works */}
      <Section
        label="04 About — How this works"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div className="about-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div style={{ maxWidth: '48ch' }}>
            <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
              When you work with Forecite, you work with me. I run your audit, scope the engagement, and handle the implementation. There's no layer between us. I take on fewer clients because of that, and each engagement gets the full depth of the methodology and tools I've built.
            </p>
          </div>
          <div className="person-row" style={{ display: 'flex', alignItems: 'start', gap: 24 }}>
            {/* Founder portrait. Renders at the source file's native aspect —
                no aspect-ratio lock, no object-fit:cover — so the photo is
                NEVER cropped by the layout. Whatever Andrew puts at
                /portrait.jpg shows in full, exactly as composed. Fixed at
                240px wide; height auto follows the file's native ratio.
                Sits LEFT of the bio block (horizontal flex). */}
            <img
              src={portraitImg}
              alt="Andrew Bushnell"
              style={{
                width: 240,
                height: 'auto',
                border: '1px solid var(--border-bone-on-forest-hover)',
                flexShrink: 0,
                display: 'block',
              }}
            />
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em', margin: 0 }}>
                Andrew Bushnell
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--gold-500)',
                  marginTop: 6,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}
              >
                Principal
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--mute-400)',
                  lineHeight: 1.65,
                  marginTop: 16,
                  maxWidth: '40ch',
                }}
              >
                Boston College, MA from Johns Hopkins SAIS, eight years across Taiwan and Mainland China, thesis in Chinese on Taiwan's semiconductor industry — the substrate of the AI boom now reshaping consumer discovery.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SITEWIDE CTA */}
      <Section
        label="04 About — CTA"
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
        <Button as={Link} to="/contact" variant="primary">
          Get your free audit <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
        </Button>
      </Section>
    </main>
  );
}
