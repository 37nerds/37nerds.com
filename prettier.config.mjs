/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    arrowParens: "avoid",
    tailwindConfig: "./tailwind.config.cjs",
    plugins: [
        "prettier-plugin-astro",
        "prettier-plugin-tailwindcss", // MUST come last
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

export default config;
