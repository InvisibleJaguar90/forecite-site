import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE = 'https://forecite.agency';
const DEFAULT_OG = `${SITE}/og-image.png`;

// Light-touch per-route head manager. Avoids the react-helmet-async dep —
// we only need to update <title>, <meta description>, canonical, and the
// OG/Twitter triplet. Real per-route HTML rendering comes in Session 3
// (pre-render / SSG); this is the SPA-era hand-off.
function setTag(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, kind, name] = selector.match(/^meta\[(name|property)="([^"]+)"\]$/) || [];
    if (kind && name) {
      el.setAttribute(kind, name);
      document.head.appendChild(el);
    }
  }
  el.setAttribute(attr, value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Meta({ title, description, path = '/', ogImage }) {
  const { pathname } = useLocation();
  const currentPath = path || pathname || '/';
  const url = `${SITE}${currentPath === '/' ? '/' : currentPath}`;
  const image = ogImage || DEFAULT_OG;

  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setTag('meta[name="description"]', 'content', description);
    }
    setLink('canonical', url);

    // Open Graph
    if (title) setTag('meta[property="og:title"]', 'content', title);
    if (description) setTag('meta[property="og:description"]', 'content', description);
    setTag('meta[property="og:url"]', 'content', url);
    setTag('meta[property="og:image"]', 'content', image);
    setTag('meta[property="og:type"]', 'content', 'website');
    setTag('meta[property="og:site_name"]', 'content', 'Forecite');

    // Twitter
    setTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    if (title) setTag('meta[name="twitter:title"]', 'content', title);
    if (description) setTag('meta[name="twitter:description"]', 'content', description);
    setTag('meta[name="twitter:image"]', 'content', image);
  }, [title, description, url, image]);

  return null;
}
