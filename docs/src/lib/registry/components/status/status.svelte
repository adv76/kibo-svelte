<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        status,
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof Badge> & {
        status: "online" | "offline" | "maintenance" | "degraded";
    } = $props();
</script>

<Badge
    bind:ref
    class={cn("flex items-center gap-2", "group", status, className)}
    variant="secondary"
    {...restProps}
/>
