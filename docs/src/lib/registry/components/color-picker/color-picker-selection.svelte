<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import { getContext, setupContext } from "./color-picker-context.svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

    let containerRef: HTMLDivElement;
    
    let isDragging = $state(false);
    let positionX = $state(0);
    let positionY = $state(0);
    
    const ctx = getContext();

    const backgroundGradient = $derived(
        `linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0)),
        linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0)),
        hsl(${ctx.hue}, 100%, 50%)`
    );


    const pointerDown = (event: PointerEvent) => {
        event.preventDefault();
        isDragging = true;
        pointerMove(event);
    };

    const pointerMove = (event: PointerEvent) => {
        if (!(isDragging && containerRef)) {
            return;
        }

        const rect = containerRef.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

        positionX = x;
        positionY = y;
        
        ctx.saturation = x * 100;
        const topLightness = x < 0.01 ? 100 : 50 + 50 * (1 - x);
        ctx.lightness = topLightness * (1 - y);
    };

    const pointerUp = () => isDragging = false;

    // TODO maybe figure this out
    //   if (isDragging) {
    //     window.addEventListener("pointermove", handlePointerMove);
    //     window.addEventListener("pointerup", handlePointerUp);
    //   }

    //   return () => {
    //     window.removeEventListener("pointermove", handlePointerMove);
    //     window.removeEventListener("pointerup", handlePointerUp);
    //   };


    // const handlePointerMove2 = useCallback(
    //   (event: PointerEvent) => {
    //     if (!(isDragging && containerRef.current)) {
    //       return;
    //     }
    //     const rect = containerRef.current.getBoundingClientRect();
    //     const x = Math.max(
    //       0,
    //       Math.min(1, (event.clientX - rect.left) / rect.width)
    //     );
    //     const y = Math.max(
    //       0,
    //       Math.min(1, (event.clientY - rect.top) / rect.height)
    //     );
    //     setPositionX(x);
    //     setPositionY(y);
    //     setSaturation(x * 100);
    //     const topLightness = x < 0.01 ? 100 : 50 + 50 * (1 - x);
    //     const lightness = topLightness * (1 - y);

    //     setLightness(lightness);
    //   },
    //   [isDragging, setSaturation, setLightness]
    // );

    // useEffect(() => {
    //   const handlePointerUp = () => setIsDragging(false);

    //   if (isDragging) {
    //     window.addEventListener("pointermove", handlePointerMove);
    //     window.addEventListener("pointerup", handlePointerUp);
    //   }

    //   return () => {
    //     window.removeEventListener("pointermove", handlePointerMove);
    //     window.removeEventListener("pointerup", handlePointerUp);
    //   };
    // }, [isDragging, handlePointerMove]);
</script>

<div
    class={cn("relative size-full cursor-crosshair rounded", className)}
    onpointerdown={pointerDown}
    onpointermove={pointerMove}
    onpointerup={pointerUp}
    bind:this={containerRef}
    bind:this={ref}
    style="background: {backgroundGradient};"
    {...restProps}
>
    <div
        class="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute h-4 w-4 rounded-full border-2 border-white"
        style="left: {positionX * 100}%; top: {positionY * 100}%; box-shadow: 0 0 0 1px rgba(0,0,0,0.5);"
    ></div>
</div>
