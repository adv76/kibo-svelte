<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        fallback,
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof Avatar.Image> & {
        fallback?: string;
    } = $props();
</script>

<Avatar.Root 
    bind:ref 
    class={cn("-ml-1 h-4 w-4", className)}
>
    <Avatar.Image {...restProps} />
    <Avatar.Fallback>{fallback}</Avatar.Fallback>
</Avatar.Root>
