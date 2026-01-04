<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";
    import { useTickerState } from "./ticker-context.svelte";

    let {
        change,
        isPercent,
        class: className,
        ...props
    }: Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
        change: number;
        isPercent?: boolean;
    } = $props();

    const isPositiveChange = $derived(change >= 0);
    const ctx = useTickerState();

    const changeFormatted = $derived(isPercent 
        ? `${change.toFixed(2)}%` 
        : ctx.formatter.format(change));
</script>

<span
    class={cn(
        "flex items-center gap-0.5",
        isPositiveChange
            ? "text-green-600 dark:text-green-500"
            : "text-red-600 dark:text-red-500",
        className
    )}
    {...props}
>
    <svg
        aria-labelledby="ticker-change-icon-title"
        class={isPositiveChange ? "" : "rotate-180"}
        fill="currentColor"
        height="12"
        role="img"
        viewBox="0 0 24 24"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title id="ticker-change-icon-title">
            {isPositiveChange ? "Up icon" : "Down icon"}
        </title>
        <path d="M24 22h-24l12-20z" />
    </svg>
    {changeFormatted}
</span>
