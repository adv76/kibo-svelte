<script lang="ts">
    import { resolve } from '$app/paths';
    import Installer from '$lib/components/internal/installer.svelte';
    import Preview from '$lib/components/internal/preview/preview.svelte';
    import { getNextComponent, getPrevComponent } from '$lib/source';
    import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';

    let { data } = $props();

    let prev = $derived(getPrevComponent(data.componentName));
    let next = $derived(getNextComponent(data.componentName));
</script>

<div class="max-w-[1000px] mx-auto">
    <article class="flex min-w-0 w-full flex-col gap-4 pt-8 px-4 md:px-6 md:mx-auto">
        <h1 class="text-3xl font-semibold">{data.metadata.title}</h1>
        <p class="mb-8 text-lg text-fd-muted-foreground">{data.metadata.description}</p>

        <Preview path={data.metadata.installer} />

        <h2 id="installation">Installation</h2>

        <Installer packageName={data.metadata.installer} />

        <data.component />

        <div class="flex flex-row gap-4 pb-6">
            {#if prev}
                <a 
                    class="min-w-0 basis-full flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground text-start"
                    href={resolve(`/components/${prev.key}`)}
                >
                    <div class="inline-flex items-center gap-1.5 font-medium flex-row">
                        <ChevronLeftIcon class="size-4" />
                        <p>{prev.name}</p>
                    </div>
                    <p class="text-muted-foreground truncate">{prev.description}</p>
                </a>
            {/if}

            {#if next}
                <a 
                    class="min-w-0 basis-full flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground text-end"
                    href={resolve(`/components/${next.key}`)}
                >
                    <div class="inline-flex items-center gap-1.5 font-medium flex-row-reverse">
                        <ChevronRightIcon class="size-4" />
                        <p>{next.name}</p>
                    </div>
                    <p class="text-muted-foreground truncate">{next.description}</p>
                </a>
            {/if}
        </div>
    </article>
</div>
