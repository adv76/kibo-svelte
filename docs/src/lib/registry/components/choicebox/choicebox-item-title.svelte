<script lang="ts">
    import { FieldTitle } from "$lib/components/ui/field";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof FieldTitle> = $props();
</script>

<FieldTitle 
    bind:ref
    class={className} 
    {...restProps} 
/>
