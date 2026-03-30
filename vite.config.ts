import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import type {EnvMeta} from "./env"

// https://vite.dev/config/
const envDir = "./" //env文件的目录
export default defineConfig((config)=>{
  const env = loadEnv(config.mode,envDir) as EnvMeta;
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 修改主题色变量颜色
            // '@primary-6': "red",
          },
          additionalData: `@import "@/assets/var.less";`,
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server:{
      host:"0.0.0.0",
      port: 80,
      proxy:{
        "/api":{
          target:"http://127.0.0.1:8080", //api会被带过来
          rewrite:(path)=>path.replace("/api","") //路径重写，这样重新就是把api干掉了
        }
      }
    },
    envDir:envDir
  }
})
