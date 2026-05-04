// Anonymized case study content for the /audit (Case Study) page.
// Real audits, real findings, real recommendations. Business names and
// identifying details have been changed.
//
// Each case study has:
//   - id: URL hash fragment
//   - tab: short label for the tab nav
//   - sector: full label for the setup band
//   - setup: one-line description of the business
//   - headline: chapter-title hook
//   - score: { value, label, context }
//   - findings: 3 audit excerpts
//   - gameplan: { phases: [{ label, outcome, items: [{ text, highlight }] }] }
//   - pdf: { href, label }

export const CASE_STUDIES = [
  // ---------------------------------------------------------------- MED SPA
  {
    id: 'med-spa',
    tab: 'Med spa',
    sector: 'Med spa',
    setup: 'A 20-year-old medical spa in Manhattan.',
    headline: 'The brand with no peer voices.',
    score: {
      value: 52,
      label: 'Out of 100 · Poor',
      context:
        'Brand Authority: 28/100. Two decades of operations and national lifestyle press, sitting on the platforms AI systems weight most.',
    },
    findings: [
      {
        title: 'Brand Authority 28/100',
        body: 'No Wikipedia article, no Wikidata entity, zero indexed Reddit threads. Two decades of operations and national lifestyle press coverage sit on platforms AI systems weight at 25% of brand authority each, with nothing to weight.',
      },
      {
        title: 'Schema is structurally broken',
        body: 'LocalBusiness schema is missing entirely from a multi-location practice. Organization schema lacks description, address, telephone, foundingDate, and knowsAbout. Logo schema declares 1×1 pixel dimensions, which AI parsers reject as malformed.',
      },
      {
        title: 'Perplexity readiness 14/100',
        body: 'Reddit content drives 46.7% of Perplexity citations. This practice has none. Across 12 page types audited, no original data, no comparison tables, no question-based headings, no community forum engagement.',
      },
    ],
    gameplan: {
      phases: [
        {
          label: 'Week 1',
          outcome:
            'By Friday, AI systems can identify the practice as a complete entity instead of a half-formed one.',
          items: [
            { text: 'Add description, foundingDate, address, telephone, contactPoint to Organization schema', highlight: true },
            { text: 'Create llms.txt with business description, key pages, and team credentials', highlight: true },
            { text: 'Add LinkedIn URL and Yelp URL to Organization sameAs schema' },
            { text: 'Fix logo dimensions in Organization schema (currently 1×1)' },
            { text: 'Add knowsAbout property listing core treatment topics' },
            { text: 'Register Bing Webmaster Tools and submit sitemap' },
            { text: 'Install IndexNow WordPress plugin' },
          ],
        },
        {
          label: 'Month 1',
          outcome:
            'The practice becomes citable, not just recognizable. AI systems can name the providers, date the content, and find the data they need to cite.',
          items: [
            { text: 'Implement LocalBusiness JSON-LD with full properties (address, geo, hours, phone, priceRange)', highlight: true },
            { text: 'Add comparison tables to 5 key service pages (neurotoxin, body contouring, facial treatments)', highlight: true },
            { text: 'Add Person schema for both principal providers with credentials, sameAs, knowsAbout' },
            { text: 'Add author bylines to top 10 service pages, linking to team bios' },
            { text: 'Add "Last reviewed by [provider] on [date]" to all service pages' },
            { text: 'Create Wikidata item (lower notability bar than Wikipedia)' },
            { text: 'Add BlogPosting schema to all blog posts with author, datePublished, dateModified' },
            { text: 'Add cited statistics with named sources to top 5 service pages' },
            { text: 'Optimize LinkedIn company page; begin posting twice per week' },
            { text: 'Optimize YouTube channel: chapter timestamps on key videos, updated descriptions' },
          ],
        },
        {
          label: 'Month 3',
          outcome:
            "The practice stops being absent from the conversations AI systems sample. Wikipedia presence, organic Reddit voice, and consistent content cadence make the brand discoverable on the open web, not just on its own site.",
          items: [
            { text: 'Wikipedia article assessment using existing tier-2 press coverage as secondary-source notability evidence; if notable, draft and submit', highlight: true },
            { text: 'Sustained Reddit presence: legitimate organic answers in r/SkincareAddiction, r/NYC, r/AskNYC, r/30PlusSkinCare from a named provider account, not promotion' },
            { text: 'Content production cadence: two new blog posts per month, all data-backed with question-based headings, direct answers, and sourced statistics' },
            { text: 'Press relationship program: pitch one earned placement per month to outlets already covering the practice' },
          ],
        },
      ],
    },
    pdf: {
      href: '#full-audit-medspa', // TODO: link to anonymized PDF when generated
      label: 'Read the full audit (PDF, 14 pages)',
    },
  },

  // ----------------------------------------------------------------- DENTAL
  {
    id: 'dental',
    tab: 'Dental',
    sector: 'Dental',
    setup: 'A four-location family dental practice in Chicagoland.',
    headline: 'The practice that outsourced its authorship.',
    score: {
      value: 43,
      label: 'Out of 100 · Poor',
      context:
        "Brand Authority: 16/100. Every blog post on the site is bylined by the practice's marketing agency.",
    },
    findings: [
      {
        title: 'Every blog post is authored by a marketing agency',
        body: "Every blog post is bylined \"by [marketing agency]\" in both the rendered page and the Article schema (/author/[agency-slug]/). YMYL medical content authored by an agency is the single most damaging E-E-A-T signal AI systems can detect. Google's Quality Rater Guidelines specifically deprioritize health content authored without medical credentials.",
      },
      {
        title: 'Brand Authority 16/100',
        body: "A search for the practice's name on Reddit returns zero indexed threads. Reddit drives 25% of brand authority in this rubric and is the primary research surface Perplexity and ChatGPT use to answer \"which dentist should I go to\" queries. Without Reddit footprint, the practice is invisible on the platforms patients use most for peer validation.",
      },
      {
        title: 'Zero statistical density across all sampled content',
        body: 'Across 10 blog posts sampled, zero named statistics appear with attributed sources. Compare to competitors who cite ADA surveys, NIH oral health data, or academic research. Statistical density is one of the strongest citation signals for AI systems.',
      },
    ],
    gameplan: {
      phases: [
        {
          label: 'Week 1',
          outcome: 'By Friday, every blog post is authored by a credentialed dentist instead of a marketing agency.',
          items: [
            { text: 'Replace blog authorship across all posts: change Article schema author from the marketing agency to a credentialed dentist on staff', highlight: true },
            { text: 'Reassign all existing blog posts to the named dentist', highlight: true },
            { text: 'Create WordPress user for the dentist with credentials, headshot, and 150-word bio linking to state license' },
            { text: 'Expand sameAs in Dentist schema to include Facebook, Yelp, Healthgrades, Google Maps' },
            { text: 'Create LinkedIn company page (currently nonexistent)' },
            { text: 'Add FAQPage schema to General Family Dentistry page' },
            { text: 'Fix viewport meta tag: remove user-scalable=0' },
            { text: 'Add Google Reviews and Yelp link CTAs to homepage footer' },
            { text: 'Implement IndexNow via AIOSEO plugin' },
          ],
        },
        {
          label: 'Month 1',
          outcome: "Generic marketing copy becomes citable medical authority. Statistics, FAQ schema, full provider attribution. The practice's content surface becomes worth pulling from.",
          items: [
            { text: 'Add one sourced statistic per blog post (ADA data, CDC oral health statistics, peer-reviewed studies)', highlight: true },
            { text: 'Add aggregateRating schema using Google Reviews count and rating from the GBP', highlight: true },
            { text: 'Rewrite homepage H2s from marketing slogans to informational headings' },
            { text: 'Expand the five thinnest service pages to 600+ words with a 3-question FAQ block each' },
            { text: 'Add alt text to all images including the SVG logo' },
            { text: 'Hand-edit llms.txt with full entity description: founding, service area, specialties, doctors' },
            { text: 'Add WebSite + SearchAction schema to homepage' },
            { text: 'Add knowsAbout array to Organization schema (Family Dentistry, Implants, Cosmetic, Orthodontics, Pediatric)' },
            { text: 'Verify all four location addresses are consistent across GBP, Yelp, Healthgrades, Zocdoc, and on-site schema' },
          ],
        },
        {
          label: 'Month 3',
          outcome: 'The practice shows up where patients actually look for dentist recommendations. Reddit, YouTube, local press, all building over time.',
          items: [
            { text: 'Reddit presence: established legitimate organic engagement in dental subreddits with a named-dentist account answering patient questions weekly', highlight: true },
            { text: 'YouTube content program: 30 to 60 second doctor introduction videos for each location, plus monthly procedure-explainer videos', highlight: true },
            { text: 'Earned local coverage program: two to three Chicagoland community placements per quarter' },
            { text: 'Sustained content cadence: two blog posts per month, all dentist-authored, all with sourced statistics and structured FAQ blocks' },
            { text: "Legacy author migration: progressively re-credit older blog posts to whichever dentist's specialty area matches the topic, building per-author topical authority over time" },
          ],
        },
      ],
    },
    pdf: {
      href: '#full-audit-dental',
      label: 'Read the full audit (PDF, 12 pages)',
    },
  },

  // ----------------------------------------------------------------- LEGAL
  {
    id: 'legal',
    tab: 'Legal',
    sector: 'Legal',
    setup: 'A boutique family law firm with four Texas offices.',
    headline: 'The firm with the wrong name.',
    score: {
      value: 50,
      label: 'Out of 100 · Poor',
      context: "The firm's own Organization schema lists the business name as the firm's URL.",
    },
    findings: [
      {
        title: "The Organization schema doesn't know the firm's name",
        body: "Organization schema uses the domain name (www.[firm-name].com) as the business name field. AI systems identify the entity by its URL, not by the firm's actual name. This is the single most damaging schema error for AI citation, present site-wide.",
      },
      {
        title: 'LocalBusiness schema declared but empty',
        body: 'LocalBusiness schema declares the entity but includes zero location data. No address, telephone, geo coordinates, sameAs, areaServed, or priceRange. For a four-office firm, this is a critical failure. AI local queries will not surface the practice correctly.',
      },
      {
        title: '5,663 words of practice content. Zero statistics.',
        body: 'The 3,192-word Child Custody page and 2,471-word Divorce page contain zero named statistics, percentages, case outcome numbers, or cited studies. Content is experiential but not quotable with hard data, and statistical density is the single strongest signal of citation-readiness AI systems track.',
      },
    ],
    gameplan: {
      phases: [
        {
          label: 'Week 1',
          outcome: "By Friday, AI systems know the firm's name. The schema stops saying the firm's URL is the business.",
          items: [
            { text: "Fix Organization schema name: change the URL string to the firm's actual name in AIOSEO settings", highlight: true },
            { text: 'Add address, telephone, geo coordinates to LocalBusiness schema for the primary Houston office', highlight: true },
            { text: 'Add sameAs array to Organization schema: LinkedIn, YouTube, Facebook, Avvo, Apple Podcasts, Spotify' },
            { text: 'Configure non-www to www DNS redirect to recover lost link equity' },
            { text: 'Bulk-add alt text to all images using an AI-powered WordPress plugin' },
          ],
        },
        {
          label: 'Month 1',
          outcome: 'Practice pages stop being unciteable. Real authorship, sourced statistics, comparison tables, and FAQ schema convert content depth into citation eligibility.',
          items: [
            { text: 'Add visible author bylines to all blog posts, naming the attorney with "Board Certified Family Law Attorney" credential line', highlight: true },
            { text: 'Add Texas-specific statistics to the Child Custody page (state averages, filing timelines, cost ranges)', highlight: true },
            { text: 'Complete LocalBusiness schema for all four office locations' },
            { text: 'Add FAQPage schema to homepage FAQ section' },
            { text: 'Add AggregateRating schema using existing 100+ client reviews currently sitting unmarked' },
            { text: 'Add visible publication dates with year to all blog posts' },
            { text: 'Reformat top 10 blog posts with question-based H2 headings' },
            { text: 'Add a comparison table to the Divorce practice area page (e.g., fault vs no-fault grounds)' },
            { text: 'Submit to Bing Webmaster Tools and configure IndexNow' },
            { text: 'Expand the Press/Media page with actual links, dates, and descriptions for each named outlet' },
          ],
        },
        {
          label: 'Month 3',
          outcome: "The firm's existing reputation gets translated into signals AI systems can actually find. Wikidata entity, podcast SEO, external press distribution turn organic strengths into citation-ready evidence.",
          items: [
            { text: 'Wikidata entry: foundingDate, founders, locations, official website, sameAs network', highlight: true },
            { text: 'Podcast SEO restructure: full show notes for every episode with timestamped headings and key takeaway summaries', highlight: true },
            { text: 'Statistical density program: rewrite top 20 blog posts and top 5 practice area pages to embed sourced data' },
            { text: 'Dedicated resource page "Texas Divorce Statistics" with cited data from TX OAG, formatted as the canonical reference page AI systems cite for the topic' },
            { text: 'LinkedIn thought leadership cadence: both partners post weekly substantive content, not job listings' },
            { text: 'External press distribution: pitch two earned placements per month in Texas legal publications and consumer family law content sites' },
          ],
        },
      ],
    },
    pdf: {
      href: '#full-audit-legal',
      label: 'Read the full audit (PDF, 16 pages)',
    },
  },

  // ----------------------------------------------------------- FINANCIAL ADVISORY
  {
    id: 'financial',
    tab: 'Financial advisory',
    sector: 'Financial advisory',
    setup: 'A multi-billion AUM fee-only RIA on the West Coast.',
    headline: 'The authority without the pages.',
    score: {
      value: 59,
      label: 'Out of 100 · Poor',
      context: 'Tier-1 press, $9B AUM, 30K+ YouTube subscribers. Three navigation pages return 404.',
    },
    findings: [
      {
        title: 'Three primary navigation pages are 404',
        body: "Three pages linked from the firm's own navigation return \"page can't be found.\" These pages are also linked from external press coverage. AI crawlers hitting them encounter dead entity signals and broken crawl paths.",
      },
      {
        title: 'Money pages run 633 words',
        body: "The firm's most important service pages, the ones that should anchor AI citation for \"fee-only retirement planning,\" run 633 words (Retirement Planning), 668 words (Financial Planning), and similar on Investment Planning. AI citation source selection typically requires 1,500 to 2,000+ words of comprehensive depth at the service-page level.",
      },
      {
        title: 'Multi-billion AUM, no Wikipedia entity',
        body: "Barron's Top 100 (2025). Newsweek America's Top Financial Advisory Firms (2026). Inc 5000 (2024-2025). 30K+ YouTube subscribers across 1,800+ videos. Zero Wikipedia entity. Zero Wikidata. ChatGPT cites Wikipedia in 47.9% of answer responses; this firm provides nothing for it to cite.",
      },
    ],
    gameplan: {
      phases: [
        {
          label: 'Week 1',
          outcome: 'By Friday, AI crawlers can complete a site visit. The 404s are fixed, the schema names the awards, the PDFs are accessible.',
          items: [
            { text: 'Fix all 404 errors: redirect broken nav URLs to live pages', highlight: true },
            { text: "Add award property to Organization schema listing Barron's Top 100 (2025), Newsweek Top Financial Advisory Firms (2026), Inc 5000 (2024-2025), Financial Planning Top Fee-Only RIA (2025)", highlight: true },
            { text: "Create and deploy llms.txt with services, team expertise, and the firm's flagship podcast and TV presence" },
            { text: 'Remove blanket PDF blocking from robots.txt; switch to selective rules' },
            { text: 'Add LocalBusiness schema to each location page with address, geo coordinates, telephone, openingHours' },
          ],
        },
        {
          label: 'Month 1',
          outcome: 'Money pages stop being thin. Each service page gains the depth, FAQ structure, and comparison tables that AI systems require to cite a source.',
          items: [
            { text: 'Expand Retirement Planning service page from 633 words to 2,500+ words with question-based H2 headings, a comparison table (traditional vs Roth withdrawal strategies), and 5+ cited statistics', highlight: true },
            { text: 'Add FAQ section (5-8 questions) to each service page with FAQPage schema', highlight: true },
            { text: 'Expand Financial Planning service page similarly' },
            { text: 'Expand Investment Planning service page similarly' },
            { text: 'Add internal links from service pages to relevant blog posts and podcast episodes' },
            { text: 'Add foundingDate, founder, numberOfEmployees, knowsAbout, areaServed properties to Organization schema' },
            { text: 'Add H2 subheadings to all blog posts' },
            { text: 'Add Person schema to all team pages (currently only WebPage type)' },
            { text: 'Add PodcastSeries schema to the podcast hub page' },
          ],
        },
        {
          label: 'Month 3',
          outcome: "Tier-1 press becomes encyclopedic presence. The firm's existing authority converts into the reference-page and entity-graph assets AI systems treat as citation-ready.",
          items: [
            { text: '"How Much Do I Need to Retire?" calculator and resource page, designed as a high-value AI citation target for the single most-asked retirement question', highlight: true },
            { text: 'Wikidata entry: foundingDate, founders, headquarters, official website, AUM, awards', highlight: true },
            { text: "Wikipedia article assessment using existing Barron's, Newsweek, WSJ coverage as secondary-source notability evidence" },
            { text: 'Comparison page "Fee-Only vs Fee-Based vs Commission-Based Advisors" with tables, definitions, regulatory context' },
            { text: 'Podcast transcript SEO restructure: all episodes get full transcript pages with H2 headings per topic segment' },
            { text: 'Sustained service page expansion: each money page gets quarterly content additions to maintain freshness signals' },
          ],
        },
      ],
    },
    pdf: {
      href: '#full-audit-financial',
      label: 'Read the full audit (PDF, 18 pages)',
    },
  },
];

// Default tab on initial load
export const DEFAULT_TAB_ID = 'med-spa';
