<script lang="ts">
    import { TabsContent } from "$lib/components/ui/tabs";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        children,   
        ...restProps
    }: ComponentProps<typeof TabsContent> & {
    } = $props();
</script>

<TabsContent
    bind:ref
    class={cn("mt-0 bg-background p-4 text-sm", className)}
    {...restProps}
>
    <pre class="truncate">
        {@render children?.()}
    </pre>
</TabsContent>
