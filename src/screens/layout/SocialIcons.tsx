import { links } from "site.config";
import { For } from "solid-js";

const SocialIcons = () => {
    return (
        <ul class="relative grid grid-cols-2 gap-5 sm:grid-cols-5">
            <For each={links}>
                {({ url, description, icon: Icon }) => (
                    <li>
                        <a
                            class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-current p-4"
                            href={url}
                        >
                            <span class="sr-only">{description}</span>
                            <Icon class="h-full" />
                        </a>
                    </li>
                )}
            </For>
        </ul>
    );
};

export default SocialIcons;
