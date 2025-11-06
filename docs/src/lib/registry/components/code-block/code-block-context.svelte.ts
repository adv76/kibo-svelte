import { createContext } from "svelte";
import type { CodeBlockContextType } from "./types";

const [ getContext, setContext ] = createContext<CodeBlockContextType>();

export function setupContext(data: CodeBlockContextType) {
    let proxiedValue = $state(data.value);
    let proxiedData = $state(data.data);

    return setContext({
        value: proxiedValue,
        onValueChange: data.onValueChange,
        data: proxiedData
    });
};

export { getContext };
