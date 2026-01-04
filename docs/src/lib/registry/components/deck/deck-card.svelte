<script lang="ts">
    import { motion, useMotionValue, useTransform, type PanInfo, type MotionStyle } from "motion-sv";
    import type { Snippet } from "svelte";

    type Props = {
        onSwipe: (direction: "left" | "right") => void;
        threshold: number;
        exitDirection: "left" | "right" | null;
        style?: MotionStyle;
        children?: Snippet;
    };

    let {
        onSwipe,
        threshold,
        exitDirection,
        style,
        children,
    }: Props = $props();

    const x = useMotionValue(0);

    const rotate = useTransform(x, [-200, 200], [-25, 25]);
    const opacity = useTransform(
        x,
        [-200, -threshold, 0, threshold, 200],
        [0, 1, 1, 1, 0]
    );

    const handleDragEnd = (_: unknown, info: PanInfo) => {
        console.log("drag end")
        const swipeThreshold = threshold;

        if (Math.abs(info.offset.x) > swipeThreshold) {
            const direction = info.offset.x > 0 ? "right" : "left";
            onSwipe(direction);
        }
    };

    let exitX = $derived(exitDirection === "left" 
        ? -500 
        : exitDirection === "right" 
            ? 500 
            : 0);
</script>

<motion.div
    animate={exitDirection ? { x: exitX, opacity: 0 } : undefined}
    class="absolute inset-0 cursor-grab active:cursor-grabbing"
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    onDragEnd={handleDragEnd}
    style={{
        x,
        rotate,
        opacity,
        ...style
    }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileDrag={{ scale: 1.05 }}
>
    <div class="h-full w-full select-none rounded-lg shadow-lg">
        {@render children?.()}
    </div>
</motion.div>
