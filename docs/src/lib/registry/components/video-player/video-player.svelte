<script lang="ts">
    import { cn } from "$lib/utils";
    import type { MediaController } from "media-chrome";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        style,
        children,
        ...restProps
    }: HTMLAttributes<HTMLElement> & Partial<Record<keyof MediaController, any>> = $props();
</script>

{#await import("media-chrome") then}
    <media-controller 
        class={cn("size-full", className)} 
        style={
            "--media-primary-color: var(--primary); " + 
            "--media-secondary-color: var(--background); " +
            "--media-text-color: var(--foreground); " +
            "--media-background-color: var(--background); " +
            "--media-control-hover-background: var(--accent); " +
            "--media-font-family: var(--font-sans); " +
            "--media-live-button-icon-color: var(--muted-foreground); " +
            "--media-live-button-indicator-color: var(--destructive); " +
            "--media-range-track-background: var(--border); " +
            style
        }
        {...restProps}
    >
        {@render children?.()}
    </media-controller>
{/await}
