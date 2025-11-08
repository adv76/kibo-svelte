<script lang="ts">
    import * as Pill from "$lib/registry/components/pill";
    import { CheckCircle } from "@lucide/svelte";
</script>

<Pill.Root>
    <Pill.Status>
        <CheckCircle class="text-emerald-500" size={12} />
        Passed
    </Pill.Status>
    Approval Status
</Pill.Root>
