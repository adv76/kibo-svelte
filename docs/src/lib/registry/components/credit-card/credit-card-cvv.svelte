<script lang="ts">
    import { cn } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    let {
        class: className,
        style,
        children,
        ...restProps
    }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p
    class={cn("font-mono", className)}
    style="line-height: 100%; {style}"
    {...restProps}
>
    {@render children?.()}
</p>
