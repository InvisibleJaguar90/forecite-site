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

      {/* Block 01 — the insight */}
      <Section
        label="04 About — The insight"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ maxWidth: '62ch' }}>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            About two years ago, I noticed something changing in how people find businesses online. The questions they typed into Google were being answered before they ever saw a list of links. ChatGPT was pulling answers from sources most business owners had never heard of. Google's AI Overviews were citing pages that had nothing to do with traditional search rankings. Perplexity was building its own index entirely. Around the same time, researchers at Princeton, Georgia Tech, and the Allen Institute for AI published{' '}
            <a
              href="https://arxiv.org/abs/2311.09735"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--gold-500)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--gold-500)',
              }}
            >
              the paper
            </a>{' '}
            that gave the field its name: generative engine optimization. The discipline was new, but the problem it described was already everywhere.
          </p>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            I started auditing businesses to understand the pattern. What I found was consistent across industries: companies that had invested heavily in SEO for years were invisible to these platforms. Their competitors, sometimes with weaker sites and thinner content, were getting cited because they had the right structural signals in the right places. The problem was measurable and fixable, and almost nobody was doing the work.
          </p>
        </div>
      </Section>

      {/* Block 02 — what I built */}
      <Section
        label="04 About — What I built"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ maxWidth: '62ch' }}>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65, marginBottom: 24 }}>
            I spent the better part of a year building content systems and optimization tools for businesses navigating this shift. The audit framework behind Forecite came out of that work: six scoring categories, over 30 findings per site, every fix ranked by impact. I've run it across enough industries now to know what the patterns look like and where the highest-leverage changes sit.
          </p>
          <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
            Forecite exists because this work shouldn't require a business owner to understand schema markup or know what llms.txt is. Someone should just measure it, explain what matters, and do the fixes.
          </p>
        </div>
      </Section>

      {/* Block 03 — how this works */}
      <Section
        label="04 About — How this works"
        style={{ paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-bone-on-forest)' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div style={{ maxWidth: '48ch' }}>
            <p style={{ fontSize: 18, color: 'var(--bone-200)', lineHeight: 1.65 }}>
              When you work with Forecite, you work with me. I run your audit, scope the engagement, and handle the implementation. There's no layer between us. I take on fewer clients because of that, and each engagement gets the full depth of the methodology and tools I've built.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'start', gap: 24 }}>
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
