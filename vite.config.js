import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: {
    'process.env': {}, // Polyfill process.env for browser
  },
  plugins: [vue(), tailwindcss()],
  css: {
    postcss: {},
  },
  build: {
    lib: {
      entry: 'src/main-standalone.js',
      name: 'Greeter',
      formats: ['umd'],
      fileName: () => 'compiled-greeter-component.js'
    }
  },
  test: {
    environment: 'jsdom' // Set the test environment to jsdom
  },
  rollupOptions: {
    output: {
      assetFileNames: `assets/[name].[ext]`, // Ensures CSS is output separately
    }
  },
  cssCodeSplit: false
})
