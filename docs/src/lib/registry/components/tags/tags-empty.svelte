<script lang="ts">
    import { CommandEmpty } from "$lib/components/ui/command";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof CommandEmpty> = $props();
</script>

<CommandEmpty 
    class={className} 
    {...restProps}
>
    {#if children}
        {@render children?.()}
    {:else}
        {"No tags found."}
    {/if}
</CommandEmpty>
