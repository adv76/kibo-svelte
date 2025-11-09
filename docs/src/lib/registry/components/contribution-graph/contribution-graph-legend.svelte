<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { Snippet } from "svelte";
    import { getContext } from "./contribution-graph-context.svelte";

    let {
        ref = $bindable(null),
        class: className,
        legendLevel,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        legendLevel?: Snippet<[number]>;
    } = $props();

    const ctx = getContext();
</script>

<div
    class={cn("ml-auto flex items-center gap-[3px]", className)}
    {...restProps}
>
    <span class="mr-1 text-muted-foreground">
        {ctx.labels.legend?.less || "Less"}
    </span>

    {#each { length: ctx.maxLevel + 1 } as _, level(level)}
        {#if legendLevel}
            {@render legendLevel(level)}
        {:else}
            <svg height={ctx.blockSize} width={ctx.blockSize}>
                <title>{`${level} contributions`}</title>
                <rect
                    class={cn(
                        "stroke-[1px] stroke-border",
                        'data-[level="0"]:fill-muted',
                        'data-[level="1"]:fill-muted-foreground/20',
                        'data-[level="2"]:fill-muted-foreground/40',
                        'data-[level="3"]:fill-muted-foreground/60',
                        'data-[level="4"]:fill-muted-foreground/80'
                    )}
                    data-level={level}
                    height={ctx.blockSize}
                    rx={ctx.blockRadius}
                    ry={ctx.blockRadius}
                    width={ctx.blockSize}
                />
            </svg>
        {/if}
    {/each}

    <span class="ml-1 text-muted-foreground">
        {ctx.labels.legend?.more || "More"}
    </span>
</div>
