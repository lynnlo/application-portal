import { defineConfig } from 'vite'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import imageminPngquant from 'imagemin-pngquant'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminWebp from 'imagemin-webp'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteImagemin({
      plugins: { jpg: imageminMozjpeg(), png: imageminPngquant() },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
})
