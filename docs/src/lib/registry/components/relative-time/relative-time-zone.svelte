<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";
    import { setupZoneContext } from "./relative-time-context.svelte";

    let {
        zone,
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        zone: string;
        dateFormatOptions?: Intl.DateTimeFormatOptions;
        timeFormatOptions?: Intl.DateTimeFormatOptions;
    } = $props();

    const ctx = setupZoneContext({ zone });
</script>

<div
    class={cn(
        "flex items-center justify-between gap-1.5 text-xs",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</div>
