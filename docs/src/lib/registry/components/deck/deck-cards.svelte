<script lang="ts" generics="T extends any">
    import { cn } from "$lib/utils";
    import { motion } from "@humanspeak/svelte-motion";

    import type { Snippet } from "svelte";
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

//     const childrenArray = Children.toArray(children) as ReactElement[];
//   const [currentIndex, setCurrentIndex] = useControllableState({
//     prop: currentIndexProp,
//     defaultProp: defaultCurrentIndex,
//     onChange: onCurrentIndexChange,
//   });



    let exitDirection = $state<"left" | "right" | null>(null);

    //let displayIndex = $state(currentIndex);
//   const isInternalChangeRef = useRef(false);
//   const prevIndexRef = useRef(currentIndex);

  // Detect external currentIndex changes and trigger animation
//   useEffect(() => {
//     const prevIndex = prevIndexRef.current;

//     // Skip initial mount and internal changes
//     if (prevIndex === currentIndex || isInternalChangeRef.current) {
//       isInternalChangeRef.current = false;
//       prevIndexRef.current = currentIndex;
//       setDisplayIndex(currentIndex);
//       return;
//     }

//     // Only animate if the option is enabled and we have cards to show
//     if (animateOnIndexChange && prevIndex < childrenArray.length) {
//       setExitDirection(indexChangeDirection);

//       // Update display index after animation completes
//       setTimeout(() => {
//         setExitDirection(null);
//         setDisplayIndex(currentIndex);
//       }, 300);
//     } else {
//       // No animation, update display index immediately
//       setDisplayIndex(currentIndex);
//     }

//     prevIndexRef.current = currentIndex;
//   });

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
            // isInternalChangeRef.current = true;
            currentIndex++;
            exitDirection = null;
        }, 300);
    };

//   const visibleCards = childrenArray.slice(
//     displayIndex,
//     displayIndex + stackSize
//   );

//   if (displayIndex >= childrenArray.length) {
//     return null;
//   }

    const visibleItems = $derived(items.slice(currentIndex, currentIndex + stackSize));
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
                <DeckCard
                    exitDirection={exitDirection}
                    onSwipe={handleSwipe}
                    style="z-index: {zIndex}; scale: {scaleValue}; y: {yOffset};"
                    threshold={threshold}
                >
                    {@render child({ item })}
                </DeckCard>
            {:else}
                {@const nextCardScale = index === 1 && exitDirection ? 1 : scaleValue}
                {@const nextCardY = index === 1 && exitDirection ? 0 : yOffset}

                <motion.div
                    animate={{
                        scale: nextCardScale,
                        y: nextCardY,
                    }}
                    class="absolute inset-0"
                    style="z-index: {zIndex}; scale: {scaleValue}; y: {yOffset}px;"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {@render child({ item })}
                </motion.div>
            {/if}
        {/each}
    </div>
{/if}
