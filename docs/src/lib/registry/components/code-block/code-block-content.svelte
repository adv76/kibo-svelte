<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { type WithElementRef } from "$lib/utils.js";
    import CodeBlockFallback from "./code-block-fallback.svelte";
    import { type BundledLanguage, type CodeOptionsMultipleThemes, codeToHtml } from "shiki";
    import {
        transformerNotationDiff,
        transformerNotationErrorLevel,
        transformerNotationFocus,
        transformerNotationHighlight,
        transformerNotationWordHighlight,
    } from "@shikijs/transformers";
    import { untrack } from "svelte";

    let {
        ref = $bindable(null),
        themes,
        language,
        syntaxHighlighting = true,
        code,
        class: className,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        themes?: CodeOptionsMultipleThemes["themes"];
        language?: BundledLanguage;
        syntaxHighlighting?: boolean;
        code: string;
    } = $props();

    const highlight = (
        code: string,
        language?: BundledLanguage,
        themes?: CodeOptionsMultipleThemes["themes"]
    ) => codeToHtml(code, {
        lang: language ?? "typescript",
        themes: themes ?? {
            light: "github-light",
            dark: "github-dark-default",
        },
        transformers: [
            transformerNotationDiff({
                matchAlgorithm: "v3",
            }),
            transformerNotationHighlight({
                matchAlgorithm: "v3",
            }),
            transformerNotationWordHighlight({
                matchAlgorithm: "v3",
            }),
            transformerNotationFocus({
                matchAlgorithm: "v3",
            }),
            transformerNotationErrorLevel({
                matchAlgorithm: "v3",
            }),
        ]
    });

    let shikiHtml = $state<string>();

    // TODO maybe look into async svelte in the future
    $effect(() => {
        code;
        language;
        themes;
        untrack(() => {
            highlight(code, language, themes).then(html => shikiHtml = html);
        })
    })
</script>

{#if syntaxHighlighting && shikiHtml}
    <div {...restProps}>
        {@html shikiHtml}
    </div>
{:else}
    <CodeBlockFallback {code} />
{/if}
