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
        "absolute top-0 right-0 left-0 z-10",
        "p-3 text-white",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
