import { createContext } from "svelte";

type MiniCalendarStateProps = {
    selectedDate: () => Date | null | undefined;
    onDateSelect: (date: Date) => void;
    startDate: () => Date;
    onNavigate: (direction: "prev" | "next") => void;
    days: () => number;
};

class MiniCalendarState {
    #selectedDate: Date | null | undefined;
    #onDateSelect = $state<(date: Date) => void>();
    #startDate: Date;
    #onNavigate: (direction: "prev" | "next") => void;
    #days: number;

    constructor(props: MiniCalendarStateProps) {
        this.#selectedDate = $derived(props.selectedDate());
        this.#onDateSelect = props.onDateSelect;
        this.#startDate = $derived(props.startDate());
        this.#onNavigate = props.onNavigate;
        this.#days = $derived(props.days());
    };

    get selectedDate() { return this.#selectedDate };
    set selectedDate(v) { this.#selectedDate = v };
    
    get onDateSelect() { return this.#onDateSelect };

    get startDate() { return this.#startDate };
    set startDate(v) { this.#startDate = v };

    get onNavigate() { return this.#onNavigate };

    get days() { return this.#days };
};

const [ getContext, setContext ] = createContext<MiniCalendarState>();

export function setupContext(props: MiniCalendarStateProps) {
    return setContext(new MiniCalendarState(props));
};


export {
    type MiniCalendarState,
    getContext
};
