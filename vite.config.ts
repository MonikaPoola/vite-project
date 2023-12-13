import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: "../node_modules/.vite",
  build: {
    lib: {
      entry: "src/my-element.ts",
      name: "my-element",
      formats: ["es"],
      fileName: "my-element",
    },
  }
});
