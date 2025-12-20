<script lang="ts">
    import type { ComponentProps } from "svelte";
    import { motion } from "@humanspeak/svelte-motion";
    import { cn } from "$lib/utils";
    import { GripVerticalIcon } from "@lucide/svelte";
    import { useComparisonState } from "./comparison-context.svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof motion.div> = $props();

    const ctx = useComparisonState();
    const left = $derived(`${ctx.motionSliderPosition}%`);
</script>

<motion.div
    aria-hidden="true"
    class={cn(
        "-translate-x-1/2 absolute top-0 z-50 flex h-full w-10 items-center justify-center",
        ctx.mode === "drag" && "cursor-grab active:cursor-grabbing",
        className
    )}
    role="presentation"
    style="left: {left};"
    {...restProps}
>
    {#if children}
        {@render children()}
    {:else}
        <div class="-translate-x-1/2 absolute left-1/2 h-full w-1 bg-background"></div>
        {#if ctx.mode === "drag"}
            <div class="z-50 flex items-center justify-center rounded-sm bg-background px-0.5 py-1">
                <GripVerticalIcon class="h-4 w-4 select-none text-muted-foreground" />
            </div>
        {/if}
    {/if}
</motion.div>
