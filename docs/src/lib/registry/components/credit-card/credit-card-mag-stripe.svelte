<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { useCreditCardBackState } from "./credit-card-context.svelte";
    import { cn } from "$lib/utils";

    let {
        class: className,
        ...restProps
    }: Omit<HTMLAttributes<HTMLDivElement>, "children"> = $props();

    const ctx = useCreditCardBackState();
</script>

<div
    class={cn(
        "-translate-x-1/2 absolute top-[3%] left-1/2 h-1/4 bg-gray-900",
        className
    )}
    style="width: calc(100% + 2 * {ctx.safeArea}px);"
    {...restProps}
></div>
