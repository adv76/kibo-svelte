<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    import { format, isSameDay, isToday } from "date-fns";
    import type { ComponentProps } from "svelte";
    import { getContext } from "./mini-calendar-context.svelte";

    let {
        date,
        class: className,
        ...restProps
    }: ComponentProps<typeof Button> & {
        date: Date
    } = $props();

    const formatDate = (date: Date) => {
        const month = format(date, "MMM");
        const day = format(date, "d");

        return { month, day };
    };

    const ctx = getContext();
    const { month, day } = $derived(formatDate(date));
    const isSelected = $derived(ctx.selectedDate && isSameDay(date, ctx.selectedDate));
    const isTodayDate = $derived(isToday(date));
</script>

<Button
    class={cn(
        "h-auto min-w-[3rem] flex-col gap-0 p-2 text-xs",
        isTodayDate && !isSelected && "bg-accent",
        className
    )}
    onclick={() => ctx.onDateSelect?.(date)}
    size="sm"
    type="button"
    variant={isSelected ? "default" : "ghost"}
    {...restProps}
>
    <span
        class={cn(
            "font-medium text-[10px] text-muted-foreground",
            isSelected && "text-primary-foreground/70"
        )}
    >
        {month}
    </span>
    <span class="font-semibold text-sm">{day}</span>
</Button>
