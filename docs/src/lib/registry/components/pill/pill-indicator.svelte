<script lang="ts">
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        ref = $bindable(null),
        variant = "success",
        pulse = false,
        class: className,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
        variant?: "success" | "error" | "warning" | "info";
        pulse?: boolean;
    } = $props();
</script>

<span
    bind:this={ref}
    class="relative flex size-2"
    {...restProps}
>
    {#if pulse}
        <span
            class={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                variant === "success" && "bg-emerald-400",
                variant === "error" && "bg-rose-400",
                variant === "warning" && "bg-amber-400",
                variant === "info" && "bg-sky-400"
            )}
        ></span>
    {/if}

    <span
        class={cn(
            "relative inline-flex size-2 rounded-full",
            variant === "success" && "bg-emerald-500",
            variant === "error" && "bg-rose-500",
            variant === "warning" && "bg-amber-500",
            variant === "info" && "bg-sky-500"
        )}
    ></span>
</span>
