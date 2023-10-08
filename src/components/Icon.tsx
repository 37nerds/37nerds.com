import type { TIconComponent } from "@/types.ts";

const Icon = (p: { icon: string | TIconComponent; class?: string }) => {
    if (typeof p.icon == "string") {
        return <img class={p.class} src={p.icon} alt="" />;
    }

    const { icon: Icon } = p;

    return (
        <>
            <Icon class={p.class || ""} />
        </>
    );
};

export default Icon;
