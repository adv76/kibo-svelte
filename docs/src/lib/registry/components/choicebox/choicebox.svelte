<script lang="ts">
    import { RadioGroup } from "$lib/components/ui/radio-group";
    import type { ComponentProps } from "svelte";
    import { cn } from "$lib/utils";

    let {
        ref = $bindable(null),
        value = $bindable(),
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof RadioGroup> = $props();
</script>

<RadioGroup 
    bind:ref 
    bind:value
    class={cn("w-full", className)} 
    {...restProps}    
>
    {@render children?.()}
</RadioGroup>
