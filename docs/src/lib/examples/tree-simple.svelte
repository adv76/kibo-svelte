<script lang="ts">
    import * as Tree from "$lib/registry/components/tree";
</script>

<Tree.Provider>
    <Tree.View>
        <Tree.Node nodeId="documents">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren />
                <Tree.Label>Documents</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node level={1} nodeId="work">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren />
                        <Tree.Label>Work</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="project-a">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Project A.pdf</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="project-b">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Project B.pdf</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
                <Tree.Node isLast level={1} nodeId="personal">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren />
                        <Tree.Label>Personal</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="resume">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Resume.docx</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="cover-letter">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Cover Letter.docx</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
        <Tree.Node isLast nodeId="downloads">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren />
                <Tree.Label>Downloads</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node level={1} nodeId="installer">
                    <Tree.NodeTrigger>
                        <Tree.Expander />
                        <Tree.Icon />
                        <Tree.Label>installer.exe</Tree.Label>
                    </Tree.NodeTrigger>
                </Tree.Node>
                <Tree.Node isLast level={1} nodeId="update">
                    <Tree.NodeTrigger>
                        <Tree.Expander />
                        <Tree.Icon />
                        <Tree.Label>update.zip</Tree.Label>
                    </Tree.NodeTrigger>
                </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
    </Tree.View>
</Tree.Provider>
