<script lang="ts">
    import { cn } from "$lib/utils";
    import { Star } from "@lucide/svelte";
    import { RatingGroup } from "bits-ui";
    import type { ComponentProps } from "svelte"; 
    import type { Icon as LucideIcon } from "@lucide/svelte";

    let {
        index,
        icon: Icon,
        size = 20,
        class: className,
        ...restProps
    }: ComponentProps<typeof RatingGroup.Item> & {
        icon?: typeof LucideIcon;
        size?: number;
    } = $props();

</script>

<RatingGroup.Item 
    {index} 
    class={cn(
        "text-foreground hover:fill-current *:stroke-current data-[state=active]:*:fill-current group cursor-pointer transition-colors",
        className
    )} 
    {...restProps}
>
    {#if Icon}
        <Icon {size} />
    {:else}
        <Star {size} />
    {/if}
</RatingGroup.Item>
