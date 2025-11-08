<script lang="ts">
    import type { Snippet } from "svelte";
    import { getContext } from "./contribution-graph-context.svelte";
    import type { Activity } from "./types";
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils";
    import { getMonthLabels } from "./utils";

    let {
        ref = $bindable(null),
        hideMonthLabels = false,
        class: className,
        block,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        hideMonthLabels?: boolean;
        block: Snippet<[{ activity: Activity; dayIndex: number; weekIndex: number; }]>;
    } = $props();

    const ctx = getContext();

    const monthLabels = $derived(getMonthLabels(ctx.weeks, ctx.labels.months));
</script>

<div
    bind:this={ref}
    class={cn("max-w-full overflow-x-auto overflow-y-hidden", className)}
    {...restProps}
>
    <svg
        class="block overflow-visible"
        height={ctx.height}
        viewBox={`0 0 ${ctx.width} ${ctx.height}`}
        width={ctx.width}
    >
        <title>Contribution Graph</title>
        {#if !hideMonthLabels}
            <g class="fill-current">
                {#each monthLabels as label, weekIndex(weekIndex)}
                    <text
                        dominant-baseline="hanging"
                        x={(ctx.blockSize + ctx.blockMargin) * weekIndex}
                    >
                        {label}
                    </text>
                {/each}
            </g>
        {/if}

        {#if block}
            {#each ctx.weeks as week, weekIndex(weekIndex)}
                {#each week as activity, dayIndex(dayIndex)}
                    {#if activity}
                        {@render block({ activity, dayIndex, weekIndex })}
                    {/if}
                {/each}
            {/each}
        {:else}
            {@render children?.()}
        {/if}
    </svg>
</div>
