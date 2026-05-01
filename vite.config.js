import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for the Forecite marketing site.
// - Builds production React (no dev warnings).
// - Outputs to dist/ which Cloudflare Pages serves.
// - SPA fallback handled by public/_redirects.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
  },
  server: {
    port: 5173,
  },
});
