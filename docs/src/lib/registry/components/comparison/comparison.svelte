<script lang="ts">
    import type { HTMLAttributes, MouseEventHandler, TouchEventHandler } from "svelte/elements";
    import { setupComparisonState } from "./comparison-context.svelte";
    import { useSpring } from "@humanspeak/svelte-motion";
    import { fromStore, toStore } from "svelte/store";
    import { cn } from "$lib/utils";

    let {
        class: className,
        mode = "drag",
        onDragStart,
        onDragEnd,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        mode?: "hover" | "drag";
        onDragStart?: () => void;
        onDragEnd?: () => void;
    } = $props();

    let isDragging = $state(false);
    let sliderPosition = $state(50);

    const motionSliderPosition = useSpring(toStore(() => sliderPosition), {
        stiffness: 250
    });

    const ctx = setupComparisonState({
        sliderPosition: () => sliderPosition,
        motionSliderPosition: () => fromStore(motionSliderPosition).current as number, // TS shutup
        mode: () => mode
    });

    const handleDrag = (domRect: DOMRect, clientX: number) => {
        if (!isDragging && mode === "drag") {
            return;
        }

        const x = clientX - domRect.left;
        const percentage = Math.min(Math.max((x / domRect.width) * 100, 0), 100);
        sliderPosition = percentage;
    };

    const handleMouseDrag: MouseEventHandler<HTMLDivElement> = (event) => {
        if (!event) {
            return;
        }

        const containerRect = event.currentTarget.getBoundingClientRect();

        handleDrag(containerRect, event.clientX);
    };

    const handleTouchDrag: TouchEventHandler<HTMLDivElement> = (event) => {
        if (!event) {
            return;
        }

        const containerRect = event.currentTarget.getBoundingClientRect();
        const touches = Array.from(event.touches);

        handleDrag(containerRect, touches.at(0)?.clientX ?? 0);
    };

    const handleDragStart = () => {
        if (mode === "drag") {
            isDragging = true;
            onDragStart?.();
        }
    };

    const handleDragEnd = () => {
        if (mode === "drag") {
            isDragging = false;
            onDragEnd?.();
        }
    };
</script>

<div
    aria-label="Comparison slider"
    aria-valuemax={100}
    aria-valuemin={0}
    aria-valuenow={sliderPosition}
    class={cn(
        "relative isolate w-full select-none overflow-hidden",
        className
    )}
    onmousedown={handleDragStart}
    onmouseleave={handleDragEnd}
    onmousemove={handleMouseDrag}
    onmouseup={handleDragEnd}
    ontouchend={handleDragEnd}
    ontouchmove={handleTouchDrag}
    ontouchstart={handleDragStart}
    role="slider"
    tabIndex={0}
    {...restProps}
>
    {@render children?.()}
</div>
