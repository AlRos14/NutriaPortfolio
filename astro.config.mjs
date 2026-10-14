import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ainutria.com',
  output: 'static',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
