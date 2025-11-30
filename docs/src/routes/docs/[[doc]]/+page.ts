import type { Component } from 'svelte';
import type { EntryGenerator, PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    console.log(params.doc);

    const docParam = params.doc ?? "index";

    const doc = await import(`../../../lib/content/docs/${docParam}.md`) as 
    { 
        default: Component; 
        metadata: {
            title: string;
            description: string;
        };
    };

    if (!doc) error(404, "Example not found.");

    return {
        doc: doc.default,
        metadata: doc.metadata,

        docName: docParam
    };
};

export const entries: EntryGenerator = async () => {
    const docs = import.meta.glob("../../../lib/content/docs/*.md");

    const entries = [];

    for (const filePath in docs) {
        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const docName = fileName.substring(0, fileName.length - 3);

        entries.push({ doc: docName });
    }

	return entries;
};
