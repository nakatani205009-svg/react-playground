import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    globals: true,
  },
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': '/workspace/react-playground/src',
    },
  },
});
