<script lang="ts">
    import * as CodeBlock from "$lib/registry/components/code-block";

    const exampleCode = [
        {
            language: "jsx",
            filename: "MyComponent.jsx",
            code: `function MyComponent(props) {
return (
<div>
    <h1>Hello, {props.name}!</h1>
    <p>This is an example React component.</p>
</div>
);
}`,
        },
        {
            language: "tsx",
            filename: "MyComponent.tsx",
            code: `function MyComponent(props: { name: string }) {
return (
    <div>
    <h1>Hello, {props.name}!</h1>
    <p>This is an example React component.</p>
    </div>
);
}`,
        },
    ];
</script>


<CodeBlock.Root class="aspect-square" data={exampleCode} value={exampleCode[0].language}>
    <CodeBlock.Header>
        <CodeBlock.Files>
            {#snippet child(item)}
                <CodeBlock.Filename value={item.language}>
                    {item.filename}
                </CodeBlock.Filename>
            {/snippet}
        </CodeBlock.Files>
        <CodeBlock.Select>
            <CodeBlock.SelectTrigger>
                <CodeBlock.SelectValue />
            </CodeBlock.SelectTrigger>
            <CodeBlock.SelectContent>
                {#snippet child(items)}
                    {#each items as item(item.language)}
                        <CodeBlock.SelectItem value={item.language}>
                            {item.language}
                        </CodeBlock.SelectItem>
                    {/each}
                {/snippet}
            </CodeBlock.SelectContent>
        </CodeBlock.Select>
        <CodeBlock.CopyButton
            onCopy={() => console.log("Copied code to clipboard")}
            onError={() => console.error("Failed to copy code to clipboard")}
        />
    </CodeBlock.Header>
    <CodeBlock.Body class="h-full">
        {#snippet child(item)}
            <CodeBlock.Item value={item.language}>
                <CodeBlock.Content 
                    class="h-full"
                    language={item.language as CodeBlock.BundledLanguage} 
                    code={item.code} 
                />
            </CodeBlock.Item>
        {/snippet}
    </CodeBlock.Body>
</CodeBlock.Root>
