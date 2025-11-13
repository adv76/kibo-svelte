<script lang="ts">
    import * as Choicebox from "$lib/registry/components/choicebox";

    const options = [
        {
            id: "1",
            label: "Option 1",
            subtitle: "(the first option)",
            description: "This is the first option",
        },
        {
            id: "2",
            label: "Option 2",
            subtitle: "(the second option)",
            description: "This is the second option",
        },
    ];
</script>

<Choicebox.Root value="1">
    {#each options as option(option.id)}
        <Choicebox.Item value={option.id}>
            <Choicebox.ItemHeader>
                <Choicebox.ItemTitle>
                    {option.label}
                    <Choicebox.ItemSubtitle>{option.subtitle}</Choicebox.ItemSubtitle>
                </Choicebox.ItemTitle>
                <Choicebox.ItemDescription>
                    {option.description}
                </Choicebox.ItemDescription>
            </Choicebox.ItemHeader>
            <Choicebox.Indicator />
        </Choicebox.Item>
    {/each}
</Choicebox.Root>
