<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        safeArea = 20,
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        safeArea?: number
    } = $props();
</script>

<div
    class={cn(
        "backface-hidden absolute inset-0 flex overflow-hidden bg-foreground/90",
        "@xs:rounded-2xl rounded-lg",
        className
    )}
    {...restProps}
>
    <div
        class="relative flex-1"
        style="margin: {safeArea}px;"
    >
        {@render children?.()}
    </div>
</div>
