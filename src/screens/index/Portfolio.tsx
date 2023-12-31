import { getCollection } from "astro:content";
import ContentSection from "@/components/ContentSection.tsx";
import ProjectCard from "../../components/ProjectCard.tsx";

const featuredSites = await getCollection(
    "showcase",
    ({ data }) => "featured" in data,
);
const orderedSites = featuredSites.sort(
    (a, b) => a.data.featured! - b.data.featured!,
);

const Portfolio = () => {
    return (
        <ContentSection
            title="Portfolio"
            id="portfolio"
            lead={
                <>
                    37nerds <span class="text-primary">successfully</span>{" "}
                    <span class="text-primary">worked</span> in below showing{" "}
                    <span class="text-primary">projects</span>.
                </>
            }
        >
            <div class="max-w-6xl space-y-2">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {orderedSites.map(site => (
                        <ProjectCard site={site} />
                    ))}
                </div>
                <p class="text-right text-sm">
                    <a
                        class="text-primary"
                        href="https://astro.build/showcase/"
                    >
                        ...and more &rarr;
                    </a>
                </p>
            </div>
        </ContentSection>
    );
};

export default Portfolio;
