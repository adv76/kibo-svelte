import type { Component } from 'svelte';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    const component = await import(`../../../lib/examples/${params.view}.svelte`) as { default: Component };

    if (!component) error(404, "Example not found.");

    return {
        component: component.default,

        view: params.view
    };
};
