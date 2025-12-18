import { componentGroups, docGroups } from "./grp";

type DocMetadata = {
    title: string;
    description: string;
    icon: string;
    dependencies?: string[];
    installer: string;
};

type Metadata = {
    title: string;
    description: string;
    icon: string;
    dependencies?: string[];
    installer: string;
};

const docs = import.meta.glob<DocMetadata>("./content/docs/*.md", { import: "metadata", eager: true });
const components = import.meta.glob<Metadata>("./content/components/*.md", { import: "metadata", eager: true });
const blocks = import.meta.glob<Metadata>("./content/blocks/*.md", { import: "metadata", eager: true });



// patterns

type DocEntry = {
    key: string;
    name: string;
    description: string;
    path: string;
};

type DocGroup = {
    name: string;
    items: DocEntry[];
};

type SourceEntry = {
    type: "component" | "block";
    key: string;
    name: string;
    description: string;
    icon: string;
    path: string;
};

type SourceGroup = {
    name: string;
    items: SourceEntry[];
};



export function getDocs(): DocEntry[] {
    const docList: DocEntry[] = [];

    for (const [filePath, metadata] of Object.entries(docs)) {

        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const componentKey = fileName.substring(0, fileName.length - 3);

        docList.push({ 
            key: componentKey,
            name: metadata.title,
            description: metadata.description,
            path: filePath
        });
    }

    return docList;
};

export function getDocGroups(): DocGroup[] {
    const docs = getDocs();

    const groups: DocGroup[] = [];

    for (const grp of docGroups) {
        const docGrp: DocGroup = {
            name: grp.name,
            items: []
        };

        for (const key of grp.items) {
            const idx = docs.findIndex(d => d.key == key);
            if (idx != -1) {
                docGrp.items.push(docs[idx]);
                docs.splice(idx, 1);
            }
        }

        groups.push(docGrp);
    }

    if (docs.length > 0) { // handle any left over
        groups.push({
            name: "Misc",
            items: [ ...docs ]
        });
    }

    return groups;
};



export function getComponents(): SourceEntry[] {
    const componentList: SourceEntry[] = [];

    for (const [filePath, metadata] of Object.entries(components)) {

        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const componentKey = fileName.substring(0, fileName.length - 3);

        componentList.push({ 
            type: "component",
            key: componentKey,
            name: metadata.title,
            description: metadata.description,
            icon: metadata.icon,
            path: filePath
        });
    }

    return componentList;
};

export function getComponentGroups(): SourceGroup[] {
    const components = getComponents();

    const groups: SourceGroup[] = [];

    for (const grp of componentGroups) {
        const componentGrp: SourceGroup = {
            name: grp.name,
            items: []
        };

        for (const key of grp.items) {
            const idx = components.findIndex(d => d.key == key);
            if (idx != -1) {
                componentGrp.items.push(components[idx]);
                components.splice(idx, 1);
            }
        }

        groups.push(componentGrp);
    }

    if (components.length > 0) { // handle any left over
        groups.push({
            name: "Misc",
            items: [ ...components ]
        });
    }

    return groups;
};

export function getPrevComponent(component: string): SourceEntry | undefined {
    const components = getComponentGroups().flatMap(grp => grp.items);
    const index = components.findIndex(c => c.key == component);

    if (index == -1) return undefined;

    return components[index - 1];
};

export function getNextComponent(component: string): SourceEntry | undefined {
    const components = getComponentGroups().flatMap(grp => grp.items);
    const index = components.findIndex(c => c.key == component);

    if (index == -1) return undefined;

    return components[index + 1];
};


export function getBlocks(): SourceEntry[] {
    const blockList: SourceEntry[] = [];

    for (const [filePath, metadata] of Object.entries(blocks)) {

        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const blockKey = fileName.substring(0, fileName.length - 3);

        blockList.push({ 
            type: "block",
            key: blockKey,
            name: metadata.title,
            description: metadata.description,
            icon: metadata.icon,
            path: filePath
        });
    }

    return blockList;
};

