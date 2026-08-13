import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // <--- We added this line
    setupFiles: ['./vitest.setup.ts'],
  },
})