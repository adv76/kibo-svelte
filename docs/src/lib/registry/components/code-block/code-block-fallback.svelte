<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { type WithElementRef } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        code,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        code?: string;
    } = $props();

    const lines = $derived(code?.split("\n"));
</script>

<div bind:this={ref} {...restProps}>
    <pre class="w-full">
        <code>
            {#if lines}
                {#each lines as line, i(i)}
                    <span class="line">{line}</span>
                {/each}
            {/if}
        </code>
    </pre>
</div>
