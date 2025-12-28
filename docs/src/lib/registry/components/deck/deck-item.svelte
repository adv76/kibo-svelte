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
        "flex h-full w-full items-center justify-center rounded-lg border bg-card text-card-foreground shadow-lg",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
