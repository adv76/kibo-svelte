<script lang="ts">
    import { CarouselContent } from "$lib/components/ui/carousel";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof CarouselContent> = $props();
</script>

<CarouselContent class={cn("-ml-2 gap-2", className)} {...restProps}>
    {@render children?.()}
</CarouselContent>
