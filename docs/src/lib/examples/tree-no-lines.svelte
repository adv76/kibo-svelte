<script lang="ts">
    import * as Tree from "$lib/registry/components/tree";
</script>

<Tree.Provider
    expandedIds={["projects", "website-redesign"]}
    showLines={false}
>
    <Tree.View>
        <Tree.Node nodeId="projects">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren />
                <Tree.Label>Projects</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node level={1} nodeId="website-redesign">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren />
                        <Tree.Label>Website Redesign</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="homepage">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Homepage</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node level={2} nodeId="about-page">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>About Page</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="contact-form">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Contact Form</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
                <Tree.Node isLast level={1} nodeId="mobile-app">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren />
                        <Tree.Label>Mobile App</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="ios-version">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>iOS Version</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="android-version">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon />
                                <Tree.Label>Android Version</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
        <Tree.Node isLast nodeId="resources">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren />
                <Tree.Label>Resources</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node level={1} nodeId="documentation">
                    <Tree.NodeTrigger>
                        <Tree.Expander />
                        <Tree.Icon />
                        <Tree.Label>Documentation</Tree.Label>
                    </Tree.NodeTrigger>
                </Tree.Node>
                <Tree.Node level={1} nodeId="api-reference">
                    <Tree.NodeTrigger>
                        <Tree.Expander />
                        <Tree.Icon />
                        <Tree.Label>API Reference</Tree.Label>
                    </Tree.NodeTrigger>
                </Tree.Node>
                <Tree.Node isLast level={1} nodeId="examples">
                    <Tree.NodeTrigger>
                        <Tree.Expander />
                        <Tree.Icon />
                        <Tree.Label>Examples</Tree.Label>
                    </Tree.NodeTrigger>
                </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
    </Tree.View>
</Tree.Provider>
