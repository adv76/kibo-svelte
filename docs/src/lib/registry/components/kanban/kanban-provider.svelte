<script lang="ts">
    import { cn } from "$lib/utils";
    import { type DragDropEvents, DragDropProvider, KeyboardSensor, PointerSensor } from "@dnd-kit-svelte/svelte";
    import type { KanbanColumnProps, KanbanItemProps } from "./types";
    import { setupContext } from "./kanban-context.svelte";
    import type { Snippet } from "svelte";
    import { move } from '@dnd-kit/helpers';

    type KanbanProviderProps<
        T extends KanbanItemProps = KanbanItemProps,
        C extends KanbanColumnProps = KanbanColumnProps,
    > = {
        columns: C[];
        data: T[];
        class?: string;
        child: Snippet<[{ column: C }]>;
        onDataChange?: (data: T[]) => void;
        onDragStart?: (event: DragStartEvent) => void;
        onDragEnd?: (event: DragEndEvent) => void;
        onDragOver?: (event: DragOverEvent) => void;
    };

    let {
        columns,
        data,
        class: className,
        child,
        onDragStart,
        onDragEnd,
        onDragOver,
        onDataChange,
        ...restProps
    }: KanbanProviderProps = $props();

    let activeCardId = $state<string | null>(null);

    const ctx = setupContext({
        columns: () => columns,
        data: () => data,
        activeCardId: () => activeCardId
    });

    const sensors = [PointerSensor, KeyboardSensor];

    export function arrayMove<T>(array: T[], from: number, to: number): T[] {
        const newArray = array.slice();
        newArray.splice(
            to < 0 ? newArray.length + to : to,
            0,
            newArray.splice(from, 1)[0]
        );

        return newArray;
    }

    const handleDragStart = (event: DragDropEvents["dragstart"]) => {
        console.log("DragStart", event);

        const card = data.find((item) => item.id === event.active.id);
        if (card) {
            activeCardId = event.active.id as string;
        }
        onDragStart?.(event);
    };

    const handleDragOver = (event: DragOverEvent) => {
        data = move(data, event);

        return;

        console.log("DragOver", event);

        const { active, over } = event;

        if (!over) {
            return;
        }

        const activeItem = data.find((item) => item.id === active.id);
        const overItem = data.find((item) => item.id === over.id);

        if (!activeItem) {
            return;
        }

        const activeColumn = activeItem.column;
        const overColumn =
            overItem?.column ||
            columns.find((col) => col.id === over.id)?.id ||
            columns[0]?.id;

        if (activeColumn !== overColumn) {
            let newData = [...data];
            const activeIndex = newData.findIndex((item) => item.id === active.id);
            const overIndex = newData.findIndex((item) => item.id === over.id);

            newData[activeIndex].column = overColumn;
            newData = arrayMove(newData, activeIndex, overIndex);

            onDataChange?.(newData);
        }

        onDragOver?.(event);
    };

    const handleDragEnd = (event: DragEndEvent, manager: any) => {
        console.log("DragEnd", event);

        activeCardId = null;

        onDragEnd?.(event);

        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        let newData = [...data];

        const oldIndex = newData.findIndex((item) => item.id === active.id);
        const newIndex = newData.findIndex((item) => item.id === over.id);

        newData = arrayMove(newData, oldIndex, newIndex);

        onDataChange?.(newData);
    };

//   const announcements: Announcements = {
//     onDragStart({ active }) {
//       const { name, column } = data.find((item) => item.id === active.id) ?? {};

//       return `Picked up the card "${name}" from the "${column}" column`;
//     },
//     onDragOver({ active, over }) {
//       const { name } = data.find((item) => item.id === active.id) ?? {};
//       const newColumn = columns.find((column) => column.id === over?.id)?.name;

//       return `Dragged the card "${name}" over the "${newColumn}" column`;
//     },
//     onDragEnd({ active, over }) {
//       const { name } = data.find((item) => item.id === active.id) ?? {};
//       const newColumn = columns.find((column) => column.id === over?.id)?.name;

//       return `Dropped the card "${name}" into the "${newColumn}" column`;
//     },
//     onDragCancel({ active }) {
//       const { name } = data.find((item) => item.id === active.id) ?? {};

//       return `Cancelled dragging the card "${name}"`;
//     },
//   };
</script>

<!--accessibility={{ announcements }} collisionDetection={closestCenter}-->

<DragDropProvider
    
    
    onDragEnd={handleDragEnd}
    onDragOver={handleDragOver}
    onDragStart={handleDragStart}
    {sensors}
    {...restProps}
>
    <div
        class={cn(
            "grid size-full auto-cols-fr grid-flow-col gap-4",
            className
        )}
    >
        {#each columns as column}
            {@render child({ column })}
        {/each}
    </div>
<!-- {typeof window !== "undefined" &&
    createPortal(
    <DragOverlay>
        <t.Out />
    </DragOverlay>,
    document.body
    )} -->
</DragDropProvider>
