<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaSeekBackwardButton } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaSeekBackwardButton, any>> = $props();
</script>

<media-seek-backward-button class={cn("p-2.5", className)} {...restProps}></media-seek-backward-button>
