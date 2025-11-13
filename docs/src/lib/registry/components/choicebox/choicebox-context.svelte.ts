import { createContext } from "svelte";

export type ChoiceboxStateProps = {
    id?: string;
    value: string;
};

class ChoiceboxState {
    #id = $state<string>()
    #value = $state<string>()!;
    
    constructor(props: ChoiceboxStateProps) {
        this.#id = props.id;
        this.#value = props.value;
    };

    get id() {
        return this.#id;
    };

    set id(v) {
        this.#id = v;
    };

    get value() {
        return this.#value;
    };

    set value(v) {
        this.#value = v;
    };
};

const [ getContext, setContext ] = createContext<ChoiceboxState>();


export function setupContext(props: ChoiceboxStateProps) {
    return setContext(new ChoiceboxState(props));
};

export { 
    type ChoiceboxState, 
    getContext 
};
