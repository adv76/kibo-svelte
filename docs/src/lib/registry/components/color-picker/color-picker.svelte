<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import Color from "color";
    import { setupContext } from "./color-picker-context.svelte";

    let {
        ref = $bindable(null),
        value,
        defaultValue = "#000000",
        onChange,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        value?: Parameters<typeof Color>[0];
        defaultValue?: Parameters<typeof Color>[0];
        onChange?: (value: Parameters<typeof Color.rgb>[0]) => void;
    } = $props();

    
    const selectedColor = Color(value);
    const defaultColor = Color(defaultValue);

    const ctx = setupContext({
        hue: selectedColor.hue() || defaultColor.hue() || 0,
        saturation: selectedColor.saturationl() || defaultColor.saturationl() || 100,
        lightness: selectedColor.lightness() || defaultColor.lightness() || 50,
        alpha: selectedColor.alpha() * 100 || defaultColor.alpha() * 100,
        mode: "hex"
    });

    $effect(() => {
        if (value) {
            const color = Color.rgb(value).rgb().object();
            ctx.hue = color.r;
            ctx.saturation = color.g;
            ctx.lightness = color.b;
            ctx.alpha = color.a;
        }
    });

    $effect(() => {
        if (onChange) {
            const color = Color.hsl(ctx.hue, ctx.saturation, ctx.lightness).alpha(ctx.alpha / 100);
            const rgba = color.rgb().array();

            onChange([rgba[0], rgba[1], rgba[2], ctx.alpha / 100]);
        }
    });
</script>

<div
    bind:this={ref}
    class={cn("flex size-full flex-col gap-4", className)}
    {...restProps}
>
    {@render children?.()}
</div>
