<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { setupTreeNodeState } from "./tree-context.svelte";
    import { cn } from "$lib/utils";

    let {
        nodeId: providedNodeId,
        level = 0,
        isLast = false,
        parentPath = [],
        children,
        class: className,
        onclick,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        nodeId?: string;
        level?: number;
        isLast?: boolean;
        parentPath?: boolean[];
    } = $props();

    const generatedId = $props.id();
    const nodeId = providedNodeId ?? generatedId;

    // Build the parent path - mark positions where the parent was the last child
    const currentPath = level === 0 ? [] : [...parentPath];
    if (level > 0 && parentPath.length < level - 1) {
        // Fill in missing levels with false (not last)
        while (currentPath.length < level - 1) {
            currentPath.push(false);
        }
    }

    if (level > 0) {
        currentPath[level - 1] = isLast;
    }

    const ctx = setupTreeNodeState({
        nodeId,
        level,
        isLast,
        parentPath: currentPath
    });
</script>

<div class={cn("select-none", className)} {...restProps}>
    {@render children?.()}
</div>
