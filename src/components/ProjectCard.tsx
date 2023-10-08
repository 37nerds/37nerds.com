import type { CollectionEntry } from "astro:content";

const widths = [450, 800];
const sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

const ProjectCard = (p: { site: CollectionEntry<"showcase"> }) => {
    return (
        <a
            class="group aspect-video hover:!text-default"
            href={p.site.data.url}
        >
            <figure class="relative h-full w-full overflow-hidden">
                <img
                    class="h-full w-full bg-cover object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 group-focus:scale-110 group-focus:opacity-20"
                    src={p.site.data.image}
                    width={widths[0]}
                    sizes={sizes}
                    alt={`A screenshot of ${p.site.data.url}`}
                />
                <figcaption class="absolute inset-0">
                    <div class="flex h-full flex-col items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100">
                        <h3 class="text-center font-extrabold uppercase text-xl">
                            {p.site.data.title}
                        </h3>
                        <p class="border border-current px-4 py-2">
                            {p.site.data.url}
                        </p>
                    </div>
                </figcaption>
            </figure>
        </a>
    );
};

export default ProjectCard;
