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
    <Minus className={cn("size-3 text-muted-foreground", className)} />
{:else if delta > 0}
    <ChevronUp className={cn("size-3 text-emerald-500", className)} />
{:else}
   <ChevronDown className={cn("size-3 text-rose-500", className)} />;
{/if}
