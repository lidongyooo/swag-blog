import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })],
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
