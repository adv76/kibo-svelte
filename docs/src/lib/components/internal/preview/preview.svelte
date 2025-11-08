<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
    import { cn } from "$lib/utils";
    import { Code, Eye } from "@lucide/svelte";
    import PreviewRender from "./preview-render.svelte";
    import PreviewContent from "./preview-content.svelte";
    import type { Component } from "svelte";
    import PreviewCode from "./preview-code.svelte";

    type PreviewProps = {
        path: string;
        className?: string;
        type?: "component" | "block";
    };

    let {
        path,
        className,
        type = "component"
    }: PreviewProps = $props();

    async function loadCode(): Promise<string> {
        const src = await import(`../../../examples/${path}.svelte?raw`);
        return src.default;
    };

    async function loadComponent(): Promise<Component> {
        const module = await import(`../../../examples/${path}.svelte`);
        return module.default;
    };
</script>

<div
    class={cn(
        "size-full overflow-hidden rounded-lg border bg-background",
        type === "block" && "h-[48rem] prose-code:border-none prose-code:p-0",
        type === "component" && "not-prose h-[32rem]",
        className
    )}
>
    <Tabs.Root class="size-full gap-0" value="preview">
        <Tabs.List class="w-full rounded-none border-b">
            <Tabs.Trigger value="code">
                <Code class="text-muted-foreground" size={16} />
                Code
            </Tabs.Trigger>
            <Tabs.Trigger value="preview">
                <Eye class="text-muted-foreground" size={16} />
                Preview
            </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content
            class="size-full overflow-y-auto bg-background"
            value="code"
        >
            {#await loadCode() then sourceCode}
                <PreviewCode code={sourceCode} filename="index.ts" language="tsx" />
            {/await}
        </Tabs.Content>
        <Tabs.Content
            class={cn(
                "size-full",
                type === "component" ? "overflow-hidden" : "overflow-auto"
            )}
            value="preview"
        >
            <PreviewContent type={type}>
                {#if type === "block"}
                    {#await loadComponent() then Component}
                        <Component />
                    {/await}
                {:else}
                    <PreviewRender>
                        {#await loadComponent() then Component}
                            <Component />
                        {/await}
                    </PreviewRender>
                {/if}
            </PreviewContent>
        </Tabs.Content>
    </Tabs.Root>
</div>
