<script lang="ts">
    import { cn } from "$lib/utils";
    import { DndContext, rectIntersection, type DragEndEvent } from "@dnd-kit-svelte/core";
    import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
    import type { Snippet } from "svelte";

    type ListProviderProps = {
        children?: Snippet;
        onDragEnd: (event: DragEndEvent) => void;
        class?: string;
    };

    let {
        children,
        onDragEnd,
        class: className
    }: ListProviderProps = $props();
</script>

<DndContext
    collisionDetection={rectIntersection}
    modifiers={[restrictToVerticalAxis]}
    onDragEnd={onDragEnd}
>
    <div class={cn("flex size-full flex-col", className)}>{@render children?.()}</div>
</DndContext>
