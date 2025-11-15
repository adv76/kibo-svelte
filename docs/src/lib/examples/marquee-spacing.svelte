<script lang="ts">
    import * as Marquee from "$lib/registry/components/marquee";
</script>

<div class="flex size-full items-center justify-center bg-background">
    <Marquee.Root>
        <Marquee.Content fade>
            {#each { length: 10 }  as _, index(index)}
                <Marquee.Item class="-mx-2 h-16 w-16">
                    <img
                        alt="Placeholder {index}"
                        class="overflow-hidden rounded-full ring-2 ring-background"
                        src="https://placehold.co/64x64?random={index}"
                    />
                </Marquee.Item>
            {/each}
        </Marquee.Content>
    </Marquee.Root>
</div>
