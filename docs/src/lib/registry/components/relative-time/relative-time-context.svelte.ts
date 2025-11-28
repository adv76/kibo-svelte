import { createContext } from "svelte";

export type RelativeTimeStateProps = {
    time: () => Date;
    dateFormatOptions?: Intl.DateTimeFormatOptions;
    timeFormatOptions?: Intl.DateTimeFormatOptions;
};

class RelativeTimeState {
    #time;// = $state<Date>()!;
    #dateFormatOptions = $state<Intl.DateTimeFormatOptions>();
    #timeFormatOptions = $state<Intl.DateTimeFormatOptions>();

    constructor(props: RelativeTimeStateProps) {
        this.#time = $derived(props.time());
        this.#dateFormatOptions = props.dateFormatOptions;
        this.#timeFormatOptions = props.timeFormatOptions;
    };

    get time() {
        return this.#time;
    };

    set time(v) {
        this.#time = v;
    };

    get dateFormatOptions() {
        return this.#dateFormatOptions;
    };

    set dateFormatOptions(v) {
        this.#dateFormatOptions = v;
    };

    get timeFormatOptions() {
        return this.#timeFormatOptions;
    };

    set timeFormatOptions(v) {
        this.#timeFormatOptions = v;
    };
};

const [ getTimeContext, setTimeContext ] = createContext<RelativeTimeState>();

export function setupTimeContext(props: RelativeTimeStateProps) {
    return setTimeContext(new RelativeTimeState(props));
};


type RelativeTimeZoneStateProps = {
    zone?: string;
};

class RelativeTimeZoneState {
    #zone = $state<string>()!;

    constructor(props: RelativeTimeZoneStateProps) {
        this.#zone = props.zone ?? "UTC";
    };

    get zone() {
        return this.#zone;
    };

    set zone(v) {
        this.#zone = v;
    };
};

const [ getZoneContext, setZoneContext ] = createContext<RelativeTimeZoneState>();

export function setupZoneContext(props: RelativeTimeZoneStateProps) {
    return setZoneContext(new RelativeTimeZoneState(props));
};


export {
    type RelativeTimeState,
    getTimeContext,

    type RelativeTimeZoneState,
    getZoneContext
};
