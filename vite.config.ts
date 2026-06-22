import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        theme: resolve(__dirname, 'src/theme/theme.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lit', /^lit\//],
    },
    cssCodeSplit: false,
  },
})
