<script lang="ts" module>
    const DEFAULT_CURRENCY = "USD";
    const DEFAULT_LOCALE = "en-US";

    const defaultFormatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
        style: "currency",
        currency: DEFAULT_CURRENCY,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
</script>

<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { setupTickerState } from "./ticker-context.svelte";
    import { cn } from "$lib/utils";

    let {
        children,
        class: className,
        currency = DEFAULT_CURRENCY,
        locale = DEFAULT_LOCALE,
        ...props
    }: HTMLAttributes<HTMLButtonElement> & {
        currency?: string;
        locale?: string;
    } = $props();

    const formatter = $derived.by(() => {
        try {
            return new Intl.NumberFormat(locale, {
                style: "currency",
                currency: currency.toUpperCase(),
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        } catch {
            return defaultFormatter;
        }
    });

    const ctx = setupTickerState({
        formatter: () => formatter
    });
</script>

<button
    class={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap align-middle",
        className
    )}
    type="button"
    {...props}
>
    {@render children?.()}
</button>
