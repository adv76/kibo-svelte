<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
    class={cn(
        "absolute inset-0 flex items-center justify-center rounded-lg border border-dashed text-muted-foreground",
        className
    )}
    {...restProps}
>
    {#if children}
        {@render children?.()}
    {:else}
        <p class="text-sm">No more cards</p>
    {/if}
</div>
