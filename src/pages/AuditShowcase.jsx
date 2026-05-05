import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import HeroBackground from '../components/HeroBackground.jsx';
import Meta from '../components/Meta.jsx';
import { CASE_STUDIES, DEFAULT_TAB_ID } from '../data/caseStudies.js';

// Reads the location hash and returns the case study id if it matches one,
// otherwise the default. Fragment ids: #med-spa, #dental, #legal, #financial.
function parseHashId() {
  if (typeof window === 'undefined') return DEFAULT_TAB_ID;
  const raw = window.location.hash.replace(/^#/, '');
  const found = CASE_STUDIES.find((cs) => cs.id === raw);
  return found ? found.id : DEFAULT_TAB_ID;
}

// Eased ease-out for the score-counter tween. Matches the editorial ease.
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Headline + score block. The score number renders at its final value in
// HTML (crawler-readable). On viewport entry, JS animates from 0 to value.
function HeadlineScoreBlock({ headline, score }) {
  const numberRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = numberRef.current;
    if (!el || animatedRef.current) return;

    // Honor reduced motion.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = String(score.value);
      animatedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const target = score.value;
            const duration = 1200;
            const start = performance.now();
            // Reset to 0 at start, then tween up. Final HTML already reads
            // the target value, so this is a one-shot replacement.
            el.textContent = '0';
            const tick = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = easeOutCubic(t);
              const current = Math.round(target * eased);
              el.textContent = String(current);
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = String(target);
              }
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [score.value]);

  // Color: gold for Fair (>= 60), alert (red) otherwise. Pure Financial at 59
  // is right at the edge — treat 59 as alert (Poor) per the formula score
  // approach we agreed on. Threshold: >= 60 = gold.
  const isFair = score.value >= 60;

  return (
    <section className="cs-headline-section">
      <h2 className="cs-chapter-title">{headline}</h2>
      <div className="cs-score-block">
        <div
          ref={numberRef}
          className={'cs-score-number' + (isFair ? ' is-fair' : '')}
          aria-label={`Overall score: ${score.value} out of 100`}
        >
          {score.value}
        </div>
        <div className="cs-score-suffix">{score.label}</div>
        <p className="cs-score-context">{score.context}</p>
      </div>
    </section>
  );
}

// Renders the optional sector-unique visual block that sits under a finding.
// Type dispatch: table | byline | code-diff | checklist.
function FindingExtra({ extra }) {
  if (!extra) return null;
  if (extra.type === 'table') {
    return (
      <div className="cs-extra cs-extra-table">
        {extra.caption && <div className="cs-extra-caption">{extra.caption}</div>}
        <table>
          <thead>
            <tr>
              {extra.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {extra.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (extra.type === 'byline') {
    return (
      <div className="cs-extra cs-extra-byline">
        {extra.caption && <div className="cs-extra-caption">{extra.caption}</div>}
        <div className="cs-byline-card">
          <div className="cs-byline-title">{extra.postTitle}</div>
          <div className="cs-byline-meta">
            <span className="cs-byline-prefix">{extra.bylinePrefix}</span>
            <span className="cs-byline-name">{extra.bylineName}</span>
            <span className="cs-byline-sep"> · </span>
            <span className="cs-byline-date">{extra.date}</span>
          </div>
        </div>
      </div>
    );
  }
  if (extra.type === 'code-diff') {
    return (
      <div className="cs-extra cs-extra-codediff">
        {extra.caption && <div className="cs-extra-caption">{extra.caption}</div>}
        <div className="cs-codediff-grid">
          <div className="cs-codediff-col cs-codediff-before">
            <div className="cs-codediff-label">{extra.beforeLabel}</div>
            <pre><code>{extra.beforeCode}</code></pre>
          </div>
          <div className="cs-codediff-col cs-codediff-after">
            <div className="cs-codediff-label">{extra.afterLabel}</div>
            <pre><code>{extra.afterCode}</code></pre>
          </div>
        </div>
      </div>
    );
  }
  if (extra.type === 'checklist') {
    return (
      <div className="cs-extra cs-extra-checklist">
        {extra.caption && <div className="cs-extra-caption">{extra.caption}</div>}
        <ul>
          {extra.items.map((item, i) => (
            <li key={i} className={item.missing ? 'is-missing' : ''}>
              <span className="cs-checklist-mark" aria-hidden="true">
                {item.missing ? '×' : '✓'}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

// Three audit findings, each with reveal-on-scroll.
function Findings({ findings }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll('.cs-finding');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [findings]);

  return (
    <section className="cs-findings-section" ref={containerRef}>
      <div className="cs-findings-eyebrow">From the audit</div>
      {findings.map((f, i) => (
        <article className="cs-finding" key={i}>
          <div className="cs-finding-label">Finding 0{i + 1}</div>
          <h3 className="cs-finding-title">{f.title}</h3>
          <p className="cs-finding-body">{f.body}</p>
          <FindingExtra extra={f.extra} />
        </article>
      ))}
    </section>
  );
}

// 30/60/90 Gameplan with three phases. Each phase has its own observer for
// the in-view state (drives outcome scale/opacity + divider line draw).
// Highlight bullets get a separate, narrower-focus observer that toggles
// is-focused as the bullet passes through the middle of the viewport.
function Gameplan({ gameplan }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Phase visibility observer.
    const phases = container.querySelectorAll('.cs-phase');
    const phaseObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -15% 0px' },
    );
    phases.forEach((el) => phaseObserver.observe(el));

    // Highlight bullet focus observer — narrow band centered on viewport.
    const highlights = container.querySelectorAll('.cs-bullet.is-highlight');
    const focusObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-focused');
          } else {
            entry.target.classList.remove('is-focused');
          }
        }
      },
      // ~30% strip in the middle of the viewport
      { threshold: 0, rootMargin: '-35% 0px -35% 0px' },
    );
    highlights.forEach((el) => focusObserver.observe(el));

    return () => {
      phaseObserver.disconnect();
      focusObserver.disconnect();
    };
  }, [gameplan]);

  return (
    <section className="cs-gameplan-section" ref={containerRef}>
      <h2 className="cs-gameplan-heading">What we&rsquo;d do about it.</h2>
      {gameplan.phases.map((phase) => (
        <div className="cs-phase" key={phase.label}>
          <div className="cs-phase-label">{phase.label}</div>
          <p className="cs-phase-outcome">{phase.outcome}</p>
          <ul className="cs-bullets">
            {phase.items.map((item, i) => (
              <li
                key={i}
                className={'cs-bullet' + (item.highlight ? ' is-highlight' : '')}
              >
                <span className="cs-bullet-marker" aria-hidden="true">
                  {item.highlight ? '★' : '•'}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

// Single tab content. Renders all sections for one case study.
function CaseStudyTab({ study }) {
  return (
    <>
      <div className="cs-setup">{study.setup}</div>
      <HeadlineScoreBlock headline={study.headline} score={study.score} />
      <Findings findings={study.findings} />
      <Gameplan gameplan={study.gameplan} />
      <div className="cs-cta-section">
        <h2 className="cs-cta-headline">Get yours.</h2>
        <p className="cs-cta-sub">
          Free audit, scoped to your business. We do the work. You approve the direction. This isn&rsquo;t a fit if you can&rsquo;t grant site access, won&rsquo;t put a real expert&rsquo;s name on the content, or aren&rsquo;t ready for an ongoing program.
        </p>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Button variant="primary">
            Book your audit{' '}
            <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
        </Link>
      </div>
    </>
  );
}

export default function AuditShowcase() {
  const [activeId, setActiveId] = useState(parseHashId);
  const tabContentRef = useRef(null);

  // Initial mount: enable animations now that JS is loaded.
  useEffect(() => {
    document.documentElement.classList.add('cs-anim-ready');
    return () => document.documentElement.classList.remove('cs-anim-ready');
  }, []);

  // Sync activeId with location hash. Listen for hashchange events.
  useEffect(() => {
    const onHashChange = () => setActiveId(parseHashId());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleTabClick = useCallback(
    (id) => {
      setActiveId(id);
      // Push hash so deep links work and back-button restores prior tab.
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '#' + id);
      } else {
        window.location.hash = id;
      }
      // Scroll to the top of the tab content (just below the sticky tab bar).
      // requestAnimationFrame so the browser paints the new content first.
      requestAnimationFrame(() => {
        const target = tabContentRef.current;
        if (!target) return;
        const topbarH =
          parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topbar-h')) || 72;
        const tabsH = 64; // approximate; covered by the sticky tab bar
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - (topbarH + tabsH) - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    },
    [],
  );

  const study = CASE_STUDIES.find((cs) => cs.id === activeId) || CASE_STUDIES[0];

  return (
    <main>
      <Meta
        title="Case studies · Forecite"
        description="Four real GEO audits across med spa, dental, legal, and financial advisory. Findings, scores, and a 30/60/90 gameplan for each. Names changed."
        path="/audit"
      />

      {/* HERO — Celestia background, content in right-open column (Session 4 item 2) */}
      <HeroBackground align="right" label="03 Audit — Hero">
        <Eyebrow style={{ marginBottom: 24 }}>Case studies</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(44px, 5.4vw, 80px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '14ch',
            margin: 0,
          }}
        >
          Four real audits.
        </h1>
        <h2
          style={{
            fontSize: 'clamp(20px, 2.2vw, 28px)',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: 'var(--gold-500)',
            fontFamily: 'var(--font-mono)',
            margin: '16px 0 0',
          }}
        >
          What we found. What we&rsquo;d do.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            maxWidth: '46ch',
            marginTop: 32,
            color: 'var(--bone-200)',
          }}
        >
          Four real audits run on four real businesses across med spa, dental, legal, and financial advisory. Findings, scores, and recommendations are unedited. Business names and identifying details have been changed.
        </p>
      </HeroBackground>

      {/* TAB NAV */}
      <nav className="cs-tabs" aria-label="Case study sectors">
        <div className="cs-tabs-inner" role="tablist">
          {CASE_STUDIES.map((cs) => (
            <button
              key={cs.id}
              role="tab"
              type="button"
              className="cs-tab"
              aria-selected={cs.id === activeId}
              aria-controls={`cs-panel-${cs.id}`}
              id={`cs-tab-${cs.id}`}
              onClick={() => handleTabClick(cs.id)}
            >
              {cs.tab}
            </button>
          ))}
        </div>
      </nav>

      {/* TAB CONTENT */}
      <div
        ref={tabContentRef}
        role="tabpanel"
        id={`cs-panel-${activeId}`}
        aria-labelledby={`cs-tab-${activeId}`}
        // Force a fresh subtree per tab so observers + animations re-init cleanly.
        key={activeId}
      >
        <CaseStudyTab study={study} />
      </div>
    </main>
  );
}
