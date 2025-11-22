<script lang="ts">
    import Installer from '$lib/components/internal/installer.svelte';
    import Preview from '$lib/components/internal/preview/preview.svelte';

    let { data } = $props();
</script>

<div class="max-w-[1000px] mx-auto">
    <article class="flex min-w-0 w-full flex-col gap-4 pt-8 px-4 md:px-6 md:mx-auto">
        <h1 class="text-3xl font-semibold">{data.metadata.title}</h1>
        <p class="mb-8 text-lg text-fd-muted-foreground">{data.metadata.description}</p>

        <Preview path={data.metadata.installer} />

        <h2 id="installation">Installation</h2>

        <Installer packageName={data.metadata.installer} />

        <data.component />
    </article>
</div>
