<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import LucideIcon from "$lib/components/internal/lucide-icon.svelte";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import { getBlocks } from "$lib/source";
    import { cn } from "$lib/utils";

    let { children } = $props();


</script>

<aside class="fixed top-14 left-0 w-[290px] h-[calc(100vh-3.5rem)] max-md:hidden">
    <ScrollArea class="h-full">
        <div class="p-4">
            {#each getBlocks() as block(block.name)}
                {@const isActive = page.url.pathname.endsWith(block.key)}
                <a 
                    href={resolve(`/blocks/${block.key}`)}
                    data-active={isActive}
                    class={cn(
                        "relative flex flex-row items-center gap-2 rounded-lg p-2 text-sm text-start [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0",
                        isActive ? "text-primary bg-primary/10" : "text-muted-foreground transition-colors hover:bg-accent/50 hover:text-accent-foreground/80 hover:transition-none"
                    )}
                >
                    <LucideIcon name={block.icon} />
                    {block.name}
                </a>
            {/each}
        </div>
    </ScrollArea>
</aside>

<main class="md:ml-[290px]">
    {@render children?.()}
</main>


