<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { Snippet } from "svelte";
    import { getContext } from "./contribution-graph-context.svelte";

    let {
        ref = $bindable(null),
        class: className,
        child,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        child?: Snippet<[{ totalCount: number; year: number; }]>;
    } = $props();

    const ctx = getContext();
</script>

{#if child}
    {@render child({ totalCount: ctx.totalCount, year: ctx.year })}
{:else}
    <div
        bind:this={ref}
        class={cn("text-muted-foreground", className)}
        {...restProps}
    >
        {ctx.labels.totalCount
            ? ctx.labels.totalCount
                .replace("{{count}}", String(ctx.totalCount))
                .replace("{{year}}", String(ctx.year))
            : `${ctx.totalCount} activities in ${ctx.year}`}
    </div>
{/if}
