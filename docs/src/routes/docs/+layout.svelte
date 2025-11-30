<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import { getDocGroups, getDocs } from "$lib/source";
    import { cn } from "$lib/utils";

    let { children } = $props();


</script>

<aside class="fixed top-14 left-0 w-[290px] h-[calc(100vh-3.5rem)] max-md:hidden">
    <ScrollArea class="h-full">
        <div class="p-4">
            {#each getDocGroups() as group(group.name)}
                <p class="inline-flex items-center gap-2 text-sm mb-1.5 px-2 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0 mt-6">
                    {group.name}
                </p>
                {#each group.items as doc(doc.key)}
                    {@const key = doc.key == "index" ? "" : doc.key}
                    {@const isActive = doc.key == "index" ? page.url.pathname.endsWith("docs") : page.url.pathname.endsWith(doc.key)}
                    <a 
                        href={resolve(`/docs/${key}`)}
                        data-active={isActive}
                        class={cn(
                            "relative flex flex-row items-center gap-2 rounded-lg p-2 text-sm text-start [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0",
                            isActive ? "text-primary bg-primary/10" : "text-muted-foreground transition-colors hover:bg-accent/50 hover:text-accent-foreground/80 hover:transition-none"
                        )}
                    >
                        {doc.name}
                    </a>
                {/each}
            {/each}
        </div>
    </ScrollArea>
</aside>

<main class="md:ml-[290px]">
    {@render children?.()}
</main>


