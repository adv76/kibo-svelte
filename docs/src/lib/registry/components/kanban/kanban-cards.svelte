<script lang="ts" generics="T extends KanbanItemProps = KanbanItemProps">
    import { ScrollArea } from '$lib/components/ui/scroll-area';
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { KanbanItemProps } from './types';
    import { getContext } from './kanban-context.svelte';
    import { SortableContext } from '@dnd-kit-svelte/sortable';
    import { cn } from '$lib/utils';
    

    let {
        id,
        class: className,
        child,
        ...restProps
    }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
        child: Snippet<[{ item: T, index: number}]>;
    } = $props();

    const ctx = getContext();

    const filteredData = $derived(ctx.data.filter((item) => item.column === id));
</script>

<ScrollArea class="overflow-hidden">
    <SortableContext items={filteredData}>
        <div
            class={cn("flex flex-grow flex-col gap-2 p-2", className)}
            {...restProps}
        >
            {#each filteredData as item, index}
                {@render child({ item, index })}
            {/each}
        </div>
    </SortableContext>
</ScrollArea>
