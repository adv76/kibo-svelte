<script lang="ts">
    import * as CodeBlock from "$lib/registry/components/code-block";

    const code = [
        {
            language: "js",
            filename: "utils.js",
            code: `function calculateDiscount(price, percentage) {
  const discount = price * (percentage / 100); // [!code focus]
  return price - discount;
}

// Example usage
const finalPrice = calculateDiscount(100, 20);
console.log(finalPrice); // 80`,
        },
        {
            language: "ts",
            filename: "utils.ts",
            code: `function calculateDiscount(price: number, percentage: number): number {
  const discount = price * (percentage / 100); // [!code focus]
  return price - discount;
}

// Example usage
const finalPrice: number = calculateDiscount(100, 20);
console.log(finalPrice); // 80`,
        },
    ];
</script>

<CodeBlock.Root data={code} value={code[0].language}>
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
