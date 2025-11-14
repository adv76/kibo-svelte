import type { Component } from 'svelte';
import type { EntryGenerator, PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    console.log(params.component);

    const component = await import(`../../../lib/content/components/${params.component}.md`) as 
    { 
        default: Component; 
        metadata: {
            title: string;
            description: string;
            icon: string;
            dependencies?: string[];
            installer: string;
        };
    };

    if (!component) error(404, "Example not found.");

    return {
        component: component.default,
        metadata: component.metadata,

        componentName: params.component
    };
};

export const entries: EntryGenerator = async () => {
    const components = import.meta.glob("../../../lib/content/components/*.md");

    const entries = [];

    for (const filePath in components) {
        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const componentName = fileName.substring(0, fileName.length - 3);

        entries.push({ component: componentName });
    }

	return entries;
};
