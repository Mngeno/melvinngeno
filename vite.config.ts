import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA build for GitHub Pages.
// - `spa.enabled` makes TanStack Start render a single `index.html` shell
//   that hydrates on the client (no server runtime required).
// - `nitro` is forced to the `static` preset so the build emits a plain
//   `dist/` folder of HTML/JS/CSS that GitHub Pages can serve.
// - Inside the Lovable sandbox the preset is overridden back to Cloudflare
//   automatically, so the in-editor preview keeps working.
export default defineConfig({
  vite: {
    base: "/melvinngeno/",
  },

  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      publicDir: "dist",
    },
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
    spa: {
      enabled: true,
    },
    pages: [{ path: "/" }],
  },
});
