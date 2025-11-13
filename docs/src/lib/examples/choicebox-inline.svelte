<script lang="ts">
    import * as Choicebox from "$lib/registry/components/choicebox";

    const options = [
        {
            id: "1",
            label: "Option 1",
            description: "This is the first option",
        },
        {
            id: "2",
            label: "Option 2",
            description: "This is the second option",
        },
    ];
</script>

<Choicebox.Root
    value="1"
    style="grid-template-columns: repeat({options.length}, 1fr)"
>
    {#each options as option(option.id)}
        <Choicebox.Item value={option.id}>
            <Choicebox.ItemHeader>
                <Choicebox.ItemTitle>{option.label}</Choicebox.ItemTitle>
                <Choicebox.ItemDescription>
                    {option.description}
                </Choicebox.ItemDescription>
            </Choicebox.ItemHeader>
            <Choicebox.Indicator />
        </Choicebox.Item>
    {/each}
</Choicebox.Root>
