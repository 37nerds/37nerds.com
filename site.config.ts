import type { CompatibilityItem, FooterLink, TServiceItem } from "@/types";

import TwitterIcon from "@/icons/socials/TwitterIcon.tsx";
import HomeIcon from "@/icons/socials/HomeIcon.tsx";
import GithubIcon from "@/icons/socials/GithubIcon.tsx";
import LinkedInIcon from "@/icons/socials/LinkedInIcon.tsx";
import DiscordIcon from "@/icons/socials/DiscordIcon.tsx";
import LaravelIcon from "@/icons/frameworks/LaravelIcon.tsx";
import AstroIcon from "@/icons/frameworks/AstroIcon.tsx";
import HandshakeIcon from "@/icons/services/HandshakeIcon";
import FeatherIcon from "@/icons/services/FeatherIcon";
import DirectionsForkIcon from "@/icons/services/DirectionsForkIcon";

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

export const services: TServiceItem[] = [
    {
        title: "SaaS Application Development",
        description:
            "Turn your SaaS idea into reality with 37nerds, using cutting-edge technologies like JavaScript, TypeScript, Node.js, React.js, PHP, Laravel, Go, and more.",
        icon: HandshakeIcon,
    },
    {
        title: "ERP Solution For Business",
        description:
            "Enhance business operations with our ERP solution: streamline processes, centralize data, and boost efficiency for improved productivity and growth.",
        icon: FeatherIcon,
    },
    {
        title: "Wordpress Plugin Development",
        description:
            "Create custom WordPress plugins for your specific business needs, featuring clean code and a solid architecture, all crafted by 37nerds.",
        icon: DirectionsForkIcon,
    },
    {
        title: "Complete Ecommerce Soluation",
        description:
            "We'll tailor an e-commerce app to suit your business. If WooCommerce suffices, you get it. For custom needs, we build from scratch using modern technologies.",
        icon: DirectionsForkIcon,
    },
];
