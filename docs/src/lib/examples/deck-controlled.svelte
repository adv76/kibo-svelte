<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Deck from "$lib/registry/components/deck";
    
    const cards = [
        { id: 1, title: "Card 1", color: "bg-red-500" },
        { id: 2, title: "Card 2", color: "bg-blue-500" },
        { id: 3, title: "Card 3", color: "bg-green-500" },
        { id: 4, title: "Card 4", color: "bg-yellow-500" },
        { id: 5, title: "Card 5", color: "bg-purple-500" },
    ];

    let currentIndex = $state(0);
    let animationDirection = $state<"left" | "right">("left");

    const nextCardLeft = () => {
        if (currentIndex < cards.length) {
            animationDirection = "left";
            // Small delay to ensure direction is set before index changes
            setTimeout(() => {
                currentIndex++;
            }, 0);
        }
    };

    const nextCardRight = () => {
        if (currentIndex < cards.length) {
            animationDirection = "right";
            // Small delay to ensure direction is set before index changes
            setTimeout(() => {
                currentIndex++;
            }, 0);
        }
    };
</script>

<div class="space-y-4">
    <div class="text-center">
        <p class="mb-2 text-muted-foreground text-sm">
            Current Index: {currentIndex} | Next Direction: {animationDirection}
        </p>
        <div class="flex justify-center gap-2">
            <Button
                disabled={currentIndex >= cards.length}
                onclick={nextCardLeft}
                size="sm"
                variant="outline"
            >
                Next (Left Animation)
            </Button>
            <Button
                disabled={currentIndex >= cards.length}
                onclick={nextCardRight}
                size="sm"
                variant="outline"
            >
                Next (Right Animation)
            </Button>
        </div>
    </div>

    <Deck.Root class="mx-auto aspect-square w-40">
        <Deck.Cards
            animateOnIndexChange={true}
            class="aspect-[2/3]"
            bind:currentIndex
            indexChangeDirection={animationDirection}
            onSwipe={(_index, _direction) => {
                // Handle swipe action
            }}
            items={cards}
        >
            {#snippet child({ item: card })}
                <Deck.Item
                    class="{card.color} flex-col text-center text-white"
                >
                    <h3 class="font-bold text-2xl">{card.title}</h3>
                    <p class="text-sm opacity-90">Swipe or use buttons</p>
                </Deck.Item>
            {/snippet}
        </Deck.Cards>
        <Deck.Empty />
    </Deck.Root>
</div>
