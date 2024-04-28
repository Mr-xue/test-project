/* global process */
// 告诉eslint process为全局变量，防止eslint报错
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools"; // 调试工具
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { compression } from "vite-plugin-compression2";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import UnoCss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://h5static.hunbei.com/",
  build: {
    // 构建后静态资源存放目录
    assetsDir: "home"
  },
  server: {
    port: 5556,
    host: "vtest.hunbei.com",
    proxy: {
      "/api": {
        target: "https://h5.hunbei.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [
    vue(),
    // VueDevTools(),
    UnoCss(),
    compression(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        // 插件预设支持导入的api
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core",
        // "@vueuse/components",
        {
          // 'vue-router': ['createRouter'],     // 导入指定的api
          // /* 自定义模块 */
          // '@/hooks/api.ts': ['defineApi'],    // 导入指定文件下的指定api
          // '@/api/index.ts': [['*', 'api']],        // 导入指定文件下的api，并重命名
          // "@/stores/index.js": [["*", "useStore"]] // 导入指定文件下的api
        }
      ],
      eslintrc: {
        enabled: false
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
