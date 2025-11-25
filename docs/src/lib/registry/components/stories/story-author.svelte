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
        "absolute right-0 bottom-0 left-0 z-10",
        "p-3 text-white",
        className
    )}
    {...restProps}
>
    <div class="flex items-center gap-2">
        {@render children?.()}
    </div>
</div>
