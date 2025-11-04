<script lang="ts">
    import { SelectItem } from "$lib/components/ui/select";
    import { cn } from "$lib/utils.js";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        ...restProps
    }: ComponentProps<typeof SelectItem> = $props();

    // TODO wire up context
</script>

<SelectItem class={cn("text-sm", className)} {...restProps} />
