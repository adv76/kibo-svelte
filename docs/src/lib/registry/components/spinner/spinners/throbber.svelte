<script lang="ts">
    import type { SpinnerVariantProps } from "../types";
    import { cn } from "$lib/utils";
    import { Loader } from "@lucide/svelte";

    let {
        class: className,
        ...restProps
    }: SpinnerVariantProps = $props();
</script>

<Loader 
    class={cn("animate-spin", className)} 
    {...restProps}
/>
