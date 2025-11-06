<script lang="ts">
    import * as CodeBlock from "$lib/registry/components/code-block";

    const code = [
        {
            language: "jsx",
            filename: "MyComponent.jsx",
            code: 
            `function MyComponent(props) {
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
            code: 
            `function MyComponent(props: { name: string }) {
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

<CodeBlock.Root data={code} value={code[0].language}>
    <CodeBlock.Body>
        {#snippet child(items)}
            {#each items as item(item.language)}
                <CodeBlock.Item value={item.language}>
                    <CodeBlock.Content 
                        language={item.language as CodeBlock.BundledLanguage} 
                        code={item.code} 
                    />
                </CodeBlock.Item>
            {/each}
        {/snippet}
    </CodeBlock.Body>
</CodeBlock.Root>
