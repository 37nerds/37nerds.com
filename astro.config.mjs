import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://37nerds.github.io",
    base: "/37nerds.com",
    integrations: [
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
    ],
});
