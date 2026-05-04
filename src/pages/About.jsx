import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

export default function About() {
  return (
    <main>
      <Meta
        title="About · Forecite"
        description="Forecite is run by Andrew Bushnell. Independent generative engine optimization audits and implementation. No layers between you and the work."
        path="/about"
      />

      <Section label="04 About — Hero" style={{ paddingTop: 140, paddingBottom: 96 }}>
        <Eyebrow style={{ marginBottom: 24 }}>About</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '16ch',
            margin: 0,
          }}
        >
          Why this exists
        </h1>
      </Section>

      {/* Block 02 — How I noticed */}
      <Section
        label="04 About — How I noticed"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ maxWidth: '62ch' }}>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            Boston College, then 2017 to 2025 across Taiwan and Mainland China. I taught history in Taiwan, did language school, and went on to Johns Hopkins SAIS for an MA in International Relations with concentrations in China Studies and International Economics. My thesis on Taiwan's semiconductor industry and energy security was written in Chinese. I spent those years thinking about chips and the geopolitics built around them.
          </p>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            Late 2022 happened in the middle of that work. ChatGPT shipped, the AI boom that the chip industry had been priming for years became visible to everyone at once, and I started watching the consumer-discovery side of the same wave. The same compute substrate that was driving AI capability was about to reshape how people find businesses. The chip story I had been tracking and the search-behavior story I started seeing were the same story.
          </p>
        </div>
      </Section>

      {/* Block 03 — What I think is happening */}
      <Section
        label="04 About — What I think is happening"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ maxWidth: '62ch' }}>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            Most business owners don't yet know AI search exists as a discovery channel. The ones who do tend to underestimate it. They look at an AI mention the way they'd look at a Google result, and Google results have been losing trust for years.
          </p>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            An AI citation is a different kind of signal. When someone asks ChatGPT or Claude or Perplexity which therapist to call, which dentist to use, which firm to hire, and a name comes back, the user weights that name more heavily than they would a sponsored link. Right or wrong, people see god in the machine. They trust what the AI says more than they trust what an algorithm ranked. Customers are deciding inside those answers right now, ahead of competitors who haven't noticed there's a decision to make.
          </p>
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
              When you work with Forecite, you work with me. I run your audit, scope the engagement, and handle the implementation. There's no layer between us. I take on fewer clients because of that, and each engagement gets the full depth of the methodology and tools I've built. Hiring someone to do this work should mean not having to learn what llms.txt is. Someone should just measure it, explain what matters, and do the fixes.
            </p>
          </div>
          <div className="person-row" style={{ display: 'flex', alignItems: 'start', gap: 24 }}>
            {/* Photo placeholder — real portrait lands in Session 4 */}
            <div
              aria-hidden
              style={{
                width: 120,
                height: 120,
                background: 'var(--forest-700)',
                border: '1px solid var(--border-bone-on-forest-hover)',
                flexShrink: 0,
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
                Founder
              </div>
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
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Button variant="primary">
            Get your free audit <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
        </Link>
      </Section>
    </main>
  );
}
