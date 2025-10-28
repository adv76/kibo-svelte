<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof Button> = $props();
</script>

<Button
    bind:ref
    class={cn(
        "-my-2 -mr-2 size-6 rounded-full p-0.5 hover:bg-foreground/5",
        className
    )}
    size="icon"
    variant="ghost"
    {...restProps}
/>
