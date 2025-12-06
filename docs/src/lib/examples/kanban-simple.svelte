<script lang="ts">
    import { faker } from "@faker-js/faker";
    import * as Kanban from "$lib/registry/components/kanban";

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    const columns = [
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
            column: faker.helpers.arrayElement(columns).id,
            owner: faker.helpers.arrayElement(users),
        }));

    let features = $state(exampleFeatures);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) {
            return;
        }

        const status = columns.find(({ id }) => id === over.id);

        if (!status) {
            return;
        }

        features = 
            features.map((feature) => {
                if (feature.id === active.id) {
                return { ...feature, column: status.id };
                }

                return feature;
            });
    };
</script>

<Kanban.Provider columns={columns} data={features} onDragEnd={handleDragEnd}>
    {#snippet child({ column })}
        <Kanban.Board id={column.id}>
            <Kanban.Header>{column.name}</Kanban.Header>
            <Kanban.Cards id={column.id}>
                {#snippet child({ item: feature, index })}
                    <Kanban.Card
                        column={column.name}
                        id={feature.id}
                        key={feature.id}
                        name={feature.name}
                        {index}
                    />
                {/snippet}
            </Kanban.Cards>
        </Kanban.Board>
    {/snippet}
</Kanban.Provider>
