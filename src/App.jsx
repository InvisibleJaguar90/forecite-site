import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';

// Layout shell: TopBar + routed page content + Footer.
// Per-route <Meta> components inside each page handle <title>/<description>/og.
export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--forest-800)' }}>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}
