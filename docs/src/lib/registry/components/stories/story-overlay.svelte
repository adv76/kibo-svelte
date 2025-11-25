<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        side = "bottom",
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        side?: "top" | "bottom";
    } = $props();

    const positionClasses =
        $derived(side === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t");
</script>

<div
    class={cn(
        "absolute right-0 left-0 h-10 from-black/20 to-transparent",
        positionClasses,
        className
    )}
    {...restProps}
></div>
