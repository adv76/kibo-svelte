

const components = import.meta.glob("./content/components/*.md");
const blocks = import.meta.glob("./content/blocks/*.md");

// patterns

type SourceEntry = {
    type: "component" | "block";
    name: string;
    path: string;
};



export function getComponents(): SourceEntry[] {
    const componentList: SourceEntry[] = [];

    for (const filePath in components) {
        const split = filePath.replaceAll("\\", "/").split("/");
        const fileName = split[split.length - 1];

        const componentName = fileName.substring(0, fileName.length - 3);

        componentList.push({ 
            type: "component",
            name: componentName,
            path: filePath
        });
    }

    return componentList;
};


