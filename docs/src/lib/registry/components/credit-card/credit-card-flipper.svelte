<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { setCreditCardFlipState } from "./credit-card-context.svelte";
    import { MediaQuery } from "svelte/reactivity";
    import { cn } from "$lib/utils";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> = $props();

    const supportsHover = new MediaQuery("(hover: hover)");

    let isFlipped = $state(false);

    const ctx = setCreditCardFlipState({
        isFlipped: () => isFlipped
    });

    const handleClick = () => {
        if (!supportsHover.current) {
            isFlipped = !isFlipped;
        }
    };
</script>

<div
    aria-label="Flip credit card"
    class={cn(
        "h-full w-full",
        "@xs:rounded-2xl rounded-lg",
        "transform-3d transition duration-700 ease-in-out",
        supportsHover.current &&
        "group-hover/kibo-credit-card:-rotate-y-180 group-hover/kibo-credit-card:shadow-lg",
        !supportsHover.current && isFlipped && "-rotate-y-180 shadow-lg",
        className
    )}
    onclick={handleClick}
    {...restProps}
>
    {@render children?.()}
</div>
