<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn, type WithElementRef } from "$lib/utils.js";
    import type { CodeBlockData } from "./types";
    import { setupContext } from "./code-block-context.svelte";

    let {
        ref = $bindable(null),
        class: className,
        value,
        onValueChange,
        data,
        children,   
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        value?: string;
        onValueChange?: (value: string) => void;
        data: CodeBlockData[];
    } = $props();

    const ctx = setupContext({
        value,
        onValueChange,
        data
    });
</script>

<div
    bind:this={ref}
    class={cn("size-full overflow-hidden rounded-md border", className)}
    {...restProps}
>
    {@render children?.()}
</div>