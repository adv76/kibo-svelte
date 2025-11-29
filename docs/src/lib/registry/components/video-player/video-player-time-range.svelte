<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaTimeRange } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaTimeRange, any>> = $props();
</script>

<media-time-range class={cn("p-2.5", className)} {...restProps}></media-time-range>
