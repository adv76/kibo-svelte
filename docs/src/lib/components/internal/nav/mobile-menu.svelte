<script lang="ts">
    import { resolve } from "$app/paths";
    import { buttonVariants } from "$lib/components/ui/button";
    import * as Drawer from "$lib/components/ui/drawer";
    import { getComponents } from "$lib/source";
    import { Menu } from "@lucide/svelte";

    // import { docs, meta } from "@/.source";

    const components = getComponents();
</script>

<Drawer.Root>
    <Drawer.Trigger class={buttonVariants({ variant: "ghost", size: "icon", class: "size-8" })}>
        <Menu size={16} />
    </Drawer.Trigger>
    <Drawer.Content>
        <Drawer.Header class="sr-only">
            <Drawer.Title>Mobile Menu</Drawer.Title>
        </Drawer.Header>
        <div class="flex flex-col space-y-4 overflow-y-auto px-6 pt-8 pb-12">
            <div class="flex flex-col gap-2">
                <p class="font-medium">Components</p>
                {#each components as component(component.key)}
                    <Drawer.Close>
                        {#snippet child({ ...props })}
                            <a
                                class="text-muted-foreground"
                                href={resolve(`/components/${component.key}`)}
                                {...props}
                            >
                                {component.name}
                            </a>
                        {/snippet}
                    </Drawer.Close>
                {/each}
            </div>
            <!-- {meta.map((group) => (
                <div class="flex flex-col gap-2" key={group.title}>
                <p class="font-medium">{group.title}</p>
                {group.pages?.map((page) =>
                    page.startsWith("---") ? undefined : (
                    <DrawerClose asChild key={page}>
                        <Link
                        class="text-muted-foreground"
                        href={`/${group.title?.toLowerCase()}/${page}`}
                        key={page}
                        >
                        {
                            docs.find(
                            (doc) =>
                                doc.info.path ===
                                `${group.title?.toLowerCase()}/${page}.mdx`
                            )?.title
                        }
                        </Link>
                    </DrawerClose>
                    )
                )}
                </div>
            ))} -->
        </div>
    </Drawer.Content>
</Drawer.Root>
