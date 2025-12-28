<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn("relative isolate", className)} {...restProps}>
    {@render children?.()}
</div>
