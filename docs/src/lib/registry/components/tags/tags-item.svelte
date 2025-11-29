<script lang="ts">
    import { CommandItem } from "$lib/components/ui/command";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof CommandItem> = $props();
</script>

<CommandItem
    class={cn("cursor-pointer items-center justify-between", className)}
    {...restProps}
>
    {@render children?.()}
</CommandItem>
