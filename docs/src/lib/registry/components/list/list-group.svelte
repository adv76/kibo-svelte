<script lang="ts">
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";
    import type { Status } from "./types";
    import { useDroppable } from "@dnd-kit-svelte/core";

    type ListGroupProps = {
        id: Status["id"];
        children: Snippet;
        class?: string;
    };

    let {
        id,
        class: className,
        children
    }: ListGroupProps = $props();

    const { node, isOver } = useDroppable({ id });
</script>

<div
    bind:this={node.current}
    class={cn(
        "bg-secondary transition-colors",
        isOver && "bg-foreground/10",
        className
    )}
>
    {@render children?.()}
</div>
