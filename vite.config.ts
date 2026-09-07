import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/*
 * GitHub Pages serves a project repository from /<repo>/, so CI passes the path
 * reported by actions/configure-pages. That action reports '/' once a custom
 * domain is attached, so this needs no edit when the studio gets its own domain.
 * Locally BASE_PATH is unset and the site is served from the root.
 */
const rawBase = process.env.BASE_PATH?.trim() || '/';
const base = `/${rawBase.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');

export default defineConfig({
  base,
  plugins: [react()],
});
