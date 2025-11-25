<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        src,
        alt,
        ...restProps
    }: HTMLAttributes<HTMLImageElement> & {
        src?: string;
        alt: string;
    } = $props();
</script>

<img
    {src}
    {alt}
    class={cn(
        "absolute inset-0 h-full w-full object-cover",
        "transition-opacity duration-200",
        "group-hover:opacity-90",
        className
    )}
    {...restProps}
/>
