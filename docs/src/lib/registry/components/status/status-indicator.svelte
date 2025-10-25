<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span 
    bind:this={ref} 
    class="relative flex h-2 w-2" 
    {...restProps}
>
    <span
        class={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            "group-[.online]:bg-emerald-500",
            "group-[.offline]:bg-red-500",
            "group-[.maintenance]:bg-blue-500",
            "group-[.degraded]:bg-amber-500"
        )}
    ></span>
    <span
        class={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            "group-[.online]:bg-emerald-500",
            "group-[.offline]:bg-red-500",
            "group-[.maintenance]:bg-blue-500",
            "group-[.degraded]:bg-amber-500"
        )}
    ></span>
</span>
