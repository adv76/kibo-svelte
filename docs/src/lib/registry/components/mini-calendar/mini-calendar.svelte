<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { setupContext } from "./mini-calendar-context.svelte";
    import { addDays } from "date-fns";
    import { cn } from "$lib/utils";


    let {
        value = $bindable(),
        onValueChange,
        startDate = $bindable(new Date()),
        onStartDateChange,
        days = 5,
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        value?: Date;
        onValueChange?: (date: Date | undefined) => void;
        startDate?: Date;
        onStartDateChange?: (date: Date | undefined) => void;
        days?: number;
    } = $props();

    const handleDateSelect = (date: Date) => {
        value = date;
    };

    const handleNavigate = (direction: "prev" | "next") => {
        startDate = addDays(
            startDate || new Date(),
            direction === "next" ? days : -days
        );
    };

    const ctx = setupContext({
        selectedDate: () => value,
        onDateSelect: handleDateSelect,
        startDate: () => startDate,
        onNavigate: handleNavigate,
        days: () => days
    });
</script>

<div
    class={cn(
        "flex items-center gap-2 rounded-lg border bg-background p-2",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
