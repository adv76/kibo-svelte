import { createContext } from "svelte";
import type { CodeBlockData } from "./types";

export type CodeBlockStateProps = {
    value: string | undefined;
    onValueChange: ((value: string) => void) | undefined;
    data: CodeBlockData[];
};

class CodeBlockState {
    #value = $state<string>();
    #onValueChange: ((value: string) => void) | undefined;
    #data = $state<CodeBlockData[]>()!;

    constructor(props: CodeBlockStateProps) {
        this.#value = props.value;
        this.#onValueChange = props.onValueChange;
        this.#data = props.data;
    };

    get value() {
        return this.#value;
    };

    set value(v) {
        this.#value = v;
    };

    get onValueChange() {
        return this.#onValueChange;
    };

    get data() {
        return this.#data;
    };

    set data(v) {
        this.#data = v;
    };
};

const [ getContext, setContext ] = createContext<CodeBlockState>();


export function setupContext(props: CodeBlockStateProps) {
    return setContext(new CodeBlockState(props));
};

export { 
    type CodeBlockState, 
    getContext 
};
