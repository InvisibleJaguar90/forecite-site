// HeroBackground
// Session 4 item 2: full-bleed hero section carrying a Celestia variant
// image as background, with H1 + supporting content positioned in the
// "open" column. The image's mass sits opposite the text:
//   align="right" → text in right column, image's mass on the left
//                   (uses the {variant}-right-open.jpg asset)
//   align="left"  → text in left column, image's mass on the right
//                   (uses the {variant}-left-open.jpg asset)
//
// Variant swap is a one-line change: edit HERO_VARIANT below to flip the
// entire site between Celestia A, B, and C without touching any page.
//
// Mobile (<=768px): image is hidden entirely and the hero falls back to
// a clean forest section with the text content full-width. The image's
// whole purpose is the side-by-side composition with text in the open
// half — that composition collapses on a phone and the image at small
// crops loses its impact, so we drop it cleanly.
//
// All padding, max-width centering, and grain overlay match the Section
// primitive so HeroBackground feels like a peer of <Section>, not a
// foreign body. Pages can pass extra `style` props which apply to the
// inner content cap (paddingTop/Bottom etc.).

const HERO_VARIANT = 'A'; // 'A' | 'B' | 'C'

export default function HeroBackground({ align = 'right', children, style, label, id }) {
  const imageSrc = `/hero/celestia-${HERO_VARIANT}-${align}-open.jpg`;

  return (
    <section
      id={id}
      data-screen-label={label}
      data-hero-variant={HERO_VARIANT}
      data-hero-align={align}
      className="hero-bg grain"
      style={{
        position: 'relative',
        width: '100%',
        backgroundImage: `url("${imageSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: align === 'right' ? 'left center' : 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div
        className="hero-bg-content"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 'var(--maxw-wide)',
          margin: '0 auto',
          padding: '140px var(--gutter-md) 120px',
          minHeight: 'clamp(560px, 80vh, 720px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
          ...style,
        }}
      >
        <div
          className="hero-bg-col"
          style={{
            gridColumn: align === 'right' ? '2 / 3' : '1 / 2',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
