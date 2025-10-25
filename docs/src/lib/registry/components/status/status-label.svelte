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
    class={cn("text-muted-foreground", className)} 
    {...restProps}
>
    {#if children}
        {@render children()}
    {:else}
        <span class="hidden group-[.online]:block">Online</span>
        <span class="hidden group-[.offline]:block">Offline</span>
        <span class="hidden group-[.maintenance]:block">Maintenance</span>
        <span class="hidden group-[.degraded]:block">Degraded</span>
    {/if}
</span>
