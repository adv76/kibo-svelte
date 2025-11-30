import { defineConfig } from 'mdsx';
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { rehypeCustomHighlight } from '@mdsx/rehype-custom-highlighter';
import type { HighlightOptions } from '@mdsx/rehype-custom-highlighter';
 
const jsEngine = createJavaScriptRegexEngine();
let highlighter: Awaited<ReturnType<typeof createHighlighterCore>> | null = null;
 
const highlighterPromise = createHighlighterCore({
	themes: [import('@shikijs/themes/github-light'), import('@shikijs/themes/github-dark')],
	langs: [
		import('@shikijs/langs/bash'),
		import('@shikijs/langs/javascript'),
		import('@shikijs/langs/typescript'),
		import('@shikijs/langs/svelte'),
		import('@shikijs/langs/css'),
		import('@shikijs/langs/html'),
		import('@shikijs/langs/json'),
		import('@shikijs/langs/markdown'),
	],
	engine: jsEngine,
});

const highlightOptions: HighlightOptions = {
    highlight: async ({ value, lang }) => {
        if (!value) return undefined;
        if (!lang) return value;
        if (!highlighter) {
            highlighter = await highlighterPromise;
        }
        return highlighter.codeToHtml(value, { lang, themes: { dark: "github-dark", light: "github-light" }});
    }
};

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	blueprints: {
		default: {
			path: resolve(__dirname, "./src/lib/components/mdsx/blueprint.svelte"),
		},
	},
    rehypePlugins: [[rehypeCustomHighlight, highlightOptions]]
});
