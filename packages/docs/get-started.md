---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库

## 安装

```bash
npm i bani-ui --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import BaniUI from "bani-ui";
// 引入样式
import "bani-ui/dist/index.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(BaniUI).mount("#app");
```

**单个导入**

Bani-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <bn-button>我是 Button</bn-button>
</template>
<script>
import { BnButton } from "bani-ui";
export default {
  components: { BnButton },
};
</script>
```
