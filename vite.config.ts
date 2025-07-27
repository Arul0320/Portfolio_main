// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio_main/', // 👈 required for GitHub Pages
  plugins: [react()],
});
