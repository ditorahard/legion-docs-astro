// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';


import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), markdoc(), keystatic()],
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['legion-react'],
    }
  },
  output: "hybrid"
});