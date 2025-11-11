<script lang="ts">
    import * as Select from "$lib/components/ui/select";
    import type { ComponentProps } from "svelte";
    import { getContext } from "./color-picker-context.svelte";

    const formats = ["hex", "rgb", "css", "hsl"];

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: ComponentProps<typeof Select.Trigger> = $props();

    const ctx = getContext();
</script>

<Select.Root type="single" bind:value={ctx.mode}>
    <Select.Trigger class="h-8 w-20 shrink-0 text-xs" {...restProps}>
        <span>{ctx.mode.toUpperCase()}</span>
    </Select.Trigger>
    <Select.Content>
        {#each formats as format(format)}
            <Select.Item class="text-xs" value={format}>{format.toUpperCase()}</Select.Item>
        {/each}
    </Select.Content>
</Select.Root>
