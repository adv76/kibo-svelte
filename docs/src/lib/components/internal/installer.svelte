<script lang="ts">
    import ShadcnSvelte from "$lib/components/icons/shadcn-svelte.svelte";
    import * as Snippet from "$lib/registry/components/snippet";
    import { toast } from "svelte-sonner";

    // import kibo from "../public/logomark.svg";
    // import shadcn from "../public/shadcn.svg";

    type InstallerProps = {
        packageName: string;
    };

    let { packageName }: InstallerProps = $props();


    let value = $state("shadcn");
    
    const commands = $derived({
        // "kibo-ui": {
        //     label: "Kibo UI CLI",
        //     image: kibo,
        //     code: `npx kibo-ui add ${packageName}`,
        // },
        shadcn: {
            label: "shadcn CLI",
            image: ShadcnSvelte,
            code: `npx shadcn-svelte@latest add http://adv76.github.io/kibo-svelte/r/${packageName}.json`,
        },
    });
</script>

<Snippet.Root
    class="not-prose shiki shiki-themes github-light github-dark"
    bind:value
>
    <Snippet.Header>
        <Snippet.TabsList>
            {#each Object.entries(commands) as [key, command](key)}
                <Snippet.TabsTrigger class="basis-auto" value={key}>
                    <command.image />
                    <span>{command.label}</span>
                </Snippet.TabsTrigger>
            {/each}
        </Snippet.TabsList>
        <Snippet.CopyButton
            onCopy={() => toast.success("Copied to clipboard")}
            onError={() => toast.error("Failed to copy to clipboard")}
            value={commands[value as keyof typeof commands].code}
        />
    </Snippet.Header>
    {#each Object.entries(commands) as [key, command](key)}
        <Snippet.TabsContent value={key}>
            {command.code}
        </Snippet.TabsContent>
    {/each}
</Snippet.Root>
