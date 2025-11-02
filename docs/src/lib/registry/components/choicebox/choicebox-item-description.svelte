<script lang="ts">
    import { FieldDescription } from "$lib/components/ui/field";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof FieldDescription> = $props();
</script>

<FieldDescription 
    bind:ref    
    class={className} 
    {...restProps}
/>
