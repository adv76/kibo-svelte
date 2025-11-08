<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { Activity, Labels, WeekDay } from "./types";
    import { DEFAULT_LABELS, groupByWeeks } from "./utils";
    import { getYear, parseISO } from "date-fns";
    import { setupContext } from "./contribution-graph-context.svelte";

    let {
        ref = $bindable(null),
        data,
        blockMargin = 4,
        blockRadius = 2,
        blockSize = 12,
        fontSize = 14,
        labels: labelsProp = undefined,
        maxLevel: maxLevelProp = 4,
        totalCount: totalCountProp = undefined,
        weekStart = 0,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        data: Activity[];
        blockMargin?: number;
        blockRadius?: number;
        blockSize?: number;
        fontSize?: number;
        labels?: Labels;
        maxLevel?: number;
        totalCount?: number;
        weekStart?: WeekDay;
    } = $props();

    const maxLevel = $derived(Math.max(1, maxLevelProp));
    const weeks = $derived(groupByWeeks(data, weekStart));

    const LABEL_MARGIN = 8;

    const labels = $derived({ ...DEFAULT_LABELS, ...labelsProp });
    const labelHeight = $derived(fontSize + LABEL_MARGIN);

    const year = $derived(data.length > 0
        ? getYear(parseISO(data[0].date))
        : new Date().getFullYear());

    const totalCount =
        $derived(typeof totalCountProp === "number"
            ? totalCountProp
            : data.reduce((sum, activity) => sum + activity.count, 0));

    const width = $derived(weeks.length * (blockSize + blockMargin) - blockMargin);
    const height = $derived(labelHeight + (blockSize + blockMargin) * 7 - blockMargin);

    const ctx = setupContext({
        data,
        // svelte-ignore state_referenced_locally
        weeks,
        blockMargin,
        blockRadius,
        blockSize,
        fontSize,
        // svelte-ignore state_referenced_locally
        labels,
        // svelte-ignore state_referenced_locally
        labelHeight,
        // svelte-ignore state_referenced_locally
        maxLevel,
        // svelte-ignore state_referenced_locally
        totalCount,
        weekStart,
        // svelte-ignore state_referenced_locally
        year,
        // svelte-ignore state_referenced_locally
        width,
        // svelte-ignore state_referenced_locally
        height
    });
</script>

{#if data.length > 0}
    <div
        class={cn("flex w-max max-w-full flex-col gap-2", className)}
        style="font-size: {fontSize};"
        {...restProps}
    >
        {@render children?.()}
    </div>
{/if}
