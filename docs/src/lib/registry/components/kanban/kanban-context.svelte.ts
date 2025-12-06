import { createContext } from "svelte";
import type { KanbanColumnProps, KanbanItemProps } from "./types";

type KanbanStateProps<
  T extends KanbanItemProps = KanbanItemProps,
  C extends KanbanColumnProps = KanbanColumnProps
> = {
    columns: () => C[];
    data: () => T[];
    activeCardId: () => string | null;
}

class KanbanState<
    T extends KanbanItemProps = KanbanItemProps,
    C extends KanbanColumnProps = KanbanColumnProps
> {
    #columns: C[];
    #data: T[];
    #activeCardId: string | null;

    constructor(props: KanbanStateProps<T, C>) {
        this.#columns = $derived(props.columns());
        this.#data = $derived(props.data());
        this.#activeCardId = $derived(props.activeCardId());
    };

    get columns() { return this.#columns };
    set columns(v) { this.#columns = v };

    get data() { return this.#data };
    set data(v) { this.#data = v };

    get activeCardId() { return this.#activeCardId };
    set activeCardId(v) { this.#activeCardId = v };
};

const [ getContext, setContext ] = createContext<KanbanState>();

function setupContext<
    T extends KanbanItemProps = KanbanItemProps,
    C extends KanbanColumnProps = KanbanColumnProps
>(props: KanbanStateProps<T, C>) {
    return setContext(new KanbanState<T, C>(props));
};

export {
    type KanbanStateProps,
    type KanbanState,
    setupContext,
    getContext
};
