import ContentSection from "@/components/ContentSection.tsx";
import TelescopeIcon from "@/icons/intro/TelescopeIcon.tsx";
import RocketIcon from "@/icons/intro/RocketIcon.tsx";
import Icon from "@/components/Icon";
import X37NerdsIcon from "@/icons/intro/X37NerdsIcon";

const Intro = () => {
    return (
        <ContentSection
            title="Your visions to life"
            id="about"
            eyebrow={<Icon icon={X37NerdsIcon} class="h-32" />}
            lead={
                <>
                    37nerds is your trusted partner in transforming
                    <span class="text-primary">innovative</span> ideas
                    <span class="text-primary"> into</span> functional software
                    solutions.
                    <span class="text-primary">
                        With team of skilled developers,
                    </span>
                    we bring your <span class="text-primary">visions</span> to
                    life.
                </>
            }
        >
            <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a
                    href="/about#content"
                    class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"
                >
                    <Icon icon={TelescopeIcon} class="h-8" />
                    <span>Read more</span>
                </a>
                <a
                    href="#contact"
                    class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"
                >
                    <Icon icon={RocketIcon} class="h-8" />
                    <span>Contact Us</span>
                </a>
            </div>
        </ContentSection>
    );
};

export default Intro;
