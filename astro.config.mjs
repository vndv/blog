import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [tailwind()],
  site: 'https://blog-vndv.vercel.app/',
  output: "server",
  adapter: vercel()
});