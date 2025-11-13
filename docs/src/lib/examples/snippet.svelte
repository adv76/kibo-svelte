<script lang="ts">
    import * as Snippet from "$lib/registry/components/snippet";
    import { Box, Heart } from "@lucide/svelte";

    const commands = [
        {
            label: "kibo-ui",
            icon: Heart,
            code: "npx kibo-ui@latest add snippet",
        },
        {
            label: "shadcn",
            icon: Box,
            code: "npx shadcn@latest add https://www.kibo-ui.com/r/snippet.json",
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
                    <command.icon size={14} />
                    <span>{command.label}</span>
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
