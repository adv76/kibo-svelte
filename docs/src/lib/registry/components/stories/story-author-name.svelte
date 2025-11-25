<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span class={cn("truncate font-medium text-sm", className)} {...restProps}>
    {@render children?.()}
</span>
