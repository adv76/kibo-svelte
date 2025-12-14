import { createContext } from "svelte";

export type CreditCardFlipStateProps = {
    isFlipped: () => boolean;
};

class CreditCardFlipState {
    #isFlipped: boolean;

    constructor(props: CreditCardFlipStateProps) {
        this.#isFlipped = $derived(props.isFlipped());
    };  

    get isFlipped() { return this.#isFlipped };
    set isFlipped(v) { this.#isFlipped = v };
};

const [ getFlipContext, setFlipContext ] = createContext<CreditCardFlipState>();


export function setCreditCardFlipState(props: CreditCardFlipStateProps) {
    return setFlipContext(new CreditCardFlipState(props));
};


export type CreditCardBackStateProps = {
    safeArea: () => number;
};

class CreditCardBackState {
    #safeArea: number;

    constructor(props: CreditCardBackStateProps) {
        this.#safeArea = $derived(props.safeArea());
    };  

    get safeArea() { return this.#safeArea };
    set safeArea(v) { this.#safeArea = v };
};

const [ getBackContext, setBackContext ] = createContext<CreditCardBackState>();


export function setCreditCardBackState(props: CreditCardBackStateProps) {
    return setBackContext(new CreditCardBackState(props));
};


export { 
    getFlipContext as useCreditCardFlipState,
    getBackContext as useCreditCardBackState
};
