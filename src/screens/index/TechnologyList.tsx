import type { CompatibilityItem } from "@/types";
import { For, Show } from "solid-js";
import Icon from "@/components/Icon.tsx";

const TechnologyList = (p: {
    items: CompatibilityItem[];
    title: string;
    url: string;
}) => {
    return (
        <div class="w-full max-w-6xl space-y-2">
            <div class="relative border border-default bg-offset px-6 pb-4 pt-8">
                <h3 class="absolute right-4 top-0 -translate-y-1/2 rounded-full border border-current bg-default px-4 py-1 uppercase tracking-tight text-xs">
                    {p.title}
                </h3>
                <ul class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
                    <For each={p.items}>
                        {item => (
                            <li>
                                <a
                                    class="flex flex-col items-center gap-2 text-white"
                                    href={item.url}
                                >
                                    <Icon icon={item.icon} class="h-12" />
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
            <Show when={p.url !== ""}>
                <p class="text-right text-sm">
                    <a class="text-primary" href={p.url}>
                        {" "}
                        ...and more &rarr;
                    </a>
                </p>
            </Show>
        </div>
    );
};

export default TechnologyList;
