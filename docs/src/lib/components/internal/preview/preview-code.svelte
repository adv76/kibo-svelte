<script lang="ts">
    import * as CodeBlock from "$lib/registry/components/code-block";

    type PreviewCodeProps = {
        code: string;
        language: string;
        filename: string;
    };

    let {
        code,
        language,
        filename
    }: PreviewCodeProps = $props();

    const data = $derived([
        {
        language,
        filename,
        code,
        },
    ]);
</script>

<CodeBlock.Root
    class="overflow-auto rounded-none border-none"
    {data}
    value={data[0].language}
>
    <div class="sticky top-0 z-1">
        <CodeBlock.CopyButton class="absolute top-1 right-1.5" />
    </div>
    <CodeBlock.Body>
        {#snippet child(item)}
            <CodeBlock.Item value={item.language}>
                <CodeBlock.Content 
                    language={item.language as CodeBlock.BundledLanguage} 
                    code={item.code} 
                />
            </CodeBlock.Item>
        {/snippet}
    </CodeBlock.Body>
</CodeBlock.Root>
