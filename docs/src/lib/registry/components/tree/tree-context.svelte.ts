import { createContext } from "svelte";
import type { SvelteSet } from "svelte/reactivity";

type TreeStateProps = {
    expandedIds: SvelteSet<string>;
    selectedIds: string[];
    toggleExpanded: (nodeId: string) => void;
    handleSelection: (nodeId: string, ctrlKey: boolean) => void;
    showLines?: boolean;
    showIcons?: boolean;
    selectable?: boolean;
    multiSelect?: boolean;
    indent?: number;
    animateExpand?: boolean;
};

class TreeState {
    #expandedIds: SvelteSet<string>;
    #selectedIds: string[];
    #toggleExpanded: (nodeId: string) => void;
    #handleSelection: (nodeId: string, ctrlKey: boolean) => void;
    #showLines: boolean;
    #showIcons: boolean;
    #selectable: boolean;
    #multiSelect: boolean;
    #indent: number;
    #animateExpand: boolean;

    constructor(props: TreeStateProps) {
        this.#expandedIds = $derived(props.expandedIds);
        this.#selectedIds = $derived(props.selectedIds);
        this.#toggleExpanded = $derived(props.toggleExpanded);
        this.#handleSelection = $derived(props.handleSelection);
        this.#showLines = $derived(props.showLines ?? true);
        this.#showIcons = $derived(props.showIcons ?? true);
        this.#selectable = $derived(props.selectable ?? true);
        this.#multiSelect = $derived(props.multiSelect ?? false);
        this.#indent = $derived(props.indent ?? 20);
        this.#animateExpand = $derived(props.animateExpand ?? true);
    };

    get expandedIds() { return this.#expandedIds };

    get selectedIds() { return this.#selectedIds };

    get showLines() { return this.#showLines };

    get showIcons() { return this.#showIcons };

    get selectable() { return this.#selectable };

    get multiSelect() { return this.#multiSelect };

    get indent() { return this.#indent };

    get animateExpand() { return this.#animateExpand };

    toggleExpanded(nodeId: string) {
        this.#toggleExpanded(nodeId);
    };

    handleSelection(nodeId: string, ctrlKey: boolean) {
        this.#handleSelection(nodeId, ctrlKey);
    };
};

const [ getTreeContext, setTreeContext ] = createContext<TreeState>();

function setupTreeState(props: TreeStateProps) {
    return setTreeContext(new TreeState(props));
};


type TreeNodeStateProps = {
    nodeId: string;
    level: number;
    isLast: boolean;
    parentPath: boolean[];
};

class TreeNodeState {
    #nodeId: string;
    #level: number;
    #isLast: boolean;
    #parentPath: boolean[];

    constructor(props: TreeNodeStateProps) {
        this.#nodeId = $derived(props.nodeId);
        this.#level = $derived(props.level);
        this.#isLast = $derived(props.isLast);
        this.#parentPath = $derived(props.parentPath)
    };

    get nodeId() { return this.#nodeId };

    get level() { return this.#level };

    get isLast() { return this.#isLast };

    get parentPath() { return this.#parentPath };
};

const [ getNodeContext, setNodeContext ] = createContext<TreeNodeState>();

function setupTreeNodeState(props: TreeNodeStateProps) {
    return setNodeContext(new TreeNodeState(props));
};

export {
    type TreeStateProps,
    type TreeState,
    setupTreeState,
    getTreeContext as useTreeState,

    type TreeNodeStateProps,
    type TreeNodeState,
    setupTreeNodeState,
    getNodeContext as useTreeNodeState
};
