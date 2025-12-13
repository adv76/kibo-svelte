<script lang="ts">
    import {
        SiLucide,
        SiRadixui,
        SiSvelte,
        SiTailwindcss,
        SiTypescript,
    } from "@icons-pack/svelte-simple-icons";
    import { resolve } from "$app/paths";
    import { Button } from "$lib/components/ui/button";
    import * as Tooltip from "$lib/components/ui/tooltip";
    //import { GitHubButton } from "../github-button";
    import shadcn from "./shadcn.jpg";

    const icons = [
        {
            icon: SiSvelte,
            name: "Svelte",
            color: "#ff3e00",
        },
        {
            icon: SiTypescript,
            name: "TypeScript",
            color: "#3178c6",
        },
        {
            icon: SiTailwindcss,
            name: "Tailwind CSS",
            color: "#00bcff",
        },
        {
            icon: SiLucide,
            name: "Lucide",
            color: "#f67373",
        },
        {
            icon: SiRadixui,
            name: "Radix UI",
            color: "#000000",
        },
    ];
</script>

<section
    class="relative isolate overflow-hidden rounded-4xl bg-background pt-8 sm:pt-12 md:pt-16 lg:pt-24"
    style="background-color: var(--background); background-image: radial-gradient(at 81% 100%, var(--color-pink-300) 0px, transparent 50%), radial-gradient(at 19% 100%, var(--color-purple-300) 0px, transparent 50%);"
>
    <div class="pointer-events-none absolute right-0 bottom-0 left-0 select-none border-background/15 border-t">
        <div class="grid grid-cols-24 divide-x divide-y divide-background/15">
            {#each { length: 24 * 12 } as _, index(index)}
                <div class="aspect-square w-full"></div>
            {/each}
        </div>
    </div>
    <div class="container mx-auto relative z-10 grid gap-8 sm:gap-12 md:gap-16">
        <div class="mx-auto flex flex-col justify-center gap-6 text-balance">
            <h1 class="mb-0 text-balance text-center font-semibold text-4xl tracking-[-0.06em]! sm:text-5xl md:text-6xl xl:text-7xl">
                High quality
                <div class="ml-2 inline-flex items-center justify-center gap-2 align-bottom">
                    <img
                        alt="shadcn/ui"
                        class="size-8 overflow-hidden rounded-full sm:size-10 md:size-12 lg:size-14"
                        height={56}
                        src={shadcn}
                        width={56}
                    />
                    <span>shadcn-svelte</span>
                </div>
                components built with
                <div class="-space-x-2 -translate-y-1.5 md:-translate-y-2.5 inline-flex items-center justify-center">
                    {#each icons as icon, index(icon.name)}
                        <Tooltip.Root>
                            <Tooltip.Trigger>
                                {#snippet child({ props })}
                                    <div
                                        class="inline-flex size-8 items-center justify-center rounded-full text-white sm:size-10 md:size-12 lg:size-14"
                                        style="background-color: {icon.color}; mask-image: {index ? "radial-gradient(circle 28px at -17px 50%, transparent 99%, white 100%)" : "none"}"
                                        {...props}
                                    >
                                        <icon.icon class="size-3 sm:size-4 md:size-5 lg:size-6" />
                                    </div>
                                {/snippet}
                            </Tooltip.Trigger>
                            <Tooltip.Content>{icon.name}</Tooltip.Content>
                        </Tooltip.Root>
                    {/each}
                </div>
            </h1>
            <div class="mx-auto max-w-4xl text-center">
                <p class="mt-0 mb-0 text-muted-foreground lg:text-lg xl:text-xl 2xl:text-2xl">
                    Kibo UI is a custom registry of composable, accessible and
                    extensible components designed for use with shadcn/ui. Free and open
                    source, forever.
                </p>
            </div>
            <div class="flex items-center justify-center gap-4">
                <Button href={resolve("/components")} size="lg">
                    Browse components
                </Button>
                <!-- <GitHubButton /> -->
            </div>
        </div>
        <div class="-mb-24 overflow-hidden rounded-4xl border-background/10 border-x bg-gradient-to-b from-background/15 to-background/40 p-8 backdrop-blur-lg">
            <!-- DemoVideo -->
            <div class="pointer-events-none relative aspect-video w-full select-none overflow-hidden rounded-t-lg">
                <!-- <iframe src="https://youtu.be/FqQ9j6bqtf0" title="Demo Video" class="w-full"></iframe>  -->
                <iframe  
                    class="w-full aspect-video" 
                    src="https://www.youtube.com/embed/FqQ9j6bqtf0?si=PZQNfjCGaAIwMg95&autoplay=1&controls=0&disablekb=1&playlist=FqQ9j6bqtf0&loop=1&mute=1" 
                    title="Demo Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                ></iframe>
            </div>
            <!-- End DemoVideo -->
            
            <!-- <DemoVideo url="https://youtu.be/FqQ9j6bqtf0" /> -->
        </div>
    </div>
</section>
