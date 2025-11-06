<script lang="ts">
    import { Select } from "$lib/components/ui/select";
    import type { ComponentProps } from "svelte";
    import { getContext } from "./code-block-context.svelte";

    let {
        ...restProps
    }: Omit<ComponentProps<typeof Select>, "type" | "onValueChange" | "value"> = $props();

    const ctx = getContext();
</script>

<Select
    type="single"
    onValueChange={(v) => ctx.onValueChange?.(v)} 
    bind:value={ctx.value} 
    {...restProps} 
/>
