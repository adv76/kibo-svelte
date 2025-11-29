type Metadata = {
    title: string;
    description: string;
    icon: string;
    dependencies?: string[];
    installer: string;
};

const components = import.meta.glob<Metadata>("./content/components/*.md", { import: "metadata", eager: true });
const blocks = import.meta.glob<Metadata>("./content/blocks/*.md", { import: "metadata", eager: true });



// patterns

type SourceEntry = {
    type: "component" | "block";
    key: string;
    name: string;
    description: string;
    icon: string;
    path: string;
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

