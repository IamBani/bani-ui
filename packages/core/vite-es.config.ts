import { readdirSync } from "fs";
import { delay, filter, map } from "lodash-es";
import { basename, resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { hooksPlugin as hooks } from "./hooksPlugin";
import shell from "shelljs";

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name,
  );
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    }),
    hooks({
      beforeBuild: function beforeBuild() {
        shell.rm("-rf", "./dist"); //如果dist目录存在
      },
      afterBuild: function moveStyles() {
        try {
          readdirSync("./dist/es/theme");
          shell.mv("./dist/es/theme", "./dist/theme");
        } catch (error) {
          delay(moveStyles, 800);
        }
      },
    }),
  ],
  build: {
    outDir: "dist/es",
    cssCodeSplit: true,
    minify: false,
    lib: {
      formats: ["es"],
      entry: {
        index: resolve(__dirname, "index.ts"),
        "locale/lang/index": resolve(__dirname, "../locale/index.ts"),
      },
      name: "BaniUI",
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
      ],
      output: {
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name?.startsWith("locale/lang/")) {
            return "[name].js";
          }
          return "[name]-[hash].js";
        },
        assetFileNames: (asset) => {
          if (asset.name === "style.css") return "index.css";
          if (
            asset.type === "asset" &&
            /\.(css)$/i.test(asset.name as string)
          ) {
            return "theme/[name].[ext]";
          }
          return asset.name as string;
        },
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("packages/locale")) {
            return `locale/lang/${basename(id, ".ts")}`;
          }
          if (id.includes("packages/hooks")) {
            return "hooks";
          }
          if (
            id.includes("packages/utils") ||
            id.includes("plugin-vue:export-helper")
          ) {
            return "utils";
          }
          if (id.includes("packages/components/ButtonGroup")) {
            return "ButtonGroup";
          }
          for (const name of getDirectoriesSync("../components")) {
            if (id.includes(`packages/components/${name}`)) {
              return name;
            }
          }
        },
      },
    },
  },
});
