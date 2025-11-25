import { createContext } from "svelte";

class BannerState {
    #show = $state<boolean>();

    constructor(show: boolean = true) {
        this.#show = show;
    };  

    get show() {
        return this.#show;
    };

    set show(v) {
        this.#show = v;
    };
};

const [ getContext, setContext ] = createContext<BannerState>();


export function setupContext(show: boolean) {
    return setContext(new BannerState(show));
};

export { 
    getContext 
};
