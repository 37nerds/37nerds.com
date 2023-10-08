import { type JSX } from "solid-js";

const ContentSection = (p: {
    id: string;
    title: string;
    eyebrow?: JSX.Element;
    lead?: JSX.Element;
    children?: JSX.Element;
}) => {
    return (
        <section
            id={p.id}
            class="flex scroll-mt-24 flex-col items-center gap-4 space-y-8"
        >
            <div class="flex flex-col items-center gap-4">
                {p.eyebrow || <></>}
                <h2 class="gradient-text text-center font-extrabold tracking-tight text-6xl">
                    {p.title}
                </h2>
            </div>
            <p class="max-w-xl text-center font-extrabold text-2xl">
                {p.lead || <></>}
            </p>
            {p.children || <></>}
        </section>
    );
};

export default ContentSection;
