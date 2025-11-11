import { createContext } from "svelte";

export type ColorPickerStateProps = {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
    mode: string;
};

class ColorPickerState {
    #hue = $state<number>()!;
    #saturation = $state<number>()!;
    #lightness = $state<number>()!;
    #alpha = $state<number>()!;
    #mode = $state<string>()!;

    constructor(props: ColorPickerStateProps) {
        this.#hue = props.hue;
        this.#saturation = props.saturation;
        this.#lightness = props.lightness;
        this.#alpha = props.alpha;
        this.#mode = props.mode;
    };

    get hue() {
        return this.#hue;
    };

    set hue(v) {
        this.#hue = v;
    };

    get saturation() {
        return this.#saturation;
    };

    set saturation(v) {
        this.#saturation = v;
    };

    get lightness() {
        return this.#lightness;
    };

    set lightness(v) {
        this.#lightness = v;
    };

    get alpha() {
        return this.#alpha;
    };

    set alpha(v) {
        this.#alpha = v;
    };

    get mode() {
        return this.#mode;
    };

    set mode(v) {
        this.#mode = v;
    };
};

const [ getContext, setContext ] = createContext<ColorPickerState>();


export function setupContext(props: ColorPickerStateProps) {
    return setContext(new ColorPickerState(props));
};

export { 
    type ColorPickerState, 
    getContext 
};
