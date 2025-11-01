<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span 
    bind:this={ref}
    {...restProps}
>
    {@render children?.()}
</span>
