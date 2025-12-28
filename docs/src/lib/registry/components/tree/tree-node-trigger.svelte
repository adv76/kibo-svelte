<script lang="ts">
    import { motion } from "@humanspeak/svelte-motion";
    import type { ComponentProps } from "svelte";
    import { useTreeNodeState, useTreeState } from "./tree-context.svelte";
    import { cn } from "$lib/utils";
    import TreeLines from "./tree-lines.svelte";

    let {
        class: className,
        onclick,
        children,
        ...restProps
    }: ComponentProps<typeof motion.div> & {
        hasChildren?: boolean;
    } = $props();

    const treeCtx = useTreeState();
    const nodeCtx = useTreeNodeState();

    const isSelected = $derived(treeCtx.selectedIds.includes(nodeCtx.nodeId));
</script>

<motion.div
    class={cn(
        "group relative mx-1 flex cursor-pointer items-center rounded-md px-3 py-2 transition-all duration-200",
        "hover:bg-accent/50",
        isSelected && "bg-accent/80",
        className
    )}
    onclick={(e) => {
        treeCtx.toggleExpanded(nodeCtx.nodeId);
        treeCtx.handleSelection(nodeCtx.nodeId, e.ctrlKey || e.metaKey);
        onclick?.(e);
    }}
    style="padding-left: {nodeCtx.level * (treeCtx.indent ?? 0) + 8 }px;"
    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
    {...restProps}
>
    <TreeLines />
    {@render children?.()}
</motion.div>
