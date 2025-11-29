<script lang="ts">
    import { CommandInput } from "$lib/components/ui/command";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        value = $bindable(null),
        class: className,
        ...restProps
    }: ComponentProps<typeof CommandInput> = $props();
</script>

<CommandInput bind:value class={cn("h-9", className)} {...restProps} />
