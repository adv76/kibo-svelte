import type { Component } from 'svelte';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
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
