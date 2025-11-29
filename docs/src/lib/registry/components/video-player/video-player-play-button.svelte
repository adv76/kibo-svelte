<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaPlayButton } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaPlayButton, any>> = $props();
</script>

<media-play-button class={cn("p-2.5", className)} {...restProps}></media-play-button>
