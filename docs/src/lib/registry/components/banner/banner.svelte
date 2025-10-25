<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        visible,
        defaultVisible = true,
        onClose,
        inset,
        class: className,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        visible?: boolean;
        defaultVisible?: boolean;
        onClose?: () => void;
        inset?: boolean;
    } = $props();

    // TODO setup context here
    let show = $derived(visible);

</script>

{#if show}
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
 