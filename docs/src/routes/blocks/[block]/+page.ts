import type { Component } from 'svelte';
import type { EntryGenerator, PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    console.log(params.block);

    const block = await import(`../../../lib/content/blocks/${params.block}.md`) as 
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

    if (!block) error(404, "Example not found.");

    return {
        block: block.default,
        metadata: block.metadata,

        blockName: params.block
    };
};

export const entries: EntryGenerator = async () => {
    const blocks = import.meta.glob("../../../lib/content/blocks/*.md");

    const entries = [];

    for (const filePath in blocks) {
        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const blockName = fileName.substring(0, fileName.length - 3);

        entries.push({ block: blockName });
    }

    return entries;
};
