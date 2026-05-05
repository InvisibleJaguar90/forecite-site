import { Link } from 'react-router-dom';
import { Eyebrow, Button, Section } from '../components/Atoms.jsx';
import Meta from '../components/Meta.jsx';

export default function NotFound() {
  return (
    <main>
      <Meta
        title="Not found · Forecite"
        description="That page doesn't exist on Forecite.agency. Head back to the homepage or browse the audit, services, or FAQ."
        path="/404"
      />

      <Section label="404" style={{ paddingTop: 180, paddingBottom: 180, minHeight: '60vh' }}>
        <Eyebrow style={{ marginBottom: 24 }}>404</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(56px, 7vw, 104px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.02,
            maxWidth: '16ch',
            margin: 0,
            textWrap: 'balance',
          }}
        >
          That page isn't here.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: '48ch', marginTop: 32, color: 'var(--bone-200)' }}>
          Either the URL got mistyped or the page was moved. The site is small, so it shouldn't take long to find what you were after.
        </p>
        <div className="flex-stack-sm" style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
          <Button as={Link} to="/" variant="primary">
            Go home <span style={{ fontFamily: 'var(--font-mono)' }}>&rarr;</span>
          </Button>
          <Button as={Link} to="/audit" variant="ghost">See a real audit</Button>
          <Button as={Link} to="/contact" variant="ghost">Book a free audit</Button>
        </div>
      </Section>
    </main>
  );
}
