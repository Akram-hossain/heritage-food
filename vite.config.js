import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Ensure Vite looks in the root directory
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        products: 'products.html',
      },
    },
  },
});
