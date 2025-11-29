<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import * as AvatarStack from "$lib/registry/components/avatar-stack";
    import * as Cursor from "$lib/registry/components/cursor";
    import { cn } from "$lib/utils";
    import { onMount } from "svelte";

    const users = [
        {
            id: 1,
            name: "Hayden Bleasel",
            avatar: "https://github.com/haydenbleasel.png",
        },
        {
            id: 2,
            name: "shadcn",
            avatar: "https://github.com/shadcn.png",
            message: "Can we adjust the color?",
        },
        {
            id: 3,
            name: "Lee Robinson",
            avatar: "https://github.com/leerob.png",
        },
    ];

    const colors = [
        {
            foreground: "text-emerald-800",
            background: "bg-emerald-50",
        },
        {
            foreground: "text-rose-800",
            background: "bg-rose-50",
        },
        {
            foreground: "text-sky-800",
            background: "bg-sky-50",
        },
    ];

    // Helper function to generate random position
    const getRandomPosition = () => ({
        x: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
        y: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
    });


    let user1Position = $state({
        x: 10,
        y: 8,
    });
    let user2Position = $state({
        x: 30,
        y: 40,
    });
    let user3Position= $state({
        x: 70,
        y: 50,
    });

    // Store all user positions in a single array for easier access
    const userPositions = $derived([user1Position, user2Position, user3Position]);

    // Create separate intervals for each user to move at different intervals
    onMount(() => {
        const interval1 = setInterval(
            () => {
                user1Position = getRandomPosition();
            },
            Math.random() * 3000 + 2000
        ); // Random interval between 2-5 seconds

        const interval2 = setInterval(
            () => {
                user2Position = getRandomPosition();
            },
            Math.random() * 4000 + 3000
        ); // Random interval between 3-7 seconds

        const interval3 = setInterval(
            () => {
                user3Position = getRandomPosition();
            },
            Math.random() * 2500 + 1500
        ); // Random interval between 1.5-4 seconds

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    });

    // Assign positions to users
    const usersWithPositions = $derived(users.map((user, index) => ({
        ...user,
        position: userPositions[index],
    })));
</script>

<div class="relative aspect-[4/3] size-full bg-[radial-gradient(var(--color-secondary),transparent_1px)] [background-size:16px_16px]">
    <div class="absolute top-8 right-8">
        <AvatarStack.Root animate>
            {#each usersWithPositions as user(user.id)}
                <AvatarStack.Avatar size={32}>
                    <Avatar.Root>
                        <Avatar.Image class="mt-0 mb-0" src={user.avatar} />
                        <Avatar.Fallback>{user.name.slice(0, 2)}</Avatar.Fallback>
                    </Avatar.Root>
                </AvatarStack.Avatar>
            {/each}
        </AvatarStack.Root>
    </div>
    {#each usersWithPositions as user, index(user.id)}
        <Cursor.Root
            class="absolute transition-all duration-1000"
            style="top: {user.position.y}%; left: {user.position.x}%;"
        >
            <Cursor.Pointer
                class={cn(colors[index % colors.length].foreground)}
            />
            <Cursor.Body
                class={cn(
                    colors[index % colors.length].background,
                    colors[index % colors.length].foreground,
                    "gap-1 px-3 py-2"
                )}
            >
                <div class="flex items-center gap-2 opacity-100!">
                    <img
                        alt={user.name}
                        class="mt-0 mb-0 size-4 rounded-full"
                        height={16}
                        src={user.avatar}
                        width={16}
                    />
                    <Cursor.Name>{user.name}</Cursor.Name>
                </div>
                {#if user.message}
                    <Cursor.Message>{user.message}</Cursor.Message>
                {/if}
            </Cursor.Body>
        </Cursor.Root>
    {/each}
</div>
