<script lang="ts">
    import * as Status from "$lib/registry/components/status";
</script>


<Status.Root
    class="gap-4 rounded-full px-6 py-2 text-sm"
    status="online"
    variant="outline"
>
    <Status.Indicator />
    <Status.Label class="font-mono">Fully operational</Status.Label>
</Status.Root>
