<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { Snippet } from "svelte";
    import { getContext } from "./code-block-context.svelte";
    import type { CodeBlockData } from "./types";

    let {
        ref = $bindable(null),
        class: className,
        child,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        child?: Snippet<[CodeBlockData[]]>;
    } = $props();

    const ctx = getContext();
</script>

<div
    bind:this={ref}
    class={cn("flex grow flex-row items-center gap-2", className)}
    {...restProps}
>
    {#if child}
        {@render child(ctx.data)}
    {:else}
        {@render children?.()}
    {/if}
</div>
