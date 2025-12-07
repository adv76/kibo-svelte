<script lang="ts">
    import { cn } from "$lib/utils";
    import { DndContext, type DragEndEvent, type DragOverEvent, type DragStartEvent, useSensor, useSensors, KeyboardSensor, PointerSensor } from "@dnd-kit-svelte/core";
    import type { KanbanColumnProps, KanbanItemProps } from "./types";
    import { setupContext } from "./kanban-context.svelte";
    import type { Snippet } from "svelte";
    import { arrayMove } from '@dnd-kit-svelte/sortable';
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

    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));

    const handleDragStart = (event: DragStartEvent) => {
        const card = ctx.data.find((item) => item.id === event.active.id);
        if (card) {
            activeCardId = event.active.id as string;
        }
        onDragStart?.(event);
    };

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event;

        if (!over) {
            return;
        }

        const activeItem = ctx.data.find((item) => item.id === active.id);
        const overItem = ctx.data.find((item) => item.id === over.id);

        if (!activeItem) {
            return;
        }

        const activeColumn = activeItem.column;
        const overColumn =
            overItem?.column ||
            columns.find((col) => col.id === over.id)?.id ||
            columns[0]?.id;

        if (activeColumn !== overColumn) {
            const activeIndex = ctx.data.findIndex((item) => item.id === active.id);
            const overIndex = ctx.data.findIndex((item) => item.id === over.id);

            ctx.data[activeIndex].column = overColumn;
            ctx.data = arrayMove(ctx.data, activeIndex, overIndex);

            onDataChange?.(ctx.data);
        }

        onDragOver?.(event);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        activeCardId = null;

        onDragEnd?.(event);

        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        const oldIndex = ctx.data.findIndex((item) => item.id === active.id);
        const newIndex = ctx.data.findIndex((item) => item.id === over.id);

        ctx.data = arrayMove(ctx.data, oldIndex, newIndex);

        onDataChange?.(ctx.data);
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

<DndContext
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
</DndContext>
