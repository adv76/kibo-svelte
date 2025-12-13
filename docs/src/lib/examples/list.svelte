<script lang="ts" module>
    import { faker } from "@faker-js/faker";
    
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    const statuses = [
        { id: faker.string.uuid(), name: "Planned", color: "#6B7280" },
        { id: faker.string.uuid(), name: "In Progress", color: "#F59E0B" },
        { id: faker.string.uuid(), name: "Done", color: "#10B981" },
    ];

    const users = Array.from({ length: 4 })
        .fill(null)
        .map(() => ({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            image: faker.image.avatar(),
        }));

    const exampleFeatures = Array.from({ length: 20 })
        .fill(null)
        .map(() => ({
            id: faker.string.uuid(),
            name: capitalize(faker.company.buzzPhrase()),
            startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
            endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
            status: faker.helpers.arrayElement(statuses),
            owner: faker.helpers.arrayElement(users),
        }));
</script>

<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import * as List from "$lib/registry/components/list";

    let features = $state(exampleFeatures);

    const handleDragEnd = (event: List.DragEndEvent) => {
        const { active, over } = event;

        if (!over) {
            return;
        }

        const status = statuses.find((status) => status.name === over.id);

        if (!status) {
            return;
        }

        features = features.map((feature) => {
            if (feature.id === active.id) {
                return { ...feature, status };
            }

            return feature;
        });
    };
</script>

<List.Provider onDragEnd={handleDragEnd}>
    {#each statuses as status(status.name)}
        <List.Group id={status.name}>
            <List.Header color={status.color} name={status.name} />
            <List.Items>
                {@const items = features.filter(f => f.status.name === status.name)}
                {#each items as feature, index(feature.id)}
                    <List.Item
                        id={feature.id}
                        index={index}
                        name={feature.name}
                        parent={feature.status.name}
                    >
                        <div
                            class="h-2 w-2 shrink-0 rounded-full"
                            style="background-color: {feature.status.color};"
                        ></div>
                        <p class="m-0 flex-1 font-medium text-sm">
                            {feature.name}
                        </p>
                        {#if feature.owner}
                            <Avatar.Root class="h-4 w-4 shrink-0">
                                <Avatar.Image src={feature.owner.image} />
                                <Avatar.Fallback>
                                    {feature.owner.name?.slice(0, 2)}
                                </Avatar.Fallback>
                            </Avatar.Root>
                        {/if}
                    </List.Item>
                {/each}
            </List.Items>
        </List.Group>
    {/each}
</List.Provider>
