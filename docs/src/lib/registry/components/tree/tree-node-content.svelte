<script lang="ts">
    import { AnimatePresence, motion } from "@humanspeak/svelte-motion";
    import type { ComponentProps } from "svelte";
    import { useTreeNodeState, useTreeState } from "./tree-context.svelte";

    let {
        hasChildren = false,
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof motion.div> & {
        hasChildren?: boolean;
    } = $props();

    const treeCtx = useTreeState();
    const nodeCtx = useTreeNodeState();

    const isExpanded = $derived(treeCtx.expandedIds.has(nodeCtx.nodeId));
</script>

<AnimatePresence>
    {#if hasChildren && isExpanded}
        <motion.div
            animate={{ height: "auto", opacity: 1 }}
            class="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{
                duration: treeCtx.animateExpand ? 0.3 : 0,
                ease: "easeInOut",
            }}
        >
            <motion.div
                animate={{ y: 0 }}
                class={className}
                exit={{ y: -10 }}
                initial={{ y: -10 }}
                transition={{
                duration: treeCtx.animateExpand ? 0.2 : 0,
                delay: treeCtx.animateExpand ? 0.1 : 0,
                }}
                {...restProps}
            >
                {@render children?.()}
            </motion.div>
        </motion.div>
    {/if}
</AnimatePresence>
