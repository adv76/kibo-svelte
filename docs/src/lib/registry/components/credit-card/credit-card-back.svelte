<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { setCreditCardBackState, useCreditCardFlipState } from "./credit-card-context.svelte";
    import { cn } from "$lib/utils";

    let {
        safeArea = 16,
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        safeArea?: number;
    } = $props();

    const backCtx = setCreditCardBackState({
        safeArea: () => safeArea
    });
    const flipCtx = useCreditCardFlipState();
</script>

<div
    class={cn(
        "backface-hidden absolute inset-0 flex overflow-hidden bg-foreground/90",
        "@xs:rounded-2xl rounded-lg",
        // "group-hover/kibo-credit-card:rotate-y-180",
        flipCtx && "rotate-y-180",
        className
    )}
    {...restProps}
>
    <div
        class="relative flex-1"
        style="margin: {safeArea}px"
    >
        {@render children?.()}
    </div>
</div>
