<script lang="ts">
    //import { GitHub } from "./github";
    import Links from "./links.svelte";
    import Logo from "./logo.svelte";
    import MobileMenu from "./mobile-menu.svelte";
    import MobileSearch from "./mobile-search.svelte";
    import Search from "./search.svelte";
    import { getComponents } from "$lib/source";
    import { resolve } from "$app/paths";

    // const componentsCount = source
    // .getPages()
    // .filter(({ slugs }) => slugs[0] === "components").length;

    const componentsCount = $derived(getComponents().length);

    // const blocksCount = source
    // .getPages()
    // .filter(({ slugs }) => slugs[0] === "blocks").length;

    const blocksCount = $derived(0);

    // const patternsPath = path.join(process.cwd(), "../../packages/patterns");
    // const patternsCount = globSync(`${patternsPath}/**/*.tsx`).length;
    const patternsCount = $derived(0);
</script>

<div class="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-fd-background/80 px-4 py-3 backdrop-blur-sm transition-colors">
    <div class="flex items-center gap-3">
        <a href={resolve("/")} class="rounded-md px-3 py-1.5 hover:bg-accent hover:text-accent-foreground">
            <Logo />
        </a>
        <Links
            blocksCount={blocksCount}
            class="hidden gap-1 md:flex"
            componentsCount={componentsCount}
            patternsCount={patternsCount}
        />
    </div>

    <div class="hidden items-center gap-3 md:flex">
        <Search />
        <!-- <GitHub /> -->
    </div>

    <div class="flex items-center gap-3 md:hidden">
        <MobileSearch />
        <MobileMenu />
    </div>
  </div>