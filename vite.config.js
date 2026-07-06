import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    cssMinify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    target: 'ES2020',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|gif|svg|webp|ico/.test(ext)) {
            return `images/[name]-[hash][extname]`
          }
          if (/woff|woff2|ttf|otf|eot/.test(ext)) {
            return `fonts/[name]-[hash][extname]`
          }
          if (ext === 'css') {
            return `css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return undefined

          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }

          if (id.includes('@chakra-ui') || id.includes('@emotion')) {
            return 'chakra-ui'
          }

          if (id.includes('react-icons')) {
            return 'icons'
          }

          return 'vendor'
        },
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@chakra-ui/react',
      '@emotion/react',
      '@emotion/styled',
      'react-icons',
    ],
    exclude: ['next-themes'],
  },
})
