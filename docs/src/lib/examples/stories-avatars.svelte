<script lang="ts">
    import * as Story from "$lib/registry/components/stories";

    const stories = [
        {
            id: 1,
            author: "Hayden Bleasel",
            avatar: "https://github.com/haydenbleasel.png",
            fallback: "HB",
        },
        {
            id: 2,
            author: "shadcn",
            avatar: "https://github.com/shadcn.png",
            fallback: "CN",
        },
        {
            id: 3,
            author: "Lee Robinson",
            avatar: "https://github.com/leerob.png",
            fallback: "LR",
        },
        {
            id: 4,
            author: "Serafim",
            avatar: "https://github.com/serafimcloud.png",
            fallback: "SC",
        },
    ];
</script>

<div class="w-full max-w-4xl">
    <Story.ContainerRoot>
        <Story.ContainerContent class="justify-center">
            {#each stories as story(story.id)}
                <Story.Root class="aspect-square w-12 basis-12 rounded-full p-0">
                    <Story.Author class="p-0">
                        <span
                            aria-hidden="true"
                            class="inline-flex size-full rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5"
                        >
                            <span class="inline-flex size-full rounded-full bg-white p-0.5">
                                <Story.AuthorImage
                                    class="size-full"
                                    fallback={story.fallback}
                                    src={story.avatar}
                                />
                            </span>
                        </span>
                    </Story.Author>
                </Story.Root>
            {/each}
        </Story.ContainerContent>
    </Story.ContainerRoot>
</div>
