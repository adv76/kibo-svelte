<script lang="ts">
    import * as Rating from "$lib/registry/components/rating";
    import { HeartIcon } from "@lucide/svelte";
</script>

<Rating.Root value={3} max={5}>
    {#snippet child({ index })}
        <Rating.Button {index} icon={HeartIcon} />
    {/snippet}
</Rating.Root>
