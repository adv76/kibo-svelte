<script lang="ts">
    import { Tabs } from "$lib/components/ui/tabs";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof Tabs> & {
    } = $props();
</script>

<Tabs
    bind:ref
    class={cn(
        "group w-full gap-0 overflow-hidden rounded-md border",
      className
    )}
    {...restProps}
/>
