import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist/umd/locale",
    lib: {
      entry: resolve(__dirname, "../locale/index.ts"),
      name: "BaniLocale",
      fileName: "lang",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "vue",
        },
      },
    },
  },
});
