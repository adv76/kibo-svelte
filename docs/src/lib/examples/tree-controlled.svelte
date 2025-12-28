<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Tree from "$lib/registry/components/tree";

    let selectedIds = $state<string[]>([]);
    let expandedIds = $state<string[]>([
        "team",
        "engineering",
        "design",
        "product",
    ]);

    const handleClearSelection = () => {
        selectedIds = [];
    };

    const handleSelectAll = () => {
        selectedIds = ["alice", "bob", "carol", "david", "eve", "frank"];
    };
</script>

<div class="space-y-4">
    <div class="flex gap-2">
        <Button onclick={handleSelectAll} size="sm" variant="outline">
            Select All Team Members
        </Button>
        <Button onclick={handleClearSelection} size="sm" variant="outline">
            Clear Selection
        </Button>
    </div>

    <Tree.Provider
        {expandedIds}
        multiSelect
        bind:selectedIds
    >
        <Tree.View>
            <Tree.Node isLast nodeId="team">
                <Tree.NodeTrigger>
                    <Tree.Expander hasChildren />
                    <Tree.Icon hasChildren />
                    <Tree.Label>Team</Tree.Label>
                </Tree.NodeTrigger>
                <Tree.NodeContent hasChildren>
                    <Tree.Node level={1} nodeId="engineering">
                        <Tree.NodeTrigger>
                            <Tree.Expander hasChildren />
                            <Tree.Icon hasChildren />
                            <Tree.Label>Engineering</Tree.Label>
                        </Tree.NodeTrigger>
                        <Tree.NodeContent hasChildren>
                            <Tree.Node level={2} nodeId="alice">
                                <Tree.NodeTrigger>
                                    <Tree.Expander />
                                    <Tree.Icon />
                                    <Tree.Label>Alice Johnson</Tree.Label>
                                </Tree.NodeTrigger>
                            </Tree.Node>
                            <Tree.Node isLast level={2} nodeId="bob">
                                <Tree.NodeTrigger>
                                    <Tree.Expander />
                                    <Tree.Icon />
                                    <Tree.Label>Bob Smith</Tree.Label>
                                </Tree.NodeTrigger>
                            </Tree.Node>
                        </Tree.NodeContent>
                    </Tree.Node>
                    <Tree.Node level={1} nodeId="design">
                        <Tree.NodeTrigger>
                            <Tree.Expander hasChildren />
                            <Tree.Icon hasChildren />
                            <Tree.Label>Design</Tree.Label>
                        </Tree.NodeTrigger>
                        <Tree.NodeContent hasChildren>
                            <Tree.Node level={2} nodeId="carol">
                                <Tree.NodeTrigger>
                                    <Tree.Expander />
                                    <Tree.Icon />
                                    <Tree.Label>Carol Williams</Tree.Label>
                                </Tree.NodeTrigger>
                            </Tree.Node>
                            <Tree.Node isLast level={2} nodeId="david">
                                <Tree.NodeTrigger>
                                    <Tree.Expander />
                                    <Tree.Icon />
                                    <Tree.Label>David Brown</Tree.Label>
                                </Tree.NodeTrigger>
                            </Tree.Node>
                        </Tree.NodeContent>
                    </Tree.Node>
                    <Tree.Node isLast level={1} nodeId="product">
                        <Tree.NodeTrigger>
                            <Tree.Expander hasChildren />
                            <Tree.Icon hasChildren />
                            <Tree.Label>Product</Tree.Label>
                        </Tree.NodeTrigger>
                        <Tree.NodeContent hasChildren>
                            <Tree.Node level={2} nodeId="eve">
                                <Tree.NodeTrigger>
                                    <Tree.Expander />
                                    <Tree.Icon />
                                    <Tree.Label>Eve Davis</Tree.Label>
                                </Tree.NodeTrigger>
                            </Tree.Node>
                            <Tree.Node isLast level={2} nodeId="frank">
                                <Tree.NodeTrigger>
                                    <Tree.Expander />
                                    <Tree.Icon />
                                    <Tree.Label>Frank Miller</Tree.Label>
                                </Tree.NodeTrigger>
                            </Tree.Node>
                        </Tree.NodeContent>
                    </Tree.Node>
                </Tree.NodeContent>
            </Tree.Node>
        </Tree.View>
    </Tree.Provider>

    {#if selectedIds.length > 0}
        <div class="text-muted-foreground text-sm">
            Selected: {selectedIds.join(", ")}
        </div>
    {/if}
</div>
