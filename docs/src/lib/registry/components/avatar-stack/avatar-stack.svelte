<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        animate = false,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        animate?: boolean;
    } = $props();
</script>

<div
    bind:this={ref}
    class={cn(
        "-space-x-1 flex items-center",
        animate && "hover:space-x-0 [&>*]:transition-all",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
