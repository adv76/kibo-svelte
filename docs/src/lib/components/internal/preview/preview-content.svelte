<script lang="ts">
    import * as Resizable from "$lib/components/ui/resizable";
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";

    type PreviewContentProps = {
        type: "component" | "block";
        children: Snippet;
    };

    let {
        type,
        children  
    }: PreviewContentProps = $props();
</script>

<Resizable.PaneGroup class="size-full" direction="horizontal">
    <Resizable.Pane
        class={cn(
            "peer not-fumadocs-codeblock size-full",
            type === "component" ? "overflow-hidden!" : "overflow-auto!"
        )}
        defaultSize={100}
        maxSize={100}
        minSize={40}
    >
        {@render children?.()}
    </Resizable.Pane>
    <Resizable.Handle
        class="peer-data-[panel-size=100.0]:w-0"
        withHandle
    />
    <Resizable.Pane
        class="border-none bg-background"
        defaultSize={0}
        maxSize={70}
        minSize={0}
    />
</Resizable.PaneGroup>
