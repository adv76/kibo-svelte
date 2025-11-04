<script lang="ts">
    import { Select } from "$lib/components/ui/select";
    import type { ComponentProps } from "svelte";

    let {
        ...restProps
    }: ComponentProps<typeof Select> = $props();

    // TODO wire up context
</script>

<Select onValueChange={onValueChange} value={value} {...restProps} />
