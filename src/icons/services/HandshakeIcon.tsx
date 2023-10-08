import type { TIconComponent } from "@/types";

const HandshakeIcon: TIconComponent = p => {
    return (
        <svg viewBox="0 0 24 24" class={p.class}>
            <path
                fill="currentColor"
                d="M11 6h3l3.29-3.3a1 1 0 0 1 1.42 0l2.58 2.59a1 1 0 0 1 0 1.41L19 9h-8v2a1 1 0 0 1-1 1 1 1 0 0 1-1-1V8a2 2 0 0 1 2-2m-6 5v4l-2.29 2.29a1 1 0 0 0 0 1.41l2.58 2.59a1 1 0 0 0 1.42 0L11 17h4a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h-7v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z"
            ></path>
        </svg>
    );
};

export default HandshakeIcon;

//  astro-icon="mdi:handshake"
