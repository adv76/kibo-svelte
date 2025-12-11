<script lang="ts">
    import { cn } from "$lib/utils";
    import { useDroppable } from "@dnd-kit-svelte/core";
    import type { Snippet } from "svelte";

    let {
        id,
        class: className,
        children
    }: {
        id: string;
        class?: string;
        children: Snippet;
    } = $props();

    const droppable = useDroppable({
        id
    });
</script>

<div
    bind:this={droppable.node.current}
    class={cn(
        "flex size-full min-h-40 flex-col divide-y overflow-hidden rounded-md border bg-secondary text-xs shadow-sm ring-2 transition-all",
        droppable.isOver.current ? "ring-primary" : "ring-transparent",
        className
    )}
>
    {@render children?.()}
</div>
