<script lang="ts">
    import * as Rating from "$lib/registry/components/rating";
</script>

<Rating.Root value={3} max={5}>
    {#snippet child({ index })}
        <Rating.Button {index} size={30} />
    {/snippet}
</Rating.Root>
