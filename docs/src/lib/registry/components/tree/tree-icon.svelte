<script lang="ts">
    import { motion } from "@humanspeak/svelte-motion";
    import type { ComponentProps } from "svelte";
    import { useTreeNodeState, useTreeState } from "./tree-context.svelte";
    import { FileIcon, FolderIcon, FolderOpenIcon } from "@lucide/svelte";
    import { cn } from "$lib/utils";

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

    const Icon = $derived(hasChildren
        ? isExpanded
            ? FolderOpenIcon
            : FolderIcon
        : FileIcon
    );
</script>

{#if treeCtx.showIcons}
    <motion.div
        class={cn(
            "mr-2 flex h-4 w-4 items-center justify-center text-muted-foreground",
            className
        )}
        transition={{ duration: 0.15 }}
        whileHover={{ scale: 1.1 }}
        {...restProps}
    >
        {#if children}
            {@render children?.()}
        {:else}
            <Icon class="h-4 w-4" />
        {/if}
    </motion.div>
{/if}
