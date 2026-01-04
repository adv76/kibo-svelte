import { createContext } from "svelte";

type TickerStateProps = {
    formatter: () => Intl.NumberFormat;
};

class TickerState {
    #formatter: Intl.NumberFormat;

    constructor(props: TickerStateProps) {
        this.#formatter = $derived(props.formatter());
    };

    get formatter() { return this.#formatter };
};

const [ getContext, setContext ] = createContext<TickerState>();

function setupTickerState(props: TickerStateProps) {
    return setContext(new TickerState(props));
};

export {
    type TickerStateProps,
    type TickerState,
    setupTickerState,
    getContext as useTickerState
};
