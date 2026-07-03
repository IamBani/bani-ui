import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import BaniUi from "bani-ui";
import { zhCn } from "bani-ui/es/locale";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import { defineClientComponentConfig } from "@vitepress-demo-preview/core";

import "@vitepress-demo-preview/component/dist/style.css";
import "bani-ui/dist/index.css";

defineClientComponentConfig({
  i18n: {
    zh: {
      copySuccessText: "代码已复制到剪贴板！",
      copyCode: "复制代码",
      foldCode: "折叠代码",
      expandCode: "展开代码",
      hideSourceCode: "隐藏源代码",
    },
  },
});

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(BaniUi, { locale: zhCn });
  },
};
