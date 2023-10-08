import type { TIconComponent } from "@/types";

const TelescopeIcon: TIconComponent = p => {
    return (
        <svg viewBox="0 0 24 24" class={p.class}>
            <path
                fill="currentColor"
                d="m21.9 8.9-1.7 1-4-6.9 1.7-1 4 6.9m-12.1-1 3 5.2 6.1-3.5-3-5.2-6.1 3.5m1.6 4.8-2-3.5-4.3 2.5 2 3.5 4.3-2.5m-9.3 1.9 1 1.7 2.6-1.5-1-1.7-2.6 1.5m10-.6-.3-.4-4.3 2.5.3.4c.2.3.5.6.8.8L7 22h2l1.4-4.3h.1L12 22h2l-1.9-5.6c.5-.7.5-1.6 0-2.4z"
            ></path>
        </svg>
    );
};

export default TelescopeIcon;

// astro-icon="mdi:telescope"
