import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import { VitePluginRadar } from 'vite-plugin-radar'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginRadar({
    // Google Analytics tag injection
    analytics: {
      id: 'G-XXXXXXX',
    },
  })],
  base:"/body_fat_percentage/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
