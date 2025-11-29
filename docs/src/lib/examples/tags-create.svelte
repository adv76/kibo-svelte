<script lang="ts">
    import * as Tags from "$lib/registry/components/tags";
    import { CheckIcon, PlusIcon } from "@lucide/svelte";

    const defaultTags = [
        { id: "react", label: "React" },
        { id: "typescript", label: "TypeScript" },
        { id: "javascript", label: "JavaScript" },
        { id: "nextjs", label: "Next.js" },
        { id: "vuejs", label: "Vue.js" },
        { id: "angular", label: "Angular" },
        { id: "svelte", label: "Svelte" },
        { id: "nodejs", label: "Node.js" },
        { id: "python", label: "Python" },
        { id: "ruby", label: "Ruby" },
        { id: "java", label: "Java" },
        { id: "csharp", label: "C#" },
        { id: "php", label: "PHP" },
        { id: "go", label: "Go" },
    ];

    let tags = $derived(defaultTags);

    let newTag = $state("");
    
    let selected = $state<string[]>([]);

    const handleCreateTag = () => {
        console.log(`created: ${newTag}`);

        tags.push({
            id: newTag,
            label: newTag,
        });
        selected.push(newTag);

        newTag = "";
    };

    const handleRemove = (value: string) => {
        if (!selected.includes(value)) {
            return;
        }

        console.log(`removed: ${value}`);
        selected = selected.filter((v) => v !== value);
    };

    const handleSelect = (value: string) => {
        if (selected.includes(value)) {
            handleRemove(value);
            return;
        }

        console.log(`selected: ${value}`);
        selected.push(value);
    };
</script>

<Tags.Root class="max-w-[300px]">
    <Tags.Trigger>
        {#each selected as tag(tag)}
            <Tags.Value onRemove={() => handleRemove(tag)}>
                {tags.find((t) => t.id === tag)?.label}
            </Tags.Value>
        {/each}
    </Tags.Trigger>
    <Tags.Content>
        <Tags.Input bind:value={newTag} placeholder="Search tag..." />
        <Tags.List>
            <Tags.Empty>
                <button
                    class="mx-auto flex cursor-pointer items-center gap-2"
                    onclick={handleCreateTag}
                    type="button"
                >
                    <PlusIcon className="text-muted-foreground" size={14} />
                    Create new tag: {newTag}
                </button>
            </Tags.Empty>
            <Tags.Group>
                {#each tags as tag(tag.id)}
                    <Tags.Item onSelect={() => handleSelect(tag.id)} value={tag.id}>
                        {tag.label}
                        {#if selected.includes(tag.id)}
                            <CheckIcon class="text-muted-foreground" size={14} />
                        {/if}
                    </Tags.Item>
                {/each}
            </Tags.Group>
        </Tags.List>
    </Tags.Content>
</Tags.Root>
