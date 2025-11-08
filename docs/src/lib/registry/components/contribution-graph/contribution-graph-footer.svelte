<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
    class={cn(
        "flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
