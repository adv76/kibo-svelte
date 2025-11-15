<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import QR from "qrcode";


    let {
        ref = $bindable(null),
        data,
        foreground,
        background,
        robustness = "M",
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        data: string;
        foreground?: string;
        background?: string;
        robustness?: "L" | "M" | "Q" | "H";
    } = $props();

    const oklchRegex = /oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/;

    const getOklch = (color: string, fallback: [number, number, number]) => {
        const oklchMatch = color.match(oklchRegex);

        if (!oklchMatch) {
            return { l: fallback[0], c: fallback[1], h: fallback[2] };
        }

        return {
            l: Number.parseFloat(oklchMatch[1]),
            c: Number.parseFloat(oklchMatch[2]),
            h: Number.parseFloat(oklchMatch[3]),
        };
    };

    const generateQRSVG = async (data: string, robustness: "L" | "M" | "Q" | "H", foreground?: string, background?: string) => {
        try {
            const styles = getComputedStyle(document.documentElement);
            const foregroundColor = foreground ?? styles.getPropertyValue("--foreground");
            const backgroundColor = background ?? styles.getPropertyValue("--background");

            const foregroundOklch = getOklch(foregroundColor, [0.21, 0.006, 285.885]);
            const backgroundOklch = getOklch(backgroundColor, [0.985, 0, 0]);

            return await QR.toString(data, {
                type: "svg",
                color: {
                    dark: formatHex(oklch({ mode: "oklch", ...foregroundOklch })),
                    light: formatHex(oklch({ mode: "oklch", ...backgroundOklch })),
                },
                width: 200,
                errorCorrectionLevel: robustness,
                margin: 0,
            }) as string;
        } catch (err) {
            console.error(err);
        }
    };

    let svgString = $state<string>();

    $effect(() => {
        data;
        foreground;
        background;
        robustness;

        generateQRSVG(data, robustness, foreground, background).then((svg) => svgString = svg)
    });
</script>

<div
    class={cn("size-full", "[&_svg]:size-full", className)}
    {...restProps}
>
    {#if svgString}
        {@html svgString}
    {/if}
</div>
