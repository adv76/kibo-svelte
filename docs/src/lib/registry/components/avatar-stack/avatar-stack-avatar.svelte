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
    } = $props();

    // TODO the inline style below needs work
</script>

<div
    bind:this={ref}
    class={cn(
        "size-full shrink-0 overflow-hidden rounded-full",
        `[&_[data-slot="avatar"]]:size-full`,
        "not-first:mask-radial-from-transparent not-first:mask-radial-to-white mask-circle",
        className
    )}
    style="width: {size}px; height: {size}px; --tw-mask-radial-from-position: 99%; --tw-mask-radial-to-position: 100%; --tw-mask-radial-size: {size / 2}px; --tw-mask-radial-position: -{size / 4 + size / 10}px 50%;"
    {...restProps}
>
    {@render children?.()}
</div>
