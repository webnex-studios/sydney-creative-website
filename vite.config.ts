import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    host: '0.0.0.0',              // Listen on all interfaces
    allowedHosts: [
      '6247-154-47-28-147.ngrok-free.app',
      '.ngrok-free.app',          // Allow all ngrok free domains
    ],

    hmr: process.env.DISABLE_HMR !== 'true'
      ? {
          host: '6247-154-47-28-147.ngrok-free.app',
          protocol: 'wss',
          clientPort: 443,
        }
      : false,

    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
}));