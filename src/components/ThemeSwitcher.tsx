import SunIcon from "./../icons/theme/SunIcon";
import Icon from "./Icon";
import MoonIcon from "@/icons/theme/MoonIcon.tsx";
import { createEffect } from "solid-js";

// negative margin is sum of button width (8) and gap size of flex parent (6)
// TODO don't hardcode these values
import invariant from "tiny-invariant";

const ThemeSwitcher = () => {
    createEffect(() => {
        const themes = ["light", "dark"];
        const button = document.querySelector("#theme-switcher");
        invariant(button, "button should not be null");

        const getThemeCurrent = () => document.documentElement.dataset.theme;
        const getThemeNext = () => {
            const themeCurrent = getThemeCurrent();
            invariant(themeCurrent, "themeCurrent should not be undefined");
            const indexThemeCurrent = themes.indexOf(themeCurrent);
            return themes[(indexThemeCurrent + 1) % themes.length];
        };

        const updateIcon = () => {
            const themeCurrent = getThemeCurrent();
            document
                .querySelector(`#icon-theme-${themeCurrent}`)
                ?.classList.add("hidden");
            const themeNext = getThemeNext();
            document
                .querySelector(`#icon-theme-${themeNext}`)
                ?.classList.remove("hidden");
        };

        button.addEventListener("click", () => {
            const themeNext = getThemeNext();
            document.documentElement.dataset.theme = themeNext;
            localStorage.setItem("theme", themeNext);
            updateIcon();
        });

        updateIcon();
    });

    return (
        <button
            id="theme-switcher"
            type="button"
            class="-ml-14 origin-[right_center] scale-0 transition-all duration-500"
        >
            <div id="icon-theme-light">
                <Icon icon="/theme/dark.svg" class="h-8" />
                <span class="sr-only">Use light theme</span>
            </div>
            <div id="icon-theme-dark" class="hidden">
                <Icon icon="/theme/light.svg" class="h-8" />
                <span class="sr-only">Use dark theme</span>
            </div>
        </button>
    );
};

export default ThemeSwitcher;
