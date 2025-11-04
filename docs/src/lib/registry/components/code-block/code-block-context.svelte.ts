import { createContext } from "svelte";
import type { CodeBlockContextType } from "./types";

const [ getContext, setContext ] = createContext<CodeBlockContextType>();

export function setupContext() {
    return setContext({
        value: undefined,
        onValueChange: undefined,
        data: [],
    });
};

export { getContext };
