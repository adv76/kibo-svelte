<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        size = 40,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        size?: number;
    }= $props();

    // TODO the inline style below needs work
</script>

<div
    class={cn(
        "size-full shrink-0 overflow-hidden rounded-full",
        '[&_[data-slot="avatar"]]:size-full',
        className
    )}
    style="width: {size}; height: {size}; mask-image: radial-gradient(circle {size / 2}px at -{size / 4 + size / 10}px 50%, transparent 99%, white 100%)"
>
    {@render children?.()}
</div>
