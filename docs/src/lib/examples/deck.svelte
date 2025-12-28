<script lang="ts">
    import * as Deck from "$lib/registry/components/deck";

    const images = [
        {
            id: 1,
            src: "https://placehold.co/400x600/ff6b6b/fff?text=Card+1",
            title: "Card 1",
        },
        {
            id: 2,
            src: "https://placehold.co/400x600/4ecdc4/fff?text=Card+2",
            title: "Card 2",
        },
        {
            id: 3,
            src: "https://placehold.co/400x600/45b7d1/fff?text=Card+3",
            title: "Card 3",
        },
        {
            id: 4,
            src: "https://placehold.co/400x600/96ceb4/fff?text=Card+4",
            title: "Card 4",
        },
        {
            id: 5,
            src: "https://placehold.co/400x600/feca57/fff?text=Card+5",
            title: "Card 5",
        },
    ];
</script>

<Deck.Root class="size-full">
    <Deck.Cards items={images}>
        {#snippet child({ item: image })}
            <Deck.Item class="p-0">
                <img
                    alt={image.title}
                    class="h-full w-full rounded-lg object-cover"
                    draggable={false}
                    height={600}
                    src={image.src}
                    width={400}
                />
            </Deck.Item>
        {/snippet}
    </Deck.Cards>
    <Deck.Empty />
</Deck.Root>
