<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn } from "$lib/utils.js";
    import QR from "qrcode";
    import { formatHex, oklch } from "culori";
    import { untrack } from "svelte";


    let {
        data,
        foreground,
        background,
        robustness = "M",
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
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

    const generateQRSVG = async (text: string, ec: "L" | "M" | "Q" | "H", fg?: string, bg?: string) => {
        try {
            const styles = getComputedStyle(document.documentElement);
            const foregroundColor = fg ?? styles.getPropertyValue("--foreground");
            const backgroundColor = bg ?? styles.getPropertyValue("--background");

            const foregroundOklch = getOklch(foregroundColor, [0.21, 0.006, 285.885]);
            const backgroundOklch = getOklch(backgroundColor, [0.985, 0, 0]);

            return await QR.toString(text, {
                type: "svg",
                color: {
                    dark: formatHex(oklch({ mode: "oklch", ...foregroundOklch })),
                    light: formatHex(oklch({ mode: "oklch", ...backgroundOklch })),
                },
                width: 200,
                errorCorrectionLevel: ec,
                margin: 0,
            });
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

        untrack(() => {
            generateQRSVG(data, robustness, foreground, background).then((svg) => svgString = svg);
        });
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
