<script lang="ts">
    import type { Snippet } from "svelte";
    import { SvelteSet } from "svelte/reactivity";
    import { setupTreeState } from "./tree-context.svelte";
    import { motion } from "@humanspeak/svelte-motion";
    import { cn } from "$lib/utils";

    type Props = {
        showLines?: boolean;
        showIcons?: boolean;
        selectable?: boolean;
        multiSelect?: boolean;
        expandedIds?: string[];
        selectedIds?: string[];
        onSelectionChange?: (selectedIds: string[]) => void;
        indent?: number;
        animateExpand?: boolean;
        class?: string;
        children?: Snippet;
    };

    let {
        showLines = true,
        showIcons = true,
        selectable = true,
        multiSelect = false,
        expandedIds: expandedIdsProp = [],
        selectedIds = $bindable([]),
        onSelectionChange,
        indent = 20,
        animateExpand = true,
        class: className,
        children
    }: Props = $props();

    let expandedIds = $derived(new SvelteSet<string>(expandedIdsProp));
    
    // TODO copy ids??
    // const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>(
    //     selectedIds ?? []
    // );

    // const isControlled =
    //     selectedIds !== undefined && onSelectionChange !== undefined;
    // const currentSelectedIds = isControlled ? selectedIds : internalSelectedIds;

    const toggleExpanded = (nodeId: string) => {
        if (expandedIds.has(nodeId)) {
            expandedIds.delete(nodeId);
        } else {
            expandedIds.add(nodeId);
        }
    };

    const handleSelection = (nodeId: string, ctrlKey = false) => {
        if (!selectable) {
            return;
        }

        if (multiSelect && ctrlKey) {
            const index = selectedIds.indexOf(nodeId);
            if (index >= 0) {
                selectedIds.splice(index, 1);
            } else {
                selectedIds.push(nodeId);
            }
        } else {
            const index = selectedIds.indexOf(nodeId);
            if (index >= 0) {
                selectedIds = [];
            } else {
                selectedIds = [nodeId]
            }
        }

        // if (isControlled) {
        //     onSelectionChange?.(newSelection);
        // } else {
        //     setInternalSelectedIds(newSelection);
        // }
    };

    const ctx = setupTreeState({
        expandedIds: () => expandedIds,
        selectedIds: () => selectedIds,
        toggleExpanded,
        handleSelection,
        showLines: () => showLines,
        showIcons: () => showIcons,
        selectable: () => selectable,
        multiSelect: () => multiSelect,
        indent: () => indent,
        animateExpand: () => animateExpand
    });
</script>

<motion.div
    animate={{ opacity: 1, y: 0 }}
    class={cn("w-full", className)}
    initial={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
>
    {@render children?.()}
</motion.div>
