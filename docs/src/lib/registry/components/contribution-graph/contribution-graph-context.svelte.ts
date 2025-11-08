import type { Day as WeekDay, } from "date-fns";
import type { Activity, Labels, Week } from "./types";
import { createContext } from "svelte";

export type ContributionGraphStateProps = {
  data: Activity[];
  weeks: Week[];
  blockMargin: number;
  blockRadius: number;
  blockSize: number;
  fontSize: number;
  labels: Labels;
  labelHeight: number;
  maxLevel: number;
  totalCount: number;
  weekStart: WeekDay;
  year: number;
  width: number;
  height: number;
};

class ContributionGraphState {
    #data = $state<Activity[]>()!;
    #weeks = $state<Week[]>()!;
    #blockMargin = $state<number>()!;
    #blockRadius = $state<number>()!;
    #blockSize = $state<number>()!;
    #fontSize = $state<number>()!;
    #labels = $state<Labels>()!;
    #labelHeight = $state<number>()!;
    #maxLevel = $state<number>()!;
    #totalCount = $state<number>()!;
    #weekStart = $state<WeekDay>()!;
    #year = $state<number>()!;
    #width = $state<number>()!;
    #height = $state<number>()!;

    constructor(props: ContributionGraphStateProps) {
        this.#data = props.data;
        this.#weeks = props.weeks;
        this.#blockMargin = props.blockMargin;
        this.#blockRadius = props.blockRadius;
        this.#blockSize = props.blockSize;
        this.#fontSize = props.fontSize;
        this.#labels = props.labels;
        this.#labelHeight = props.labelHeight;
        this.#maxLevel = props.maxLevel;
        this.#totalCount = props.totalCount;
        this.#weekStart = props.weekStart;
        this.#year = props.year;
        this.#width = props.width;
        this.#height = props.height;
    };

    get data() {
        return this.#data;
    };

    set data(v) {
        this.#data = v;
    };

    get weeks() {
        return this.#weeks;
    };

    set weeks(v) {
        this.#weeks = v;
    };

    get blockMargin() {
        return this.#blockMargin;
    };

    set blockMargin(v) {
        this.#blockMargin = v;
    }

    get blockRadius() {
        return this.#blockRadius;
    };

    set blockRadius(v) {
        this.#blockRadius = v;
    };

    get blockSize() {
        return this.#blockSize;
    };

    set blockSize(v) {
        this.#blockSize = v;
    };

    get fontSize() {
        return this.#fontSize;
    };

    set fontSize(v) {
        this.#fontSize = v;
    };

    get labels() {
        return this.#labels;
    };

    set labels(v) {
        this.#labels = v;
    };

    get labelHeight() {
        return this.#labelHeight;
    };

    set labelHeight(v) {
        this.#labelHeight = v;
    };

    get maxLevel() {
        return this.#maxLevel;
    };

    set maxLevel(v) {
        this.#maxLevel = v;
    };

    get totalCount() {
        return this.#totalCount;
    };

    set totalCount(v) {
        this.#totalCount = v;
    };

    get weekStart() {
        return this.#weekStart;
    };

    set weekStart(v) {
        this.#weekStart = v;
    };

    get year() {
        return this.#year;
    };

    set year(v) {
        this.#year = v;
    };

    get width() {
        return this.#width;
    };

    set width(v) {
        this.#width = v;
    };

    get height() {
        return this.#height;
    };

    set height(v) {
        this.#height = v;
    };
};

const [ getContext, setContext ] = createContext<ContributionGraphState>();


export function setupContext(props: ContributionGraphStateProps) {
    return setContext(new ContributionGraphState(props));
};

export { 
    type ContributionGraphState, 
    getContext 
};
