<script lang="ts">
    import * as Pill from "$lib/registry/components/pill";
    import { X } from "@lucide/svelte";
</script>

<Pill.Root>
    #kibo-ui
    <Pill.Button size="icon" variant="ghost">
        <X size={12} />
    </Pill.Button>
</Pill.Root>
