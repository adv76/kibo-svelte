<script lang="ts">
    import type { SpinnerVariantProps } from "../types";
    import { cn } from "$lib/utils";
    import { LoaderPinwheel } from "@lucide/svelte";

    let {
        class: className,
        ...restProps
    }: SpinnerVariantProps = $props();
</script>

<LoaderPinwheel
    class={cn("animate-spin", className)} 
    {...restProps}
/>
