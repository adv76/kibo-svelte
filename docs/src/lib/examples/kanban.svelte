<script lang="ts">
    import { faker } from "@faker-js/faker";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Kanban from "$lib/registry/components/kanban";
    import type { KanbanItemProps } from "$lib/registry/components/kanban/types";

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
        })) satisfies KanbanItemProps[];

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
    });

    let features = $state(exampleFeatures);
</script>

<Kanban.Provider
    columns={columns}
    data={features}
    onDataChange={(f) => features = f}
>
    {#snippet child({ column })}
        <Kanban.Board id={column.id}>
            <Kanban.Header>
                <div class="flex items-center gap-2">
                    <div
                        class="h-2 w-2 rounded-full"
                        style="background-color: {column.color};"
                    ></div>
                    <span>{column.name}</span>
                </div>
            </Kanban.Header>
            <Kanban.Cards id={column.id}>
                {#snippet child({ item: feature, index })}
                    <Kanban.Card
                        column={column.name}
                        id={feature.id}
                        key={feature.id}
                        name={feature.name}
                        {index}
                    >
                        <div class="flex items-start justify-between gap-2">
                            <div class="flex flex-col gap-1">
                                <p class="m-0 flex-1 font-medium text-sm">
                                    {feature.name}
                                </p>
                            </div>
                            {#if feature.owner} 
                                <Avatar.Root class="h-4 w-4 shrink-0">
                                    <Avatar.Image src={feature.owner.image} />
                                    <Avatar.Fallback>
                                        {feature.owner.name?.slice(0, 2)}
                                    </Avatar.Fallback>
                                </Avatar.Root>
                            {/if}
                        </div>
                        <p class="m-0 text-muted-foreground text-xs">
                            {shortDateFormatter.format(feature.startAt)} -{" "}
                            {dateFormatter.format(feature.endAt)}
                        </p>
                    </Kanban.Card>
                {/snippet}
            </Kanban.Cards>
        </Kanban.Board>
    {/snippet}
</Kanban.Provider>
