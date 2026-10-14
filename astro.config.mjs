import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ainutria.com',
  output: 'static',
  redirects: { '/features': '/agentes/', '/dossier': '/planes/', '/news': '/blog/' },
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
