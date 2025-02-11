import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar(),
    dts({
      insertTypesEntry: true,
      outputDir: 'dist',
      cleanVueFileName: true,
      skipDiagnostics: false,
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueKhabirovTamerlanQuasarLib',
      fileName: (format) => `vue-khabirov-tamerlan-quasar-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'quasar', 'pinia'],
      output: {
        globals: {
          vue: 'Vue',
          quasar: 'Quasar',
          pinia: 'Pinia'
        }
      }
    }
  }
});