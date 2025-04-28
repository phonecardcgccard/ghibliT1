import { defineConfig } from 'vite'

export default defineConfig({
  base: '/aitoolshub.top/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        ghibli: 'tools/ghibli-art.html',
      }
    }
  }
})