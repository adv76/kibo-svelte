export type KanbanItemProps = {
    id: string;
    index: number;
    name: string;
    column: string;
} & Record<string, unknown>;
