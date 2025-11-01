<script lang="ts">
    import { TabsTrigger } from "$lib/components/ui/tabs";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof TabsTrigger> & {
    } = $props();
</script>

<TabsTrigger
    bind:ref
    class={cn("gap-1.5", className)} 
    {...restProps}
>
    {@render children?.()}
</TabsTrigger>
