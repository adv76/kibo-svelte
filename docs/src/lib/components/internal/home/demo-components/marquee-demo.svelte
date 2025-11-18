<script lang="ts">
    import * as Marquee from "$lib/registry/components/marquee";
</script>

<div class="flex aspect-square items-center justify-center overflow-hidden rounded-xl border bg-background">
    <Marquee.Root>
        <Marquee.Content fade>
            {#each { length: 10 } as _, index(index)}
                <Marquee.Item class="h-24 w-24">
                    <img
                        alt={`Placeholder ${index}`}
                        class="overflow-hidden rounded-full"
                        height={96}
                        src={`https://placehold.co/96x96?random=${index}`}
                        width={96}
                    />
                </Marquee.Item>
            {/each}
        </Marquee.Content>
    </Marquee.Root>
</div>
