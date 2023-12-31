import type { TIconComponent } from "@/types.ts";

const HomeIcon: TIconComponent = p => {
    return (
        <svg viewBox="0 0 24 24" class={p.class}>
            <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
            />
        </svg>
    );
};

export default HomeIcon;

// astro-icon="mdi:home"
