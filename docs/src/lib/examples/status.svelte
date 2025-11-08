<script lang="ts">
    import * as Status from "$lib/registry/components/status";
</script>

<div class="flex gap-2">
    <Status.Root status="online">
        <Status.Indicator />
        <Status.Label />
    </Status.Root>

    <Status.Root status="offline">
        <Status.Indicator />
        <Status.Label />
    </Status.Root>

    <Status.Root status="maintenance">
        <Status.Indicator />
        <Status.Label />
    </Status.Root>

    <Status.Root status="degraded">
        <Status.Indicator />
        <Status.Label />
    </Status.Root>
</div>
