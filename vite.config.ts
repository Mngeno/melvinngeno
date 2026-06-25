import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/melvinngeno/",
  },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: {
      entry: "server",
    },
  },
});
