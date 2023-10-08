import type { Component, JSX } from "solid-js";

export interface CompatibilityItem {
    icon: string;
    title: string;
    url: string;
}

export interface TServiceItem {
    description: string;
    icon: string;
    title: string;
}

export interface NavItem {
    title: string;
    url: string;
}

export type TIconC = (p: { class: string }) => JSX.Element;
