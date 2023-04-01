/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { type AliasOptions } from 'vite'
import { defineConfig } from 'vitest/config'
import { tscPlugin } from 'vite-plugin-tsc-watch'

import path from 'path'

const getAlias = (aliases: string[]): AliasOptions =>
  aliases.map((alias) => ({
    find: alias,
    replacement: path.resolve(__dirname, 'src', alias),
  }))

const alias: AliasOptions = getAlias(['atoms', 'molecules', 'cells', 'organisms', 'mocks'])

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tscPlugin()],
  resolve: {
    alias,
  },
  appType: 'spa',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src', 'mocks', 'vitest.setup.ts')],
    root: path.resolve(__dirname, 'src'),
    clearMocks: true,
    coverage: {
      enabled: false,
      reporter: ['text', 'html'],
      reportsDirectory: path.resolve(__dirname, 'coverage'),
      branches: 90,
      functions: 90,
      statements: 90,
      lines: 90,
      clean: true,
      all: true,
      include: [
        'src/**/*.ts?(x)',
        '!src/**/*.d.ts',
        '!src/mocks/**/*.ts?(x)',
        '!src/**/__test__/*',
        '!src/**/*.{test,spec}.{ts?(x)}',
        '!**/node_modules/**',
        '!**/dist/**',
      ],
      provider: 'c8',
    },
    alias,
    passWithNoTests: false,
  },
  server: {
    port: 1812,
  },
})
