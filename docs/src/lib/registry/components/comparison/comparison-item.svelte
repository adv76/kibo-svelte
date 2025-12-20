<script lang="ts">
    import type { ComponentProps } from "svelte";
    import { motion } from "@humanspeak/svelte-motion";
    import { cn } from "$lib/utils";
    import { useComparisonState } from "./comparison-context.svelte";

    let {
        class: className,
        position,
        children,
        ...restProps
    }: ComponentProps<typeof motion.div> & {
        position: "left" | "right"
    } = $props();

    const ctx = useComparisonState();

    const leftClipPath = $derived(`inset(0 0 0 ${ctx.motionSliderPosition}%)`);
    const rightClipPath = $derived(`inset(0 ${100 - ctx.motionSliderPosition}% 0 0)`);
</script>

<motion.div
    aria-hidden="true"
    className={cn("absolute inset-0 h-full w-full object-cover", className)}
    role="img"
    style="clip-path: {position === "left" ? leftClipPath : rightClipPath};"
    {...restProps}
>
    {@render children?.()}
</motion.div>
