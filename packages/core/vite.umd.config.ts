import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import compression2 from "vite-plugin-compression2";
import { hooksPlugin as hooks } from "./hooksPlugin";
import shell from "shelljs";
import { delay } from "lodash-es";
import { existsSync } from "fs";

export default defineConfig({
  plugins: [
    vue(),
    compression2({
      include: /\.(cjs|css)$/i, //正则表达式，只压缩cjs和css文件
    }),
    hooks({
      afterBuild: function moveStyles() {
        const maxRetry = 5;
        let retryCount = 0;

        function tryMove() {
          if (existsSync("./dist/umd/index.css")) {
            shell.cp("./dist/umd/index.css", "./dist/index.css");
          } else if (retryCount < maxRetry) {
            retryCount++;
            delay(tryMove, 800);
          } else {
            console.warn("index.css file not found after max retries");
          }
        }
        tryMove();
      },
    }),
  ],
  build: {
    outDir: "dist/umd",
    // minify: false,
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "BaniUI",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name as string;
        },
      },
    },
  },
});
