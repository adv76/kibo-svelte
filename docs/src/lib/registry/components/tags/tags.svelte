<script lang="ts">
    import { Popover } from "$lib/components/ui/popover";
    import { cn } from "$lib/utils";
    import { onMount, type Snippet } from "svelte";
    import { setupContext } from "./tags-context.svelte";

    let {
        open = $bindable(false),
        onOpenChange,
        class: className,
        children
    }: {
        open?: boolean;
        onOpenChange?: (open: boolean) => void;
        class: string;
        children: Snippet;
    } = $props();

    let ref: HTMLDivElement;

    const ctx = setupContext();

    onMount(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            ctx.width = entries[0].contentRect.width;
        });

        resizeObserver.observe(ref);

        return () => {
            resizeObserver.disconnect();
        };
    });
</script>

<Popover bind:open {onOpenChange}>
    <div bind:this={ref} class={cn("relative w-full", className)}>
        {@render children?.()}
    </div>
</Popover>
