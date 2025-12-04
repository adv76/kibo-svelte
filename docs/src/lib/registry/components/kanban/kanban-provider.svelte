<script lang="ts">
    import { cn } from "$lib/utils";
    import { type DragDropEvents, DragDropProvider, KeyboardSensor, PointerSensor } from "@dnd-kit-svelte/svelte";


    export type KanbanProviderProps<
    T extends KanbanItemProps = KanbanItemProps,
    C extends KanbanColumnProps = KanbanColumnProps,
    > = Omit<DndContextProps, "children"> & {
        children: (column: C) => ReactNode;
        className?: string;
        columns: C[];
        data: T[];
        onDataChange?: (data: T[]) => void;
        onDragStart?: (event: DragStartEvent) => void;
        onDragEnd?: (event: DragEndEvent) => void;
        onDragOver?: (event: DragOverEvent) => void;
    };

    let {
        children,
        onDragStart,
        onDragEnd,
        onDragOver,
        className,
        columns,
        data,
        onDataChange,
        ...restProps
    } = $props();

    let activeCardId = $state<string | null>(null);

    // set up context

    const sensors = [PointerSensor, KeyboardSensor];

    const handleDragStart = (event: DragStartEvent) => {
        const card = data.find((item) => item.id === event.active.id);
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

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveCardId(null);

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

  const announcements: Announcements = {
    onDragStart({ active }) {
      const { name, column } = data.find((item) => item.id === active.id) ?? {};

      return `Picked up the card "${name}" from the "${column}" column`;
    },
    onDragOver({ active, over }) {
      const { name } = data.find((item) => item.id === active.id) ?? {};
      const newColumn = columns.find((column) => column.id === over?.id)?.name;

      return `Dragged the card "${name}" over the "${newColumn}" column`;
    },
    onDragEnd({ active, over }) {
      const { name } = data.find((item) => item.id === active.id) ?? {};
      const newColumn = columns.find((column) => column.id === over?.id)?.name;

      return `Dropped the card "${name}" into the "${newColumn}" column`;
    },
    onDragCancel({ active }) {
      const { name } = data.find((item) => item.id === active.id) ?? {};

      return `Cancelled dragging the card "${name}"`;
    },
  };
</script>

<DragDropProvider
    accessibility={{ announcements }}
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    onDragOver={handleDragOver}
    onDragStart={handleDragStart}
    sensors={sensors}
    {...restProps}
>
    <div
        class={cn(
            "grid size-full auto-cols-fr grid-flow-col gap-4",
            className
        )}
    >
        {#each columns as column}
            {@render child(column)}
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
