<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        symbol,
        class: className,
        ...props
    }: Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
        symbol: string;
    } = $props();
</script>

<span class={cn("font-medium", className)} {...props}>
    {symbol.toUpperCase()}
</span>
