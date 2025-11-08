<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import { getContext } from "./contribution-graph-context.svelte";
    import type { Activity } from "./types";

    let {
        ref = $bindable(null),
        activity,
        dayIndex,
        weekIndex,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<SVGRectElement>> & {
        activity: Activity;
        dayIndex: number;
        weekIndex: number;
    } = $props();

    const ctx = getContext();

    if (activity.level < 0 || activity.level > ctx.maxLevel) {
        throw `Provided activity level ${activity.level} for ${activity.date} is out of range. It must be between 0 and ${ctx.maxLevel}.`
    }
</script>

<rect
    bind:this={ref}
    class={cn(
        'data-[level="0"]:fill-muted',
        'data-[level="1"]:fill-muted-foreground/20',
        'data-[level="2"]:fill-muted-foreground/40',
        'data-[level="3"]:fill-muted-foreground/60',
        'data-[level="4"]:fill-muted-foreground/80',
        className
    )}
    data-count={activity.count}
    data-date={activity.date}
    data-level={activity.level}
    height={ctx.blockSize}
    rx={ctx.blockRadius}
    ry={ctx.blockRadius}
    width={ctx.blockSize}
    x={(ctx.blockSize + ctx.blockMargin) * weekIndex}
    y={ctx.labelHeight + (ctx.blockSize + ctx.blockMargin) * dayIndex}
    {...restProps}
/>
    
