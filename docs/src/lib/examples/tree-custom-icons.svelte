<script lang="ts">
    import * as Tree from "$lib/registry/components/tree";
    import {
        Database,
        Globe,
        Key,
        Lock,
        Server,
        Shield,
        Table,
        User,
        Users,
    } from "@lucide/svelte";
</script>

<Tree.Provider
    expandedIds={["database", "users-table", "roles-table", "api"]}
>
    <Tree.View>
        <Tree.Node nodeId="database">
            <Tree.NodeTrigger>
                <Tree.Expander hasChildren />
                <Tree.Icon hasChildren>
                    <Database class="h-4 w-4 text-blue-500" />
                </Tree.Icon>
                <Tree.Label>Database</Tree.Label>
            </Tree.NodeTrigger>
            <Tree.NodeContent hasChildren>
                <Tree.Node level={1} nodeId="users-table">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren>
                            <Table class="h-4 w-4 text-green-500" />
                        </Tree.Icon>
                        <Tree.Label>Users</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="id-field">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <Key class="h-4 w-4 text-yellow-500" />
                                </Tree.Icon>
                                <Tree.Label>id</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node level={2} nodeId="email-field">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <Globe class="h-4 w-4 text-purple-500" />
                                </Tree.Icon>
                                <Tree.Label>email</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="password-field">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <Lock class="h-4 w-4 text-red-500" />
                                </Tree.Icon>
                                <Tree.Label>password</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                    </Tree.NodeContent>
                </Tree.Node>
                <Tree.Node isLast level={1} nodeId="roles-table">
                    <Tree.NodeTrigger>
                        <Tree.Expander hasChildren />
                        <Tree.Icon hasChildren>
                            <Table class="h-4 w-4 text-green-500" />
                        </Tree.Icon>
                        <Tree.Label>Roles</Tree.Label>
                    </Tree.NodeTrigger>
                    <Tree.NodeContent hasChildren>
                        <Tree.Node level={2} nodeId="admin-role">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <Shield class="h-4 w-4 text-orange-500" />
                                </Tree.Icon>
                                <Tree.Label>Admin</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        <Tree.Node isLast level={2} nodeId="user-role">
                            <Tree.NodeTrigger>
                                <Tree.Expander />
                                <Tree.Icon>
                                    <User class="h-4 w-4 text-blue-400" />
                                </Tree.Icon>
                                <Tree.Label>User</Tree.Label>
                            </Tree.NodeTrigger>
                        </Tree.Node>
                        </Tree.NodeContent>
                    </Tree.Node>
                </Tree.NodeContent>
            </Tree.Node>
            <Tree.Node isLast nodeId="api">
                <Tree.NodeTrigger>
                    <Tree.Expander hasChildren />
                    <Tree.Icon hasChildren>
                        <Server class="h-4 w-4 text-indigo-500" />
                    </Tree.Icon>
                    <Tree.Label>API</Tree.Label>
                </Tree.NodeTrigger>
                <Tree.NodeContent hasChildren>
                    <Tree.Node level={1} nodeId="auth-endpoint">
                        <Tree.NodeTrigger>
                            <Tree.Expander />
                            <Tree.Icon>
                                <Lock class="h-4 w-4 text-red-500" />
                            </Tree.Icon>
                            <Tree.Label>Authentication</Tree.Label>
                        </Tree.NodeTrigger>
                    </Tree.Node>
                    <Tree.Node isLast level={1} nodeId="users-endpoint">
                        <Tree.NodeTrigger>
                            <Tree.Expander />
                            <Tree.Icon>
                                <Users class="h-4 w-4 text-blue-500" />
                            </Tree.Icon>
                            <Tree.Label>Users Management</Tree.Label>
                        </Tree.NodeTrigger>
                    </Tree.Node>
            </Tree.NodeContent>
        </Tree.Node>
    </Tree.View>
</Tree.Provider>
