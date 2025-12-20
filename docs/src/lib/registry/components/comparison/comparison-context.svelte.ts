import { createContext } from "svelte";

type ImageComparisonStateProps = {
    sliderPosition: () => number;
    motionSliderPosition: () => number;
    mode: () => "hover" | "drag";
};

class ImageComparisonState {
    #sliderPosition: number;
    #motionSliderPosition: number;
    #mode: "hover" | "drag";

    constructor(props: ImageComparisonStateProps) {
        this.#sliderPosition = $derived(props.sliderPosition());
        this.#motionSliderPosition = $derived(props.motionSliderPosition());
        this.#mode = $derived(props.mode());
    };

    get sliderPosition() { return this.#sliderPosition };
    set sliderPosition(v) { this.#sliderPosition = v };

    get motionSliderPosition() { return this.#motionSliderPosition };

    get mode() { return this.#mode };
};

const [ getContext, setContext ] = createContext<ImageComparisonState>();

function setupComparisonState(props: ImageComparisonStateProps) {
    return setContext(new ImageComparisonState(props));
};

export {
    type ImageComparisonStateProps,
    type ImageComparisonState,
    setupComparisonState,
    getContext as useComparisonState
};
