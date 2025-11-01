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
    class={cn("pointer-events-none relative select-none", className)}
    {...restProps}
>
    {@render children?.()}
</span>
