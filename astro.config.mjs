import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://37nerds.com",
    integrations: [tailwind(), solidJs()],
    image: {
        service: squooshImageService(),
    },
});
