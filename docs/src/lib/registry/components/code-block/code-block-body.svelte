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
        child: Snippet<[CodeBlockData[]]>;
    } = $props();

    const ctx = getContext();
</script>

<div {...restProps}>
    {#if child}
        {@render child(ctx.data)}
    {:else}
        {@render children?.()}
    {/if}
</div>
