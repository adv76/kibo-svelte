<script lang="ts">
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";

    type ListItemProps = {
        class?: string;
        children?: Snippet
    };

    let {
        class: className,
        children
    }: ListItemProps = $props();
</script>

<div class={cn("flex flex-1 flex-col gap-2 p-3", className)}>
    {@render children?.()}
</div>
