import { createContext } from "svelte";


class TagsState {
    #width = $state<number>(0);

    get width() {
        return this.#width;
    };

    set width(v) {
        this.#width = v;
    };
};

const [ getContext, setContext ] = createContext<TagsState>();

export function setupContext() {
    return setContext(new TagsState());
};

export { 
    type TagsState, 
    getContext 
};
