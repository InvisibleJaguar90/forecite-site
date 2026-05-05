import { useRef } from 'react';

// Bracketed wordmark / label
export function Bracketed({ children, gold, as = 'span', style, ...rest }) {
  const Tag = as;
  return (
    <Tag
      style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        letterSpacing: 0,
        ...style,
      }}
      {...rest}
    >
      <span style={{ color: gold ? 'var(--gold-500)' : 'inherit' }}>[</span>
      {children}
      <span style={{ color: gold ? 'var(--gold-500)' : 'inherit' }}>]</span>
    </Tag>
  );
}

// Eyebrow label
export function Eyebrow({ children, style }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--fg-2)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Footnote mark (gold sup)
export function FootnoteMark({ n = 1 }) {
  return (
    <sup
      style={{
        color: 'var(--gold-500)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75em',
        marginLeft: 1,
      }}
    >
      {n}
    </sup>
  );
}

// Buttons
export function Button({ variant = 'primary', children, onClick, type, style }) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: 500,
    padding: '14px 22px',
    borderRadius: 2,
    border: '1px solid transparent',
    cursor: 'pointer',
    letterSpacing: '-0.005em',
    transition:
      'background 200ms var(--ease-editorial), border-color 200ms var(--ease-editorial), color 200ms var(--ease-editorial)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    ...style,
  };
  if (variant === 'primary') {
    return (
      <button
        type={type || 'button'}
        onClick={onClick}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = '')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
        style={{ ...base, background: 'var(--bone-200)', color: 'var(--ink-900)' }}
      >
        {children}
      </button>
    );
  }
  if (variant === 'secondary') {
    return (
      <button
        type={type || 'button'}
        onClick={onClick}
        style={{
          ...base,
          background: 'transparent',
          color: 'var(--fg-1)',
          borderColor: 'var(--border-bone-on-forest-hover)',
        }}
      >
        {children}
      </button>
    );
  }
  // ghost — bracket on hover
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className="ghost-btn"
      style={{
        ...base,
        background: 'transparent',
        color: 'var(--fg-1)',
        padding: '14px 0',
      }}
    >
      <span
        className="ghost-bracket"
        style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', transition: 'color 200ms' }}
      >
        [{' '}
      </span>
      {children}
      <span
        className="ghost-bracket"
        style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', transition: 'color 200ms' }}
      >
        {' '}]
      </span>
    </button>
  );
}

// Card
export function Card({ eyebrow, index, total, title, body, footnote, mark, onClick, style }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (ref.current) ref.current.style.borderColor = 'var(--border-bone-on-forest-hover)';
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.borderColor = 'var(--border-bone-on-forest)';
      }}
      style={{
        border: '1px solid var(--border-bone-on-forest)',
        padding: 28,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 320ms var(--ease-editorial)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        ...style,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        {(index || total) && (
          <Eyebrow>
            {index} / {total}
          </Eyebrow>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: 26,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            margin: '6px 0 12px',
            textWrap: 'balance',
          }}
        >
          {title}
        </h3>
        <div
          style={{ fontSize: 14, color: 'var(--mute-400)', lineHeight: 1.6, maxWidth: '38ch' }}
        >
          {body}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--gold-500)',
        }}
      >
        <span style={{ color: 'inherit' }}>{mark}</span>
        <span>→</span>
      </div>
      {footnote && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mute-500)' }}>
          {footnote}
        </div>
      )}
    </div>
  );
}

// Section wrapper.
// The original `atmosphere` and `videoAtmosphere` props are intentionally
// dropped (Andrew rejected the scattered-language effect; hero stays static
// for now per Session 1 plan). Any pages still passing them will silently
// no-op — the props are stripped here rather than at every callsite, but
// the goal is to stop passing them entirely. Hero treatment is a clean
// static section on forest-800.
//
// Session 4: full-bleed background, content centered.
//
// Both forest (default) and bone (`surface="bone"`) modes now share the
// same architecture: outer <section> spans the full viewport width and
// carries the background, grain texture, and any border dividers from
// the caller's style. Inner div is capped at --maxw-content (1240px),
// centered, and carries the padding and rest of the caller's style.
//
// Why: when the section element itself was capped at 1240, the section's
// grain overlay only painted a 1240-wide stripe down the middle, leaving
// a faintly-visible boundary where it met the un-grained body forest in
// the gutter. Pushing the background to a full-bleed outer makes the
// section's bg/grain spans edge-to-edge while content stays bounded at
// 1240. Same pattern HeroBackground already uses.
export function Section({ children, style = {}, id, label, surface }) {
  const { borderTop, borderBottom, ...innerStyle } = style;
  const className = surface === 'bone' ? 'surface-bone grain' : 'grain';
  return (
    <section
      id={id}
      data-screen-label={label}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        ...(borderTop ? { borderTop } : {}),
        ...(borderBottom ? { borderBottom } : {}),
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 'var(--maxw-content)',
          margin: '0 auto',
          padding: '120px var(--gutter-md)',
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </section>
  );
}
