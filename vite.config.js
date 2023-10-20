// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import ViteFonts from 'unplugin-fonts/vite';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import SvgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/assets/styles/settings.scss',
      },
    }),
    Components({
      dirs: ['src/components', 'src/layouts/components'],
      dts: true,
    }),
    SvgLoader({
      svgoConfig: {
        plugins: [
          'cleanupEnableBackground',
          'removeDoctype',
          'removeMetadata',
          'removeComments',
          'removeXMLNS',
          'removeXMLProcInst',
          'sortDefsChildren',
          'convertTransform',
          {
            name: 'addClassesToSVGElement',
            params: { className: 'v-icon__svg' },
          },
        ],
      },
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          vuetify: [
            'useTheme',
            'useRtl',
            'useLocale',
            'useDisplay',
            'useLayout',
          ],
        },
      ],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/store/modules'],
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  server: {},
});
