<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import Color from "color";
    import { getContext } from "./color-picker-context.svelte";
    import { Input } from "$lib/components/ui/input";
    import ColorPickerPercentageInput from "./color-picker-percentage-input.svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

    const ctx = getContext();

    const color = $derived(Color.hsl(ctx.hue, ctx.saturation, ctx.lightness, ctx.alpha / 100));
</script>

{#if ctx.mode === "hex"}
    {@const hex = color.hex()}
    <div
        bind:this={ref}
        class={cn(
            "-space-x-px relative flex w-full items-center rounded-md shadow-sm",
            className
        )}
        {...restProps}
    >
        <Input
            class="h-8 rounded-r-none bg-secondary px-2 text-xs shadow-none"
            readonly
            type="text"
            value={hex}
        />
        <ColorPickerPercentageInput value={ctx.alpha} />
    </div>
{:else if ctx.mode === "rgb"}
    {@const rgb = color
        .rgb()
        .array()
        .map((value) => Math.round(value))}
    <div
        bind:this={ref}
        class={cn(
            "-space-x-px flex items-center rounded-md shadow-sm",
            className
        )}
        {...restProps}
    >
        {#each rgb as val, i(i)}
            <Input
                class={cn(
                    "h-8 rounded-r-none bg-secondary px-2 text-xs shadow-none",
                    i && "rounded-l-none",
                    className
                )}
                readonly
                type="text"
                value={val}
            />
        {/each}
        <ColorPickerPercentageInput value={ctx.alpha} />
    </div>
{:else if ctx.mode === "css"}
    {@const rgb = color
        .rgb()
        .array()
        .map((value) => Math.round(value))}
    <div 
        bind:this={ref}
        class={cn("w-full rounded-md shadow-sm", className)} 
        {...restProps}
    >
        <Input
            class="h-8 w-full bg-secondary px-2 text-xs shadow-none"
            readonly
            type="text"
            value={`rgba(${rgb.join(", ")}, ${ctx.alpha}%)`}
            {...restProps}
        />
    </div>
{:else if ctx.mode === "hsl"}
    {@const hsl = color
        .hsl()
        .array()
        .map((value) => Math.round(value))}
    <div
        bind:this={ref}
        class={cn(
            "-space-x-px flex items-center rounded-md shadow-sm",
            className
        )}
        {...restProps}
    >
        {#each hsl as val, i(i)}
            <Input
                class={cn(
                    "h-8 rounded-r-none bg-secondary px-2 text-xs shadow-none",
                    i && "rounded-l-none",
                    className
                )}
                readonly
                type="text"
                value={val}
            />
        {/each}
        <ColorPickerPercentageInput value={ctx.alpha} />
    </div>
{/if}
