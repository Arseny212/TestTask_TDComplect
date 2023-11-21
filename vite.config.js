import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    open: false, 
    port: 4173,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});