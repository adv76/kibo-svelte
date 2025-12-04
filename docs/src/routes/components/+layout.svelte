<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import LucideIcon from "$lib/components/internal/lucide-icon.svelte";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import { getComponentGroups } from "$lib/source";
    import { cn } from "$lib/utils";

    let { children } = $props();
</script>

<aside class="fixed top-14 left-0 w-[290px] h-[calc(100vh-3.5rem)] max-md:hidden">
    <ScrollArea class="h-full">
        <div class="p-4">
            {#each getComponentGroups() as group(group.name)}
                <p class="flex items-center gap-2 text-sm mb-1.5 px-2 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0 mt-6">
                    {group.name}
                </p>
                {#each group.items as component(component.key)}
                    {@const isActive = page.url.pathname.endsWith(component.key)}
                    <a 
                        href={resolve(`/components/${component.key}`)}
                        data-active={isActive}
                        class={cn(
                            "relative flex flex-row items-center gap-2 rounded-lg p-2 text-sm text-start wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0",
                            isActive ? "text-primary bg-primary/10" : "text-muted-foreground transition-colors hover:bg-accent/50 hover:text-accent-foreground/80 hover:transition-none"
                        )}
                    >
                        <LucideIcon name={component.icon} />
                        {component.name}
                    </a>
                {/each}
            {/each}
        </div>
    </ScrollArea>
</aside>

<main class="md:ml-[290px]">
    {@render children?.()}
</main>


