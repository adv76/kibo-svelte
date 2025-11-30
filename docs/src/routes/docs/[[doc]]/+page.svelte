<script lang="ts">
    let { data } = $props();
</script>

<div class="max-w-[1000px] mx-auto">
    <article class="flex min-w-0 w-full flex-col gap-4 pt-8 px-4 md:px-6 md:mx-auto">
        <h1 class="text-3xl font-semibold">{data.metadata.title}</h1>
        <p class="mb-8 text-lg text-fd-muted-foreground">{data.metadata.description}</p>

        <data.doc />
    </article>
</div>
