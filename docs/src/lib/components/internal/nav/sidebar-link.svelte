<script lang="ts">
    import { page } from "$app/state";
    import * as Sidebar from "$lib/components/ui/sidebar";

    type SidebarLinkProps = {
        name: string;
        url: string;
    };

    let { name, url }: SidebarLinkProps = $props();

    const isActive = $derived(url == page.url.pathname);
</script>

<Sidebar.MenuSubItem>
    <Sidebar.MenuSubButton 
        class="data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
        {isActive}
    >
        {#snippet child({ props })}
            <a href={url} class="truncate" {...props}>
                <span>{name}</span>
            </a>
        {/snippet}
    </Sidebar.MenuSubButton>
</Sidebar.MenuSubItem>
