<script lang="ts" generics="T extends KanbanItemProps = KanbanItemProps">
    import { ScrollArea } from '$lib/components/ui/scroll-area';
    import type { Snippet } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
    import type { KanbanItemProps } from './types';

    let {
        id,
        class: className,
        child,
        ...restProps
    }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
        child: Snippet<[{ item: T}]>;
    } = $props();

    const { data } = useContext(KanbanContext) as KanbanContextProps<T>;
    const filteredData = data.filter((item) => item.column === props.id);
    const items = filteredData.map((item) => item.id);
</script>

<ScrollArea class="overflow-hidden">
    <SortableContext items={items}>
    <div
        className={cn("flex flex-grow flex-col gap-2 p-2", className)}
        {...props}
    >
        {filteredData.map(children)}
    </div>
    </SortableContext>
    <ScrollBar orientation="vertical" />
</ScrollArea>
