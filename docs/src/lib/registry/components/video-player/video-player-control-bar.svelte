<script lang="ts">
    import type { MediaControlBar } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaControlBar, any>> = $props();
</script>

<media-control-bar 
    class={className} 
    {...restProps}
>
    {@render children?.()}
</media-control-bar>
