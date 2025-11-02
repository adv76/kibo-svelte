<script lang="ts">
    import type { SpinnerVariantProps } from "../types";
    import { cn } from "$lib/utils";
    import { LoaderCircle } from "@lucide/svelte";

    let {
        class: className,
        size = 24,
        ...restProps
    }: SpinnerVariantProps = $props();
</script>

<div class="relative" style="width: {size}; height: {size};">
    <div class="absolute inset-0 rotate-180">
        <LoaderCircle
            class={cn("animate-spin", className, "text-foreground opacity-20")}
            {size}
            {...restProps}
        />
    </div>
    <LoaderCircle
        class={cn("relative animate-spin", className)}
        {size}
        {...restProps}
    />
</div>
