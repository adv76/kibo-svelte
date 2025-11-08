<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { getContext } from "./code-block-context.svelte";
    import type { Snippet } from "svelte";
    import type { CodeBlockData } from "./types";

    let {
        class: className,
        child,
        children,
        ...restProps
    }: HTMLAttributes<HTMLSpanElement> & {
        child: Snippet<[CodeBlockData]>;
    } = $props();

    const ctx = getContext();

    const selectedBlock = $derived(ctx.data.find(block => block.language == ctx.value));
</script>

<div {...restProps}>
    {#if child && selectedBlock}
        {@render child(selectedBlock)}
    {:else}
        {@render children?.()}
    {/if}
</div>
