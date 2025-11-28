<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { getTimeContext, getZoneContext } from "./relative-time-context.svelte";
    import { formatTime } from "./utils";
    import { cn } from "$lib/utils";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> = $props();

    const timeCtx = getTimeContext();
    const zoneCtx = getZoneContext();

    const display = $derived(formatTime(timeCtx.time, zoneCtx.zone, timeCtx.timeFormatOptions));
</script>

<div
    class={cn("pl-8 text-muted-foreground tabular-nums", className)}
    {...restProps}
>
    {display}
</div>
