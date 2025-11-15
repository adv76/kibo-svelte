<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import { cn } from "$lib/utils";
    import { page } from "$app/state";
    import { resolve } from "$app/paths";

    type LinksProps = {
        class?: string;
        componentsCount: number;
        blocksCount: number;
        patternsCount: number;
    };

    let {
        class: className = "",
        componentsCount,
        blocksCount,
        patternsCount
    }: LinksProps = $props();

    let pathname = $derived(page.url.pathname);

    const links = $derived([
        {
            label: "Docs",
            href: "/docs",
            active:
                pathname !== "/" &&
                !pathname.startsWith("/components") &&
                !pathname.startsWith("/blocks") &&
            !pathname.startsWith("/patterns"),
        },
        {
            label: "Components",
            href: "/components",
            active: pathname.startsWith("/components"),
            count: componentsCount,
        },
        {
            label: "Blocks",
            href: "/blocks",
            active: pathname.startsWith("/blocks"),
            count: blocksCount,
        },
        {
            label: "Patterns",
            href: "/patterns",
            active: pathname.startsWith("/patterns"),
            count: patternsCount,
        },
    ]);
</script>


<div class={cn("flex items-center gap-1", className)}>
    {#each links as link(link.href)}
        <a
            class={cn(
                navigationMenuTriggerStyle(),
                "h-auto bg-transparent px-3 py-1.5 shadow-none transition-all",
                link.active && "bg-primary/10 text-primary"
            )}
            href={resolve(link.href as unknown as any)}
        >
            {link.label}
            {#if link.count} 
                <Badge
                    class={cn(
                        "ml-1.5 hidden bg-foreground/5 lg:block",
                        link.active && "bg-primary text-primary-foreground"
                    )}
                    variant="secondary"
                >
                    {link.count}
                </Badge>
            {/if}
        </a>
    {/each}
</div>
