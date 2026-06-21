import { readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const packageRoot = path.dirname(fileURLToPath(import.meta.url))
const exerciseDirectory = path.join(packageRoot, 'exercises')
const exerciseEntries = Object.fromEntries(
  readdirSync(exerciseDirectory)
    .filter((fileName) => fileName.endsWith('.jsx'))
    .sort()
    .map((fileName) => [
      `exercises/${fileName.replace(/\.jsx$/, '')}`,
      path.join(exerciseDirectory, fileName)
    ])
)

const input = {
  index: path.join(packageRoot, 'index.js'),
  ...exerciseEntries
}

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input,
      external: ['react', 'react/jsx-runtime'],
      preserveEntrySignatures: 'strict',
      output: [
        {
          format: 'es',
          dir: 'dist/esm',
          entryFileNames: '[name].js',
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: 'styles.css'
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].cjs',
          chunkFileNames: 'chunks/[name]-[hash].cjs',
          assetFileNames: 'styles.css'
        }
      ]
    }
  }
})
