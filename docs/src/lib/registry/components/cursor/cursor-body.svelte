<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
    bind:this={ref}
    class={cn(
        "relative ml-3.5 flex flex-col whitespace-nowrap rounded-xl py-1 pr-3 pl-2.5 text-xs",
        // Rules below only apply when there is more than one child
        "[&>:has(:nth-child(2))]:rounded-tl [&>:not(:only-child):first-child]:opacity-70", 
        "bg-secondary text-foreground",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</span>
