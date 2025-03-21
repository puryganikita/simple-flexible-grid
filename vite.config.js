import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copy } from 'vite-plugin-copy';
import { renameSync, rmdirSync } from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        'simple-flexible-grid': resolve(
          __dirname,
          'src/simple-flexible-grid/simple-flexible-grid.scss',
        ),
      },
      output: {
        main: 'demo.html',
        entryFileNames: '[name].css',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
          if (ext === 'css') return 'css/[name].[ext]';
          return '[name].[ext]';
        },
      },
    },
  },
  plugins: [
    copy(
      [
        {
          src: resolve(__dirname, 'src/simple-flexible-grid/**/*.scss'),
          dest: resolve(__dirname, 'dist/scss'),
        },
      ],
      { hook: 'writeBundle' },
    ),
    {
      name: 'rename-html',
      writeBundle() {
        renameSync(
          resolve(__dirname, 'dist/src/index.html'),
          resolve(__dirname, 'dist/demo.html'),
        );
        rmdirSync(resolve(__dirname, 'dist/src'));
      },
    },
  ],
});
