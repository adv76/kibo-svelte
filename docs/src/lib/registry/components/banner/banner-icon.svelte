<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { Icon as LucideIcon } from "@lucide/svelte";

    let {
        ref = $bindable(null),
        class: className,
        icon: Icon,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        icon: typeof LucideIcon;
    } = $props();
</script>

<div
    bind:this={ref}
    class={cn(
        "rounded-full border border-background/20 bg-background/10 p-1 shadow-sm",
        className
    )}
    {...restProps}
>
    <Icon size={16} />
</div>
