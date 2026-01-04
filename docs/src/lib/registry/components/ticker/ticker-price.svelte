<script lang="ts">
    import { cn } from "$lib/utils";
    import { useTickerState } from "./ticker-context.svelte";

    let {
        price,
        class: className,
        ...props
    }: Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
        price: number;
    } = $props();

    const ctx = useTickerState();

    const formattedPrice = $derived(ctx.formatter.format(price));
</script>

<span class={cn("text-muted-foreground", className)} {...props}>
    {formattedPrice}
</span>
