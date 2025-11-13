<script lang="ts">
    import { FieldContent } from "$lib/components/ui/field";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof FieldContent> = $props();
</script>

<FieldContent 
    bind:ref
    class={className} 
    {...restProps}
>
    {@render children?.()}
</FieldContent>
