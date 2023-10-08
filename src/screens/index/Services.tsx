import { For } from "solid-js";
import { services } from "site.config";

import ContentSection from "@/components/ContentSection";
import Icon from "@/components/Icon";

const Services = () => {
    return (
        <ContentSection
            title="Services"
            id="services"
            lead={
                <>
                    37nerds boasts{" "}
                    <span class="text-primary">
                        a team of highly skilled developers
                    </span>{" "}
                    who transform your business or software idea
                    <span class="text-primary">into impactful solutions</span>
                    using modern technologies.
                </>
            }
        >
            <ul class="flex w-full max-w-6xl flex-wrap justify-center">
                <For each={services}>
                    {service => (
                        <li class="flex w-full flex-col items-center gap-4 border border-default bg-offset p-6 md:w-1/2 lg:w-1/3">
                            <div class="h-16 w-16 rounded-full border-2 border-current p-3">
                                <Icon icon={service.icon} />
                            </div>
                            <p class="text-center font-extrabold text-xl">
                                {service.title}
                            </p>
                            <p class="text-center text-offset text-sm">
                                {service.description}
                            </p>
                        </li>
                    )}
                </For>
            </ul>
        </ContentSection>
    );
};

export default Services;
