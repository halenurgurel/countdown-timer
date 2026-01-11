import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/countdown-timer/",
  build: {
    rollupOptions: {
      input: {
        main: resolve("./index.html"),
      },
    },
  },
});
