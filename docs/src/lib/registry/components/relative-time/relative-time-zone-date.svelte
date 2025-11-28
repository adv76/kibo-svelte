<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { getTimeContext, getZoneContext } from "./relative-time-context.svelte";
    import { formatDate } from "./utils";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> = $props();

    const timeCtx = getTimeContext();
    const zoneCtx = getZoneContext();

    const display = $derived(formatDate(timeCtx.time, zoneCtx.zone, timeCtx.dateFormatOptions));
</script>

<div class={className} {...restProps}>{display}</div>
