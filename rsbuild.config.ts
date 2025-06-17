import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      },
    ],
  },
});
