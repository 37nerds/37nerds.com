import type { TIconComponent } from "@/types.ts";

const LitIcon: TIconComponent = p => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 190 190"
            class={p.class}
        >
            <path
                fill="white"
                d="M95 143V79l33-33v65l-33 32Zm-65 0 32 33v-65H46"
            />
            <path
                fill="white"
                d="M62 111V46l33-32v65l-33 32Zm66 65v-65l32-32v64l-32 33Zm-98-33V79l32 32"
            />
        </svg>
    );
};

export default LitIcon;
