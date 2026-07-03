import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bani-ui",
  description: "vue3 组件库",
  base: "/bani-ui/",
  themeConfig: {
    search: {
      provider: "local",
    },
    outlineTitle: "本页目录",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件库", link: "/get-started" },
    ],

    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [{ text: "按钮", link: "/components/button" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/IamBani/bani-ui" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
