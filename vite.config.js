import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), federation({
            name: 'products-table',
            filename: 'products-table.js',
            exposes: {
                './ProductsTable': './src/components/ProductsTable.vue'
            },
              shared: ['vue']
        })
    ],
    resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        target: "ES2022"
    },
    preview: {
        port: 4173
    }
})
