<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaSeekForwardButton } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaSeekForwardButton, any>> = $props();
</script>

<media-seek-forward-button class={cn("p-2.5", className)} {...restProps}></media-seek-forward-button>
