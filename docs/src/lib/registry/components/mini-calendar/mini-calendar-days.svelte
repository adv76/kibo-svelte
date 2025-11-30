<script lang="ts">
    import { cn } from "$lib/utils";
    import { addDays } from "date-fns";
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import { getContext } from "./mini-calendar-context.svelte";

    let {
        class: className,
        child,
        ...restProps
    }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
        child: Snippet<[{ date: Date }]>;
    } = $props();

    const ctx = getContext();
    

    const getDays = (startDate: Date, count: number): Date[] => {
        const days: Date[] = [];
        for (let i = 0; i < count; i++) {
            days.push(addDays(startDate, i));
        }
        return days;
    };

    const days = $derived(getDays(ctx.startDate, ctx.days));
</script>

<div class={cn("flex items-center gap-1", className)} {...restProps}>
    {#each days as date(date.toISOString())}
        {@render child({ date })}
    {/each}
</div>
