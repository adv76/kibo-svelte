<script lang="ts">
    import { motion } from "@humanspeak/svelte-motion";
    import type { ComponentProps } from "svelte";
    import { useTreeNodeState, useTreeState } from "./tree-context.svelte";
    import { ChevronRightIcon } from "@lucide/svelte";
    import { cn } from "$lib/utils";

    let {
        hasChildren = false,
        class: className,
        onclick,
        ...restProps
    }: ComponentProps<typeof motion.div> & {
        hasChildren?: boolean;
    } = $props();

    const treeCtx = useTreeState();
    const nodeCtx = useTreeNodeState();

    const isExpanded = $derived(treeCtx.expandedIds.has(nodeCtx.nodeId));
</script>

{#if hasChildren}
    <motion.div
        animate={{ rotate: isExpanded ? 90 : 0 }}
        class={cn(
            "mr-1 flex h-4 w-4 cursor-pointer items-center justify-center",
            className
        )}
        onclick={(e) => {
            e.stopPropagation();
            treeCtx.toggleExpanded(nodeCtx.nodeId);
            onclick?.(e);
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        {...restProps}
    >
        <ChevronRightIcon class="h-3 w-3 text-muted-foreground" />
    </motion.div>
{:else}
    <div class="mr-1 h-4 w-4"></div>
{/if}
