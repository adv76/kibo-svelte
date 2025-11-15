<script lang="ts">
    import * as Marquee from "$lib/registry/components/marquee";
</script>

<div class="flex size-full items-center justify-center bg-background">
    <Marquee.Root>
        <Marquee.Content fade>
            {#each { length: 10 }  as _, index(index)}
                <Marquee.Item class="h-32 w-32">
                    <img
                        alt="Placeholder {index}"
                        class="overflow-hidden rounded-full"
                        src="https://placehold.co/128x128?random={index}"
                    />
                </Marquee.Item>
            {/each}
        </Marquee.Content>
    </Marquee.Root>
</div>
