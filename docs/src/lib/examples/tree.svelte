<script lang="ts">
    import * as Tree from "$lib/registry/components/tree";
    import { FileCode, FileJson, FileText } from "@lucide/svelte";
</script>

<Tree.Provider
    expandedIds={["src", "components", "ui"]}
    onSelectionChange={(ids) => console.log("Selected:", ids)}
>
    <Tree.View>
        <Tree.Node nodeId="src">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren />
                <Tree.Label>src</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node level={1} nodeId="components">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren />
                        <Tree.Label>components</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="ui">
                            <Tree.NodeTrigger>
                                <Tree.Expander hasChildren />
                                <Tree.Icon hasChildren />
                                <Tree.Label>ui</Tree.Label>
                            </Tree.NodeTrigger>
                            <Tree.NodeContent hasChildren>
                                <Tree.Node level={3} nodeId="button.tsx">
                                    <Tree.NodeTrigger>
                                        <Tree.Expander />
                                        <Tree.Icon>
                                            <FileCode className="h-4 w-4" />
                                        </Tree.Icon>
                                        <Tree.Label>button.tsx</Tree.Label>
                                    </Tree.NodeTrigger>
                                </Tree.Node>
                                <Tree.Node level={3} nodeId="card.tsx">
                                    <Tree.NodeTrigger>
                                        <Tree.Expander />
                                        <Tree.Icon>
                                            <FileCode className="h-4 w-4" />
                                        </Tree.Icon>
                                        <Tree.Label>card.tsx</Tree.Label>
                                    </Tree.NodeTrigger>
                                </Tree.Node>
                                <Tree.Node isLast level={3} nodeId="dialog.tsx">
                                    <Tree.NodeTrigger>
                                        <Tree.Expander />
                                        <Tree.Icon>
                                            <FileCode className="h-4 w-4" />
                                        </Tree.Icon>
                                        <Tree.Label>dialog.tsx</Tree.Label>
                                    </Tree.NodeTrigger>
                                </Tree.Node>
                            </Tree.NodeContent>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="layout">
                            <Tree.NodeTrigger>
                                <Tree.Expander hasChildren />
                                <Tree.Icon hasChildren />
                                <Tree.Label>layout</Tree.Label>
                            </Tree.NodeTrigger>
                            <Tree.NodeContent hasChildren>
                                <Tree.Node level={3} nodeId="header.tsx">
                                    <Tree.NodeTrigger>
                                        <Tree.Expander />
                                        <Tree.Icon>
                                            <FileCode className="h-4 w-4" />
                                        </Tree.Icon>
                                        <Tree.Label>header.tsx</Tree.Label>
                                    </Tree.NodeTrigger>
                                </Tree.Node>
                                <Tree.Node isLast level={3} nodeId="footer.tsx">
                                    <Tree.NodeTrigger>
                                        <Tree.Expander />
                                        <Tree.Icon>
                                            <FileCode className="h-4 w-4" />
                                        </Tree.Icon>
                                        <Tree.Label>footer.tsx</Tree.Label>
                                    </Tree.NodeTrigger>
                                </Tree.Node>
                            </Tree.NodeContent>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
        <Tree.Node nodeId="public">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren />
                <Tree.Label>public</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node isLast level={1} nodeId="images">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren />
                        <Tree.Label>images</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="logo.svg">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <FileText className="h-4 w-4" />
                                </Tree.Icon>
                                <Tree.Label>logo.svg</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="hero.png">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <FileText className="h-4 w-4" />
                                </Tree.Icon>
                                <Tree.Label>hero.png</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
        <Tree.Node nodeId="package.json">
            <Tree.NodeTrigger>
                <Tree.Expander />
                <Tree.Icon>
                    <FileJson className="h-4 w-4" />
                </Tree.Icon>
                <Tree.Label>package.json</Tree.Label>
            </Tree.NodeTrigger>
        </Tree.Node>
        <Tree.Node nodeId="tsconfig.json">
            <Tree.NodeTrigger>
                <Tree.Expander />
                <Tree.Icon>
                    <FileJson className="h-4 w-4" />
                </Tree.Icon>
                <Tree.Label>tsconfig.json</Tree.Label>
            </Tree.NodeTrigger>
        </Tree.Node>
        <Tree.Node isLast nodeId="README.md">
            <Tree.NodeTrigger>
                <Tree.Expander />
                <Tree.Icon>
                    <FileText className="h-4 w-4" />
                </Tree.Icon>
                <Tree.Label>README.md</Tree.Label>
            </Tree.NodeTrigger>
        </Tree.Node>
    </Tree.View>
</Tree.Provider>
