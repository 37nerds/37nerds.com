import type { CompatibilityItem, FooterLink } from "@/types";

import TwitterIcon from "@/icons/socials/TwitterIcon.tsx";
import HomeIcon from "@/icons/socials/HomeIcon.tsx";
import GithubIcon from "@/icons/socials/GithubIcon.tsx";
import LinkedInIcon from "@/icons/socials/LinkedInIcon.tsx";
import DiscordIcon from "@/icons/socials/DiscordIcon.tsx";
import LaravelIcon from "@/icons/frameworks/LaravelIcon.tsx";
import AstroIcon from "@/icons/frameworks/AstroIcon.tsx";

export const links: FooterLink[] = [
    {
        url: "/",
        description: "37nerds official website",
        icon: HomeIcon,
    },
    {
        url: "https://github.com/37nerds",
        description: "37nerds on GitHub",
        icon: GithubIcon,
    },
    {
        url: "https://discord.gg/krepmjTY",
        description: "37nerds on Discord",
        icon: DiscordIcon,
    },
    {
        url: "https://twitter.com/@37nerds",
        description: "37nerds on Twitter",
        icon: TwitterIcon,
    },
    {
        url: "https://www.linkedin.com/company/37nerds",
        description: "37nerds on LinkedIn",
        icon: LinkedInIcon,
    },
];

export const frameworks: CompatibilityItem[] = [
    {
        title: "Laravel",
        icon: LaravelIcon,
        url: "https://laravel.com",
    },
    {
        title: "Wordpress",
        icon: "/frameworks/wordpress.svg",
        url: "https://wordpress.org/",
    },
    {
        title: "Node.js",
        icon: "/frameworks/node.svg",
        url: "https://nodejs.dev",
    },
    {
        title: "React.js",
        icon: "/frameworks/react.svg",
        url: "https://reactjs.org",
    },
    {
        title: "Solid.js",
        icon: "/frameworks/solid.svg",
        url: "https://www.solidjs.com",
    },
    {
        title: "Astro",
        icon: AstroIcon,
        url: "https://astro.build",
    },
];

export const platforms: CompatibilityItem[] = [
    {
        title: "JavaScript",
        icon: "/platforms/javascript.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        title: "TypeScript",
        icon: "/platforms/typescript.svg",
        url: "https://www.typescriptlang.org",
    },
    {
        title: "PHP",
        icon: "/platforms/php.svg",
        url: "https://php.net/",
    },
    {
        title: "Go",
        icon: "/platforms/go.svg",
        url: "https://go.dev",
    },
    {
        title: "SQL",
        icon: "/platforms/sql.svg",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
    },
    {
        title: "MySQL",
        icon: "/platforms/mysql.svg",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
    },
];
