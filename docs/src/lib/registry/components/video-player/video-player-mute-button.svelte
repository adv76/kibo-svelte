<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaMuteButton } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaMuteButton, any>> = $props();
</script>

<media-mute-button class={cn("p-2.5", className)} {...restProps}></media-mute-button>
