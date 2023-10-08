import type { JSX } from "solid-js";

export interface CompatibilityItem {
    icon: string | TIconComponent;
    title: string;
    url: string;
}

export interface TServiceItem {
    description: string;
    icon: TIconComponent;
    title: string;
}

export interface NavItem {
    title: string;
    url: string;
}

export type TIconComponent = (p: { class: string }) => JSX.Element;

export type FooterLink = {
    description: string;
    icon: TIconComponent;
    url: string;
};
