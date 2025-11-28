<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";
    import { setupTimeContext } from "./relative-time-context.svelte";

    let {
        time,
        onTimeChange,
        dateFormatOptions,
        timeFormatOptions,
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        time?: Date;
        onTimeChange?: (time: Date) => void;
        dateFormatOptions?: Intl.DateTimeFormatOptions;
        timeFormatOptions?: Intl.DateTimeFormatOptions;
    } = $props();

    let timeInternal = $derived(time ?? new Date());

    $effect(() => {
        time;
        if (time) return;

        const interval = setInterval(() => {
            timeInternal = new Date();
            onTimeChange?.(timeInternal);
        }, 1000);

        return () => clearInterval(interval);
    });

    const ctx = setupTimeContext({
        time: () => timeInternal,
        dateFormatOptions,
        timeFormatOptions
    });
</script>

<div class={cn("grid gap-2", className)} {...restProps}>
    {@render children?.()}
</div>
