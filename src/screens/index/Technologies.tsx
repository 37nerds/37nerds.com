import { frameworks, platforms } from "site.config";

import ContentSection from "@/components/ContentSection.tsx";
import TechnologyList from "./TechnologyList";

const Technologies = () => {
    return (
        <ContentSection
            title="Technologies"
            id="Technologies"
            lead={
                <>
                    37nerds <span class="text-primary">happly work</span> with
                    below{" "}
                    <span class="text-primary">languages / frameworks</span>
                    and development <span class="text-primary">platform</span>.
                </>
            }
        >
            <TechnologyList
                items={frameworks}
                title="Library / Frameworks"
                url=""
            />
            <TechnologyList
                items={platforms}
                title="Platforms / Languages"
                url=""
            />
        </ContentSection>
    );
};

export default Technologies;
