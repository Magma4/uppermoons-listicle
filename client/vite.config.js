import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../server/public",
    // By default Vite clears the output directory before writing new assets.
    // We disable that to avoid accidentally removing images or other manual
    // files you might put directly in server/public.
    emptyOutDir: false
  },
  server: {
    proxy: {
      "/uppermoons": {
        target: "http://localhost:3001"
      }
      ,
      "/images": {
        target: "http://localhost:3001",
        changeOrigin: true
      }
    }
  }
});

// In development, proxy image requests to the backend so `/images/...` resolves
// to the Express `public` folder (server serves static files from ./public).
