<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaVolumeRange } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaVolumeRange, any>> = $props();
</script>

<media-volume-range class={cn("p-2.5", className)} {...restProps}></media-volume-range>
