/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { type AliasOptions } from 'vite'
import { tscPlugin } from 'vite-plugin-tsc-watch'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'

import path from 'path'

const getAlias = (aliases: string[]): AliasOptions =>
  aliases.map((alias) => ({
    find: alias,
    replacement: path.resolve(__dirname, 'src', alias),
  }))

const alias: AliasOptions = getAlias(['atoms', 'molecules', 'cells', 'organisms', 'mocks'])

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tscPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias,
  },
  appType: 'spa',
  server: {
    port: 1812,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src', 'mocks', 'vitest.setup.ts')],
    clearMocks: true,
    root: path.resolve(__dirname, 'src'),
    alias,
    passWithNoTests: true,
    coverage: {
      provider: 'c8',
      enabled: false,
      reporter: ['text', 'html'],
      reportsDirectory: path.resolve(__dirname, 'coverage'),
      branches: 10,
      functions: 10,
      statements: 10,
      lines: 10,
      clean: true,
      all: true,
      include: ['src/**/*.ts?(x)'],
      exclude: ['**/__{stories,test}__/*', '**/mocks/*', '**/*.d.ts'],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'drafter-library',
      formats: ['es', 'umd'],
      fileName: (format) => `drafter-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
