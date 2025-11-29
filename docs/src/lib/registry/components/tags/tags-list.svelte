<script lang="ts">
    import { CommandList } from "$lib/components/ui/command";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof CommandList> = $props();
</script>

<CommandList 
    class={cn("max-h-[200px]", className)}
    {...restProps}
>
    {@render children?.()}
</CommandList>
