<script lang="ts">
    import { CarouselItem } from "$lib/components/ui/carousel";
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<CarouselItem class={cn("basis-0 pl-2 md:pl-4", className)}>
    <div
        class={cn(
            "group relative overflow-hidden rounded-xl bg-muted/40",
            "cursor-pointer transition-all duration-200",
            "hover:scale-[1.02] hover:shadow-lg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
        )}
        role="button"
        tabIndex={0}
        {...restProps}
    >
        {@render children?.()}
    </div>
</CarouselItem>
