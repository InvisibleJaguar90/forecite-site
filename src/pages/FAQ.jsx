import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

const FAQS_MAIN = [
  {
    q: 'What is GEO?',
    a: [
      "GEO stands for generative engine optimization. It's the practice of making your business visible in AI search.",
      'Here\'s what that looks like in practice. A potential customer opens ChatGPT and types "best med spa for Botox in Manhattan." Instead of getting a list of links, they get a written answer: a paragraph recommending specific businesses, with sources cited at the bottom. Or they Google a question and an AI Overview appears at the top of the page, answering the question directly and citing two or three businesses by name. Claude, Perplexity, Gemini, Bing Copilot all work the same way: the platform writes an answer and decides which businesses to mention.',
      'GEO is what determines whether your business is one of the ones that gets mentioned, or whether the answer sends your potential customer somewhere else.',
    ],
  },
  {
    q: 'How is this different from SEO?',
    a: [
      'SEO gets your website onto a ranked list. GEO gets your business cited in a written answer.',
      "That distinction matters because the signals that earn a citation are measurably different from the ones that earn a high search ranking. According to Ahrefs (2026), only 38% of the sources cited in Google AI Overviews also rank in the top 10 organic search results. 31% of citations come from pages that don't appear in the top 100 results at all.",
      'If your SEO is strong, that gives you a foundation. But search rankings and AI citations are diverging, not converging. Google AI Overviews is the most generous to traditional SEO of the six platforms, and even there a third of citations come from pages outside the top 100. ChatGPT runs on Bing. Perplexity favors Reddit. Claude has its own search index. Ranking first in Google increasingly doesn\'t put you in the answer that appears above it, let alone the answers on the platforms that don\'t touch Google at all.',
    ],
  },
  {
    q: 'Why should I care about AI search right now?',
    a: [
      'Because your customers are already using it. According to Yext (2026), 47% of US adults used AI to find a local business in the past month. Among households earning over $150,000, AI has overtaken Google as the starting point for local business discovery, by 53% to 49%.',
      'At the same time, AI Overviews now appear on 48% of all tracked Google searches in the US, up from 30% a year earlier (BrightEdge, 2026). In healthcare specifically, that number is 88%. When an AI Overview appears above standard search results, organic click-through rates on those results drop 61% (Seer Interactive, 2025). The traffic that used to come from ranking well is being absorbed by AI answers, and the trend is steepening, not levelling off.',
      "But here's the other side of that number: brands that are cited in AI Overviews earn 35% more clicks than uncited competitors on the same search (Seer Interactive, 2025). AI search is redistributing attention, and the businesses that show up in the answer are the ones capturing it.",
    ],
  },
  {
    q: 'What kinds of businesses do you work with?',
    a: [
      'Professional services businesses where AI search recommendations are starting to drive qualified leads. That includes medical and aesthetic practices (med spas, dental, dermatology, cosmetic surgery, concierge medicine), therapy and mental health practices, law firms, financial advisors, and other regulated or trust-dependent professional services.',
      "The common thread: high-consideration purchases where customers research before they commit, which means they're asking AI platforms questions like \"best [X] in [city]\" or \"how do I find a good [Y].\" If your business is what AI should be recommending in answer to those questions but isn't, our work applies.",
      "If you're outside professional services and you're seeing AI-driven discovery in your category, talk to us anyway. The methodology generalizes.",
    ],
  },
  {
    q: 'What does a GEO audit actually measure?',
    a: [
      'We score your AI visibility across six categories: AI Citability, Brand Authority, Content and E-E-A-T, Technical Foundations, Schema and Structured Data, and Platform Optimization. Each category captures a different dimension of how AI platforms decide whether to cite your business.',
      'The audit covers your website, your structured data, your presence on the specific platforms each AI system draws from, and the signals AI uses to verify that your business is real, credible, and relevant. We test against ChatGPT, Claude, Google AI Overviews, Google Gemini, Bing Copilot, and Perplexity individually, because each platform pulls from different sources and weighs different signals.',
      'You get a score, a ranked list of findings, and a prioritized action plan. The audit on our Proof page walks through a real example.',
    ],
  },
  {
    q: 'What happens after the audit?',
    a: [
      'We get on a call and walk through every finding together. If you want to move forward, we scope an implementation plan specific to your site and your audit results.',
      'The work typically starts with the highest-impact structural changes: expanding your schema markup, creating the files AI crawlers look for, and connecting your existing credentials and press coverage to the places AI systems actually check. From there it moves into content work, rewriting pages so AI can extract and cite clear answers from your site, creating FAQ content around the questions your customers actually ask, and attributing your content to the people who inform it rather than a marketing agency.',
      "Every engagement is scoped to what your audit found. We don't run the same playbook twice.",
    ],
  },
  {
    q: 'How long until I see results?',
    a: [
      'It depends on what gets fixed and which platform. Schema markup, llms.txt, and other technical changes show up in days to weeks as crawlers re-index. Content rewrites and new FAQ pages start appearing in AI answers over weeks to months. Brand authority work (Wikidata entities, off-site signals, review velocity) compounds over 3-6 months and keeps building from there.',
      'The fastest changes show in your re-audit score within the first quarter. The slowest ones build durable competitive moats and keep working for a year or more.',
      "The businesses that get visible quickly are the ones whose work targets the actual gaps. Generic checklists waste months. The audit-first approach is what makes sure the first quarter's work is the work that matters.",
    ],
  },
  {
    q: "Why can't I just do this once and be done?",
    a: [
      "Because the platforms change how they select sources constantly. A schema format that worked in January gets deprecated by March. Google adjusts how AI Overviews selects citations. A new platform gains traction and starts pulling from sources the others ignore.",
      'The content itself ages out, too. According to Seer Interactive (2025), 65% of AI citations target content published within the past year. Pages that were current six months ago get deprioritized as newer, better-structured content appears.',
      'Adaptation means we track these changes as they happen, adapt your strategy, publish fresh content, and re-audit quarterly (or whenever you want an updated read) so you can see what moved and where the next opportunities are.',
    ],
  },
  {
    q: 'How is this priced?',
    a: [
      'The audit is free. After that, pricing is project-scoped because the work is.',
      'Implementation is a one-time engagement priced against what your audit found. A site that needs schema and llms.txt only is a different scope than a site that also needs content rewrites across 30 pages and Wikidata entity creation.',
      "Adaptation is a monthly retainer that covers ongoing platform tracking, content updates, and quarterly re-audits. Retainer size scales with implementation work and the rate of change in your industry.",
      "We scope after the audit because that's when we know what the work actually is. Specifics come on the walkthrough call.",
    ],
  },
  {
    q: 'Is the audit really free?',
    a: [
      'Yes. No strings, no deposit, no commitment. You get the full six-category score, the ranked findings, and a walkthrough call.',
      "The honest version: we offer a free audit because seeing your specific gaps is more persuasive than any pitch. If the findings make the case for working together, we'll talk about next steps. If not, you keep the audit and we move on.",
    ],
  },
  {
    q: "What's your guarantee?",
    a: [
      "We don't guarantee a specific GEO score, and any agency that does is making a promise they can't keep. The platforms decide who they cite, not us, and the methodology that drives those decisions changes constantly.",
      'What we do guarantee: every recommendation in your audit is grounded in what we measured, not in a generic checklist. The work specified in your engagement gets done on the timeline we agreed to. The quarterly re-audit measures real progress against the prior baseline. If a recommendation we shipped didn\'t move what it was supposed to move, we revisit it at no additional cost.',
      "The honest version: most of what makes GEO work is the same patient compounding that makes any marketing channel work. The businesses that get visible are the ones whose work targets actual gaps and stays consistent through the platform changes. We're not selling magic. We're selling the discipline that gets to the magic.",
    ],
  },
];

const FAQS_TECHNICAL = [
  {
    q: 'What schema types do you implement?',
    a: [
      'The specific schema depends on what the audit finds, but common implementations include LocalBusiness (or a more specific subtype like Dentist, MedicalBusiness, or HealthAndBeautyBusiness), FAQPage, MedicalWebPage, and Person for practitioner profiles. We expand sameAs to include every verified profile the business maintains: Google Business Profile, Yelp, LinkedIn, RealSelf, Healthgrades, and others specific to the vertical. We add knowsAbout for topical authority and correct geo-coordinates, service areas, and opening hours.',
      "Everything is deployed as JSON-LD, injected through CMS settings (Yoast, RankMath, or equivalent) if we have access, or delivered as ready-to-paste code blocks with placement instructions if we don't.",
      'The reason schema matters this much: according to Authoritas (2025), pages with FAQPage structured data earn a 41% AI citation rate, compared to 9% for pages without it.',
    ],
  },
  {
    q: 'What is llms.txt and why does it matter?',
    a: [
      'llms.txt is a machine-readable plain text file placed at the root of your domain that gives AI systems a structured summary of your site. It serves a similar function to robots.txt or sitemap.xml, but is designed specifically for large language models. The file includes your business name, a plain-language description, key service areas, and links to your most important pages.',
      'Not every AI system reads it yet. But adoption is growing, and having the file in place costs nothing while providing an unambiguous signal to any crawler that does. We create and deploy this in the first week of every engagement.',
    ],
  },
  {
    q: 'How do you handle CMS access and implementation?',
    a: [
      'Our default is to request CMS access so we can implement changes directly. That means admin or editor-level access in whatever platform the site runs on: WordPress, Squarespace, Wix, Webflow, PatientPop, or a custom build. Direct access is faster, reduces back-and-forth, and lets us verify that schema, meta tags, author attribution, and new pages render correctly before anything goes live.',
      'If a client or their development team prefers not to grant access, we deliver everything as documented instructions: JSON-LD code blocks with exact placement, meta tag specifications, page copy with structural markup, plugin names with configuration settings, and screenshot-annotated walkthroughs. The work gets done either way. Direct access compresses the timeline.',
      "For server-level changes (redirects, security headers, caching configuration, firewall whitelisting, DNS, SSL), we provide specific instructions with exact configurations for the client's development team. We don't make server-side changes.",
    ],
  },
  {
    q: 'What falls inside your scope and what gets handed off?',
    a: [
      'We handle everything at the content and markup layer: schema generation and injection, llms.txt, robots.txt adjustments for AI crawlers, content rewrites for citability, FAQ creation, author attribution, bio and credential pages, Wikidata entity creation, IndexNow implementation, LinkedIn company page setup, and brand presence strategy across the platforms AI pulls from.',
      'For areas that require authentic participation from the business, we provide strategy, content planning, and ongoing coaching: Reddit and community engagement, YouTube content (including video production as an add-on), and Google review velocity.',
      'Server-level work gets handed off with specific, documented instructions: page speed optimization, security headers (HSTS, CSP), CMS core upgrades, custom plugin or theme development, and DNS or SSL changes. The instructions include exact configurations, not general recommendations.',
    ],
  },
  {
    q: 'How do different AI platforms decide what to cite?',
    a: [
      "Each platform has a distinct citation pipeline. Google AI Overviews draws from its own search index and favors structured headings, comparison tables, publication dates, and author attribution. Google Gemini relies more on Knowledge Graph entities, which means schema markup and verified entity data carry extra weight. ChatGPT Search runs on Bing's index and leans on Wikipedia and Wikidata for entity verification, which is why Wikidata entries matter even for local businesses that wouldn't qualify for a full Wikipedia article. Claude draws from its own web search integration and favors well-structured, authoritative content with clear sourcing. Bing Copilot values IndexNow submissions and Bing Webmaster Tools verification. Perplexity indexes Reddit and community content more aggressively than any other platform, with Reddit accounting for nearly half its citations in many verticals.",
      'A business can score well on one platform and be completely absent from another. The audit scores each platform individually, and the implementation plan addresses the specific signals each one needs.',
    ],
  },
  {
    q: "What's the relationship between traditional SEO and GEO?",
    a: [
      'They share a foundation. A well-built site with clean HTML, fast load times, proper heading structure, and quality content gives you a head start on both. Server-side rendering helps, because AI crawlers can read the HTML without executing JavaScript. Strong Core Web Vitals and an established domain are useful baselines.',
      'Where they diverge is in what earns visibility. SEO operates on backlinks, keyword relevance, and ranking algorithms. GEO operates on structured data, entity verification, content citability, and platform-specific signals. According to Ahrefs (2026), 31% of URLs cited in AI Overviews come from pages outside the top 100 organic results. A site can rank first in traditional search and still be absent from the AI answer above it.',
      "If you already have an SEO provider doing good work, GEO complements it. We address the layer that traditional SEO doesn't cover.",
    ],
  },
  {
    q: 'Will this hurt my SEO?',
    a: [
      'No. Nothing GEO does conflicts with traditional SEO, and most of it strengthens the foundation both rely on.',
      "Schema markup makes content easier for both search engines and AI platforms to parse. Author attribution and bio pages improve E-E-A-T signals that Google's organic rankings already weight heavily. Faster page speed, cleaner HTML, and proper canonical tags help every crawler. Content rewrites for citability make pages clearer for human readers and better at answering specific questions, which is what Google's helpful-content updates have been rewarding for years.",
      "If you have an SEO provider doing good work, GEO complements it rather than competing with it. We address the layer traditional SEO doesn't cover: structured data depth, AI crawler access, entity verification, and platform-specific signals. The two practices share more foundation than they don't.",
    ],
  },
  {
    q: 'How do you measure whether GEO is working?',
    a: [
      'The primary metric is your GEO score across the six audit categories, re-measured quarterly or whenever you want a fresh read. Beyond the aggregate score, we track individual findings: schema validation results, llms.txt deployment, platform-specific scores, entity verification status, and content citability improvements.',
      "We also monitor whether your business appears in AI-generated answers for the queries that matter to you. The platforms don't offer analytics dashboards the way Google Search Console does, so measurement relies on structured re-auditing and direct testing against specific queries on each platform.",
      'The downstream payoff of citation visibility is measurable. According to Seer Interactive (2025), brands cited in AI Overviews earn 35% higher organic click-through rates and 91% higher paid click-through rates compared to uncited competitors on the same query. Citation coverage compounds: each additional platform where you\'re visible is another source of qualified traffic that your competitors aren\'t getting.',
    ],
  },
  {
    q: 'What does AEO mean? Is it different from GEO?',
    a: [
      'AEO, or answer engine optimization, is an older term for the same discipline. It gained traction before the "generative engine optimization" framing was formalized in the 2023 Princeton/Georgia Tech research paper. Some practitioners and tools still use AEO. We use GEO because the research literature has converged on it, but the underlying work is the same: making your business the source AI platforms cite when answering questions relevant to what you do.',
    ],
  },
];

const ALL_FAQS = [...FAQS_MAIN, ...FAQS_TECHNICAL];

export default function FAQ() {
  // When the URL hash matches an FAQ id (e.g. /faq#faq-7), auto-open the
  // matching <details>. Runs on initial load and on every in-session hash
  // change (clicks from the Index sidebar). Native anchor scroll handles
  // positioning; we just expand the answer so the user lands on it open.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith('#faq-')) return;
      const el = document.querySelector(hash);
      if (el && el.tagName === 'DETAILS') el.open = true;
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  return (
    <main>
      <Meta
        title="FAQ · Forecite"
        description="What is GEO? How is it different from SEO? What do we measure and how? Common questions about generative engine optimization, answered."
        path="/faq"
      />

      <Section label="05 FAQ — Hero" style={{ paddingTop: 140, paddingBottom: 96 }}>
        <Eyebrow style={{ marginBottom: 24 }}>FAQ</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '14ch',
            margin: 0,
          }}
        >
          Questions we hear most
        </h1>
      </Section>

      <Section label="05 FAQ — List" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96 }}>
          <div className="faq-index" style={{ position: 'sticky', top: 'calc(var(--topbar-h) + 32px)', alignSelf: 'start' }}>
            <Eyebrow>Index</Eyebrow>
            <ol
              style={{
                listStyle: 'none',
                padding: 0,
                marginTop: 16,
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--mute-400)',
              }}
            >
              {ALL_FAQS.map((item, i) => (
                <li key={i} style={{ padding: '8px 0' }}>
                  <a
                    href={`#faq-${i + 1}`}
                    className="faq-index-link"
                    style={{
                      display: 'flex',
                      gap: 12,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ color: 'var(--gold-500)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span>{item.q}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div>
            {FAQS_MAIN.map((item, i) => (
              <details
                key={i}
                id={`faq-${i + 1}`}
                open={i < 2}
                style={{
                  borderTop: '1px solid var(--border-bone-on-forest)',
                  padding: '28px 0',
                  scrollMarginTop: 'calc(var(--topbar-h) + 16px)',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontSize: 22,
                    fontWeight: 500,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--gold-500)',
                        marginRight: 16,
                        fontSize: 14,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.q}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--mute-400)' }}>+</span>
                </summary>
                <div style={{ marginTop: 18, marginLeft: 48 }}>
                  {item.a.map((p, pi) => (
                    <p
                      key={pi}
                      style={{
                        color: 'var(--mute-400)',
                        lineHeight: 1.7,
                        maxWidth: '60ch',
                        fontSize: 16,
                        marginBottom: pi < item.a.length - 1 ? 16 : 0,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </details>
            ))}

            {/* Under the hood section break */}
            <div style={{ borderTop: '1px solid var(--border-bone-on-forest)', padding: '48px 0 24px' }}>
              <Eyebrow>Under the hood</Eyebrow>
            </div>

            {FAQS_TECHNICAL.map((item, i) => {
              const globalIdx = FAQS_MAIN.length + i;
              return (
                <details
                  key={globalIdx}
                  id={`faq-${globalIdx + 1}`}
                  style={{
                    borderTop: '1px solid var(--border-bone-on-forest)',
                    padding: '28px 0',
                    scrollMarginTop: 'calc(var(--topbar-h) + 16px)',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontSize: 22,
                      fontWeight: 500,
                      listStyle: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--gold-500)',
                          marginRight: 16,
                          fontSize: 14,
                        }}
                      >
                        {String(globalIdx + 1).padStart(2, '0')}
                      </span>
                      {item.q}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--mute-400)' }}>+</span>
                  </summary>
                  <div style={{ marginTop: 18, marginLeft: 48 }}>
                    {item.a.map((p, pi) => (
                      <p
                        key={pi}
                        style={{
                          color: 'var(--mute-400)',
                          lineHeight: 1.7,
                          maxWidth: '60ch',
                          fontSize: 16,
                          marginBottom: pi < item.a.length - 1 ? 16 : 0,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </Section>

      <Section
        label="05 FAQ — CTA"
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
