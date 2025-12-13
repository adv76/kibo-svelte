<script lang="ts">
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";
    import type { Feature } from "./types";
    import { useDraggable } from "@dnd-kit-svelte/core";

    type ListItemProps = Pick<Feature, "id" | "name"> & {
        readonly index: number;
        readonly parent: string;
        readonly children?: Snippet;
        readonly class?: string;
    };

    let {
        id,
        name,
        index,
        parent,
        children,
        class: className
    }: ListItemProps = $props();

    const { attributes, listeners, node, transform, isDragging } =
        useDraggable({
            id,
            data: { index, parent },
        });
</script>

<div
    bind:this={node.current}
    class={cn(
        "flex cursor-grab items-center gap-2 rounded-md border bg-background p-2 shadow-sm",
        isDragging && "cursor-grabbing",
        className
    )}
    style="transform: {transform.current ? `translateX(${transform.current.x}px) translateY(${transform.current.y}px)` : "none"}"
    {...listeners.current}
    {...attributes.current}
>
    {#if children}
        {@render children?.()}
    {:else}
        <p class="m-0 font-medium text-sm">{name}</p>
    {/if}
</div>
