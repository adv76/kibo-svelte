<script lang="ts">
    import { Button, type ButtonProps } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    import Color from "color";
    import { getContext } from "./color-picker-context.svelte";
    import { PipetteIcon } from "@lucide/svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: ButtonProps = $props();

    const ctx = getContext();

    const handleEyeDropper = async () => {
        try {
            // @ts-expect-error - EyeDropper API is experimental
            const eyeDropper = new EyeDropper();
            const result = await eyeDropper.open();
            const color = Color(result.sRGBHex);
            const [h, s, l] = color.hsl().array();

            ctx.hue = h;
            ctx.saturation = s;
            ctx.lightness = l;
            ctx.alpha = 100;
        } catch (error) {
            console.error("EyeDropper failed:", error);
        }
    };
</script>

<Button
    class={cn("shrink-0 text-muted-foreground", className)}
    onclick={handleEyeDropper}
    size="icon"
    type="button"
    variant="outline"
    {...restProps}
>
    <PipetteIcon size={16} />
</Button>
