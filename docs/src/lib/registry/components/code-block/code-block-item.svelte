<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import { getContext } from "./code-block-context.svelte";
    import { codeBlockClassName, lineHighlightClassNames, lineDiffClassNames, lineFocusedClassNames, wordHighlightClassNames, darkModeClassNames, lineNumberClassNames } from "./class-names";

    let {
        ref = $bindable(null),
        value,
        lineNumbers = true,
        class: className,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        value: string;
        lineNumbers?: boolean;
    } = $props();

    const ctx = getContext();
</script>

{#if value === ctx.value}
    <div
        bind:this={ref}
        class={cn(
            codeBlockClassName,
            lineHighlightClassNames,
            lineDiffClassNames,
            lineFocusedClassNames,
            wordHighlightClassNames,
            darkModeClassNames,
            lineNumbers && lineNumberClassNames,
            className
        )}
        {...restProps}
    >
        {@render children?.()}
    </div>
{/if}
