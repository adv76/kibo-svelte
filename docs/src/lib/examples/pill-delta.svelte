<script lang="ts">
    import * as Pill from "$lib/registry/components/pill";
</script>

<Pill.Root>
    <Pill.Delta delta={10} />
    Up 10%
</Pill.Root>
<Pill.Root>
    <Pill.Delta delta={-5} />
    Down 5%
</Pill.Root>
<Pill.Root>
    <Pill.Delta delta={0} />
    No change
</Pill.Root>
