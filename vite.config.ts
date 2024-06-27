import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        name: 'Ucommerce',
        short_name: 'UCOM',
        description: 'Aplicativo ecommerce universitario',
        background_color: '#E3EAFE',
        icons: [
          {
            "src": "/ucom192x192.png",
            "type": "image/png",
            "sizes": "any"
          },
          {
            "src": "/ucom512x512.png",
            "type": "image/png",
            "sizes": "any"
          }
        ],
      }
    })

  ],
})

