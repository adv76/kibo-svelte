<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import { setupContext } from "./banner-context.svelte";

    let {
        ref = $bindable(null),
        visible = $bindable(true),
        onClose,
        inset,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        visible?: boolean;
        onClose?: () => void;
        inset?: boolean;
    } = $props();

    const ctx = setupContext(visible);
</script>

{#if ctx.show}
    <div
        class={cn(
            "flex w-full items-center justify-between gap-2 bg-primary px-4 py-2 text-primary-foreground",
            inset && "rounded-lg",
            className
        )}
        {...restProps}
    >
        {@render children?.()}
    </div>
{/if}
 