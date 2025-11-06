<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { getContext } from "./code-block-context.svelte";

    let {
        class: className,
        ...restProps
    }: HTMLAttributes<HTMLSpanElement> = $props();

    const ctx = getContext();
</script>

<span class={className} {...restProps}>{ctx.value}</span>
