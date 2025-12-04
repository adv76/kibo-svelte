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
    class={cn("m-0 p-2 font-semibold text-sm", className)} 
    {...restProps}
>
    {@render children?.()}
</div>
