<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        variant = "secondary",
        themed = false,
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof Badge> & {
        themed?: boolean;
    } = $props();
</script>

<Badge
    bind:ref
    class={cn("gap-2 rounded-full px-3 py-1.5 font-normal", className)}
    {variant}
    {...restProps}
>
    {@render children?.()}
</Badge>
