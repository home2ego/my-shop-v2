import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin()],
});
