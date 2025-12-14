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
        "group/kibo-credit-card perspective-distant aspect-8560/5398 w-full max-w-96 text-white",
        "@container",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
