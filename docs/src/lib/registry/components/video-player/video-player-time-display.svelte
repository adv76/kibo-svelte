<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaTimeDisplay } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaTimeDisplay, any>> = $props();
</script>

<media-time-display class={cn("p-2.5", className)} {...restProps}></media-time-display>
