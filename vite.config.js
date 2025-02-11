import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar()
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueKhabirovTamerlanQuasarLib',
      fileName: (format) => `vue-khabirov-tamerlan-quasar-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'quasar'],
      output: {
        globals: {
          vue: 'Vue',
          quasar: 'Quasar'
        }
      }
    }
  }
});