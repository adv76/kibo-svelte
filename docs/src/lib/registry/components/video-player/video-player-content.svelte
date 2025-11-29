<script lang="ts">
    import { cn } from "$lib/utils";
    import { onMount } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLVideoElement> = $props();

    let video: HTMLVideoElement;

    onMount(() => {
        // hack because svelte wont allow adding slots in markup because the 
        // web component nesting crosses component boundaries
        video.slot = "media"; 
    }); 
</script>

<video 
    bind:this={video} 
    class={cn("mt-0 mb-0", className)} 
    {...restProps}
></video>
