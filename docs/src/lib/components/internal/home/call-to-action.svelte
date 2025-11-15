<script lang="ts">
    import { getComponents } from '$lib/source';

    //import { TextLoop } from "../../../../../components/motion-primitives/text-loop";

    const components = $derived(getComponents().map(c => c.name));
</script>

<div class="container mx-auto grid gap-8 rounded-4xl bg-secondary px-8 pt-8 md:px-16 md:pt-16">
    <div class="grid gap-2">
        <h2 class="font-semibold text-3xl text-foreground">
            Get started with Kibo UI
        </h2>
        <p class="text-balance text-lg text-muted-foreground">
            Install your first component in seconds with the Kibo UI or shadcn CLI.
        </p>
    </div>
    <div class="dark">
        {@render terminal()}
    </div>
  </div>


{#snippet terminal()}
    <div class="w-full overflow-hidden rounded-t-2xl border border-border bg-background shadow-2xl">
    <!-- Terminal Header -->
    <div class="flex items-center justify-between border-border border-b bg-muted px-4 py-3">
        <div class="flex items-center gap-2">
            <div class="h-3 w-3 rounded-full bg-destructive"></div>
            <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div class="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div class="font-medium text-muted-foreground text-sm">Terminal</div>
        <div class="w-14"></div> <!-- Spacer for centering -->
    </div>

    <!-- Terminal Content -->
    <div class="h-[10rem] bg-background p-6 sm:h-[20rem]">
        <div class="flex items-center font-mono text-base">
            <code class="mr-2 text-blue-600 dark:text-blue-400">$</code>
            <code class="text-muted-foreground">npx kibo-ui add&nbsp;</code>
            <!-- <TextLoop>
            {components.map((component) => (
                <span class="text-accent-foreground" key={component}>
                {component}
                </span>
            ))}
            </TextLoop> -->
            <span class="ml-1 inline-block h-5 w-2 animate-pulse bg-foreground"></span>
        </div>
    </div>
  </div>
{/snippet}