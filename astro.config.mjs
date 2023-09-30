import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://37nerds.github.io",
    base: "/37nerds.com",
    integrations: [tailwind()],
    image: {
        service: squooshImageService(),
    },
});
