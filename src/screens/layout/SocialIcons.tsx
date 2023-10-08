import type { TIconC } from "@/types";

import TwitterIcon from "@/components/icons/TwitterIcon.tsx";
import HomeIcon from "@/components/icons/HomeIcon.tsx";
import GithubIcon from "@/components/icons/GithubIcon.tsx";
import LinkedInIcon from "@/components/icons/LinkedInIcon.tsx";
import DiscordIcon from "@/components/icons/DiscordIcon.tsx";

type FooterLink = {
    description: string;
    icon: TIconC;
    url: string;
};

const links: FooterLink[] = [
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

const SocialIcons = () => {
    return (
        <ul class="relative grid grid-cols-2 gap-5 sm:grid-cols-5">
            {links.map(({ url, description, icon: Icon }) => (
                <li>
                    <a
                        class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
                        href={url}
                    >
                        <span class="sr-only">{description}</span>
                        <Icon class="h-full" />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
