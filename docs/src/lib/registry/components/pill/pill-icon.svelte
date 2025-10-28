<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { Icon as LucideIcon } from "@lucide/svelte";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        icon: Icon,
        ...restProps
    }: ComponentProps<typeof LucideIcon> & {
        icon: typeof LucideIcon;
    } = $props();
</script>

<Icon
    className={cn("size-3 text-muted-foreground", className)}
    size={12}
    {...restProps}
/>
