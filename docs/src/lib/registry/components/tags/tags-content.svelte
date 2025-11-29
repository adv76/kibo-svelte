<script lang="ts">
    import { Command } from "$lib/components/ui/command";
    import { PopoverContent } from "$lib/components/ui/popover";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";
    import { getContext } from "./tags-context.svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof PopoverContent> = $props();

    const ctx = getContext();
</script>

<PopoverContent
    class={cn("p-0", className)}
    style="width: {ctx.width};"
    {...restProps}
>
    <Command>
        {@render children?.()}
    </Command>
</PopoverContent>
