<script lang="ts" generics="T extends any">
    import { cn } from "$lib/utils";
    import { motion } from "motion-sv";
    import { untrack, type Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import DeckCard from "./deck-card.svelte";

    let {
        class: className,
        onSwipe,
        onSwipeEnd,
        threshold = 150,
        stackSize = 3,
        perspective = 1000,
        scale = 0.05,
        currentIndex = $bindable(0),
        onCurrentIndexChange,
        animateOnIndexChange = true,
        indexChangeDirection = "left",
        items,
        child,
        ...restProps
    }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
        onSwipe?: (index: number, direction: "left" | "right") => void;
        onSwipeEnd?: (index: number, direction: "left" | "right") => void;
        threshold?: number;
        stackSize?: number;
        perspective?: number;
        scale?: number;
        currentIndex?: number;
        onCurrentIndexChange?: (index: number) => void;
        animateOnIndexChange?: boolean;
        indexChangeDirection?: "left" | "right";
        items: T[];
        child: Snippet<[{ item: T }]>
    } = $props();

    let displayIndex = $state(currentIndex);

    let exitDirection = $state<"left" | "right" | null>(null);

    $effect(() => {
        currentIndex;
        untrack(() => {
            if (animateOnIndexChange && indexChangeDirection && currentIndex !== displayIndex) {
                exitDirection = indexChangeDirection;

                // Update display index after animation completes
                setTimeout(() => {
                    exitDirection = null;
                    displayIndex = currentIndex;
                }, 300);
            }
        });
        
    });

    const handleSwipe = (direction: "left" | "right") => {
        console.log("handle swipe")
        if (currentIndex >= items.length) {
            return;
        }

        exitDirection = direction;

        if (direction === "left") {
            onSwipe?.(currentIndex, "left");
        } else {
            onSwipe?.(currentIndex, "right");
        }

        onSwipeEnd?.(currentIndex, direction);

        // Move to next card after animation
        setTimeout(() => {
            displayIndex++;
            currentIndex++;
            exitDirection = null;
        }, 300);
    };

    const visibleItems = $derived(items.slice(displayIndex, displayIndex + stackSize));
</script>

{#if currentIndex < items.length}
    <div
        class={cn("relative z-10 size-full", className)}
        style="perspective: {perspective}px;"
        {...restProps}
    >
        {#each visibleItems as item, index(`${currentIndex}-${index}`)}
            {@const isTopCard = !index}
            {@const zIndex = stackSize - index}
            {@const scaleValue = 1 - index * scale}
            {@const yOffset = index * 4}

            {#if isTopCard}
                {#key displayIndex}
                    <DeckCard
                        exitDirection={exitDirection}
                        onSwipe={handleSwipe}
                        style={{
                            zIndex,
                            scale: scaleValue,
                            y: yOffset
                        }}
                        threshold={threshold}
                    >
                        {@render child({ item })}
                    </DeckCard>
                {/key}
            {:else}
                {@const nextCardScale = index === 1 && exitDirection ? 1 : scaleValue}
                {@const nextCardY = index === 1 && exitDirection ? 0 : yOffset}

                <motion.div
                    animate={{
                        scale: nextCardScale,
                        y: nextCardY,
                    }}
                    class="absolute inset-0"
                    style={{
                        zIndex,
                        scale: scaleValue,
                        y: yOffset
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {@render child({ item })}
                </motion.div>
            {/if}
        {/each}
    </div>
{/if}
