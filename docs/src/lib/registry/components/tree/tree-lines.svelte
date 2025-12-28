<script lang="ts">
    import { useTreeNodeState, useTreeState } from "./tree-context.svelte";

    const treeCtx = useTreeState();
    const nodeCtx = useTreeNodeState();
</script>

{#if treeCtx.showLines && nodeCtx.level >= 0}
    <div class="pointer-events-none absolute top-0 bottom-0 left-0">
        <!-- Render vertical lines for all parent nodeCtx.levels -->
        {#each { length: nodeCtx.level } as _, index(index)}
            {@const shouldHideLine = nodeCtx.parentPath[index] === true}
            {#if !shouldHideLine || index !== nodeCtx.level -1}
                <div
                    class="absolute top-0 bottom-0 border-border/40 border-l"
                    style="left: {index * (treeCtx.indent ?? 0) + 12}px; display: {shouldHideLine ? "none" : "block"};"
                ></div>
            {/if}
        {/each}

        <!-- Horizontal connector line -->
        <div
            class="absolute top-1/2 border-border/40 border-t"
            style="left: {(nodeCtx.level - 1) * (treeCtx.indent ?? 0) + 12}px; width: {(treeCtx.indent ?? 0) - 4}px; transform: translateY(-1px);"
        ></div>

        <!-- Vertical line to midpoint for last items -->
        {#if nodeCtx.isLast}
            <div
                class="absolute top-0 border-border/40 border-l"
                style="left: {(nodeCtx.level - 1) * (treeCtx.indent ?? 0) + 12}px; height: 50%;"
            ></div>
        {/if}
    </div>
{/if}
