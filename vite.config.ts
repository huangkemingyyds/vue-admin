import path from "path";
import { defineConfig, ProxyOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { svgBuilder } from "./src/icons/loader";

// https://vitejs.dev/config/
const targetUrl = 'https://szhgg.ifuhua.com.cn/api';

/**
 * 获取代理信息
 * @param path 指定代理地址，默认测试环境
 */
function getProxyInfo(path = '') {
  return {
    target: path || targetUrl,
    changeOrigin: true,
    rewrite: path => path.replace(/^\/api/,'')
  } as ProxyOptions
}

export default defineConfig({
  plugins: [vue(), vueJsx(), svgBuilder("./src/icons/svg/")],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 1088,
    host: "0.0.0.0",
    cors: true,
    proxy: {
      '/api': getProxyInfo()
    },
  },

  build: {
    rollupOptions: {
      output: {
        // manualChunks: {
        //   "packgage-name": ["file-name"],
        //   "element-plus": ["element-plus"],
        // },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames(target) {
          if (target.name?.endsWith(".css")) {
            return "css/[name]-[hash].css";
          }
          const imageTypes = [".png", "jpg", "jpeg", ".webp", ".gif"];
          if (target.name && imageTypes.some(type => target.name!.endsWith(type))) {
            return "image/[name]-[hash].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        }
      }
    }
  },
})
