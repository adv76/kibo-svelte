<script lang="ts">
    import { SelectContent } from "$lib/components/ui/select";
    import type { ComponentProps, Snippet } from "svelte";
    import type { CodeBlockData } from "./types";
    import { getContext } from "./code-block-context.svelte";

    let {
        class: className,
        child,
        children,
        ...restProps
    }: ComponentProps<typeof SelectContent> & {
        child: Snippet<[CodeBlockData[]]>
    } = $props();

    const ctx = getContext();
</script>

<SelectContent
    class={className}
    {...restProps}
>
    {#if child}
        {@render child(ctx.data)}
    {:else}
        {@render children?.()}
    {/if}
</SelectContent>
