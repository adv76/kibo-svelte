<script lang="ts">
    import { cn } from "$lib/utils";
    import { RatingGroup, type RatingGroupItemData } from "bits-ui";
    import type { ComponentProps, Snippet } from "svelte"; 

    let {
        value = $bindable(),
        class: className,
        child,
        ...restProps
    }: Omit<ComponentProps<typeof RatingGroup.Root>, "children" | "child"> & {
        child?: Snippet<[ RatingGroupItemData ]>;
    } = $props();
</script>

<RatingGroup.Root 
    bind:value
    class={cn("flex gap-1", className)}
    {...restProps}
>
    {#snippet children({ items })}
        {#each items as item(item.index)}
            {@render child?.(item)}
        {/each}
    {/snippet}
</RatingGroup.Root>
