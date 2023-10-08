import type { FooterLink } from "@/types";

import TwitterIcon from "@/components/icons/TwitterIcon.tsx";
import HomeIcon from "@/components/icons/HomeIcon.tsx";
import GithubIcon from "@/components/icons/GithubIcon.tsx";
import LinkedInIcon from "@/components/icons/LinkedInIcon.tsx";
import DiscordIcon from "@/components/icons/DiscordIcon.tsx";

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
