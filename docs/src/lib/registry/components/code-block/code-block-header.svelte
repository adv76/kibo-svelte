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
        "flex flex-row items-center border-b bg-secondary p-1",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
