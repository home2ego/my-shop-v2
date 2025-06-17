import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
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
