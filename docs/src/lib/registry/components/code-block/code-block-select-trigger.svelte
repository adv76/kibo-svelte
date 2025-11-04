<script lang="ts">
    import { SelectTrigger } from "$lib/components/ui/select";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        ...restProps
    }: ComponentProps<typeof SelectTrigger> = $props();

    // TODO wire up context
</script>

<SelectTrigger
    class={cn(
        "w-fit border-none text-muted-foreground text-xs shadow-none",
        className
    )}
    {...restProps}
/>
