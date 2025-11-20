<script lang="ts">
    import { resolve } from "$app/paths";
    import { getComponents } from "$lib/source";
    import Logo from "../nav/logo.svelte";

    const components = getComponents();

    const componentsHalf = Math.ceil(components.length / 2);
    const componentsLeft = components.slice(0, componentsHalf);
    const componentsRight = components.slice(componentsHalf);
</script>

<!-- import path from "node:path";
import { globSync } from "glob";
import Link from "next/link";
import { Logo } from "../../../../../../components/navbar/logo";
import { processFolderName } from "../../../../../../lib/patterns";
import { source } from "../../../../../../lib/source";
import { Theme } from "./theme";

const pages = source.getPages();
const docs = pages.filter((page) => page.slugs[0] === "docs");
const components = pages.filter((page) => page.slugs[0] === "components");
const blocks = pages.filter((page) => page.slugs[0] === "blocks");

const patternsPath = path.join(process.cwd(), "../../packages/patterns");
const patternFiles = globSync("*", { cwd: patternsPath, withFileTypes: true });
const patternFolders = patternFiles
  .filter((folder) => folder.isDirectory() && folder.name !== "node_modules")
  .sort((a, b) => a.name.localeCompare(b.name));



const patternsHalf = Math.ceil(patternFolders.length / 2);
const patternsLeft = patternFolders.slice(0, patternsHalf);
const patternsRight = patternFolders.slice(patternsHalf);
-->

<footer class="mt-16 grid gap-8 py-8">
    <div class="container flex items-start justify-between">
        <div class="grid gap-2">
            <a href={resolve("/")}>
                <Logo />
            </a>
        </div>
        <!-- <Theme /> -->
    </div>
    <div class="container grid gap-8 md:grid-cols-3 lg:grid-cols-6">
        <div>
            <h3 class="font-medium text-sm">Docs</h3>
            <ul class="mt-2 space-y-1 text-sm">
                <!-- {docs.map((page) => (
                    <li key={page.url}>
                    <Link
                        class="text-muted-foreground transition-colors hover:text-primary"
                        href={page.url}
                    >
                        {page.data.title}
                    </Link>
                    </li>
                ))} -->
            </ul>
        </div>
        <div class="col-span-2">
            <h3 class="font-medium text-sm">Components</h3>
            <div class="grid grid-cols-2 gap-4">
                <ul class="mt-2 space-y-1 text-sm">
                    {#each componentsLeft as page(page.key)}
                        <li>
                            <a
                                class="text-muted-foreground transition-colors hover:text-primary"
                                href={resolve(`/components/${page.key}`)}
                            >
                                {page.name}
                            </a>
                        </li>
                    {/each}
                </ul>
                <ul class="mt-2 space-y-1 text-sm">
                    {#each componentsRight as page(page.key)}
                        <li>
                            <a
                                class="text-muted-foreground transition-colors hover:text-primary"
                                href={resolve(`/components/${page.key}`)}
                            >
                                {page.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
      </div>
      <div>
            <h3 class="font-medium text-sm">Blocks</h3>
            <ul class="mt-2 space-y-1 text-sm">
                <!-- {blocks.map((page) => (
                    <li key={page.url}>
                    <Link
                        class="text-muted-foreground transition-colors hover:text-primary"
                        href={page.url}
                    >
                        {page.data.title}
                    </Link>
                    </li>
                ))} -->
            </ul>
      </div>
      <div class="col-span-2">
            <h3 class="font-medium text-sm">Patterns</h3>
            <div class="grid grid-cols-2 gap-4">
                <ul class="mt-2 space-y-1 text-sm">
                    <!-- {patternsLeft.map((folder) => (
                    <li key={folder.name}>
                        <Link
                        class="text-muted-foreground transition-colors hover:text-primary"
                        href={folder.name}
                        >
                        {processFolderName(folder.name)}
                        </Link>
                    </li>
                    ))} -->
                </ul>
                <ul class="mt-2 space-y-1 text-sm">
                    <!-- {patternsRight.map((folder) => (
                    <li key={folder.name}>
                        <Link
                        class="text-muted-foreground transition-colors hover:text-primary"
                        href={`/patterns/${folder.name}`}
                        >
                        {processFolderName(folder.name)}
                        </Link>
                    </li>
                    ))} -->
                </ul>
            </div>
        </div>
    </div>
</footer>
