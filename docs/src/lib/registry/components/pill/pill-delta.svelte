<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { Minus, ChevronUp, ChevronDown } from "@lucide/svelte";

    let {
        delta,
        class: className,
    }: {
        delta: number;
        class?: string;
    } = $props();
</script>

{#if !delta}
    <Minus class={cn("size-3 text-muted-foreground", className)} />
{:else if delta > 0}
    <ChevronUp class={cn("size-3 text-emerald-500", className)} />
{:else}
    <ChevronDown class={cn("size-3 text-rose-500", className)} />
{/if}
