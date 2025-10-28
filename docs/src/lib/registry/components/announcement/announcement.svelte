<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        variant = "outline",
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
    class={cn(
        "group max-w-full gap-2 rounded-full bg-background px-3 py-0.5 font-medium shadow-sm transition-all",
        "hover:shadow-md",
        themed && "announcement-themed border-foreground/5",
        className
    )}
    {variant}
    {...restProps}
>
    {@render children?.()}
</Badge>
