/* global process */
// 告诉eslint process为全局变量，防止eslint报错
import { createRouter, createWebHashHistory } from "vue-router";
import MainContent from "../layouts/MainContent.vue";
import WebHeader from "../layouts/WebHeader.vue"; // 网站头部
import LeftMenu from "../layouts/LeftMenu.vue"; // 左侧菜单栏

const path = process.env.NODE_ENV === "production" ? "/home/" : "/";
const router = createRouter({
  history: createWebHashHistory(path),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        // 命名视图配置：它们与 `<router-view>` 上的 `name` 属性匹配，没写则与default匹配
        default: MainContent,
        LeftMenu, // 左侧菜单栏
        WebHeader // 网站公共头
      }
    }
  ]
});

export default router;
