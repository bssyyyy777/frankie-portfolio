import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { existsSync, rmSync } from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'exclude-local-videos-from-production-build',
        closeBundle() {
          const excludedBuildDirs = [
            path.resolve(process.cwd(), 'dist/videos'),
            path.resolve(process.cwd(), 'dist/assets/aistudio'),
          ];

          for (const buildDir of excludedBuildDirs) {
            if (existsSync(buildDir)) {
              rmSync(buildDir, { recursive: true, force: true });
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
