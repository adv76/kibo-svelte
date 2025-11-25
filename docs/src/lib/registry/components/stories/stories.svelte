<script lang="ts">
    import { Carousel } from "$lib/components/ui/carousel";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        opts,
        children,
        ...restProps
    }: ComponentProps<typeof Carousel> = $props();
</script>

<Carousel
    class={cn("w-full", className)}
    opts={{
        align: "start",
        loop: false,
        dragFree: true,
        ...opts,
    }}
    {...restProps}
>
    {@render children?.()}
</Carousel>
