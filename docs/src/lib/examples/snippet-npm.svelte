<script lang="ts">
    import * as Snippet from "$lib/registry/components/snippet";
    
    const commands = [
        {
            label: "npm",
            code: "npx next-forge@latest init",
        },
        {
            label: "yarn",
            code: "yarn dlx next-forge@latest init",
        },
        {
            label: "pnpm",
            code: "pnpx next-forge@latest init",
        },
        {
            label: "bun",
            code: "bunx next-forge@latest init",
        },
    ];

    let value = $state(commands[0].label);
    const activeCommand = $derived(commands.find((command) => command.label === value));
</script>

<Snippet.Root bind:value>
    <Snippet.Header>
        <Snippet.TabsList>
            {#each commands as command(command.label)}
                <Snippet.TabsTrigger value={command.label}>
                    {command.label}
                </Snippet.TabsTrigger>
            {/each}
        </Snippet.TabsList>
        {#if activeCommand}
            <Snippet.CopyButton
                onCopy={() =>
                    console.log(`Copied "${activeCommand.code}" to clipboard`)
                }
                onError={() =>
                    console.error(
                    `Failed to copy "${activeCommand.code}" to clipboard`
                    )
                }
                value={activeCommand.code}
            />
        {/if}
    </Snippet.Header>
    {#each commands as command(command.label)}
        <Snippet.TabsContent value={command.label}>
            {command.code}
        </Snippet.TabsContent>
    {/each}
</Snippet.Root>

