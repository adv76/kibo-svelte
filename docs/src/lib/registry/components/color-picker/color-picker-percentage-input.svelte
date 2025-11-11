<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: ComponentProps<typeof Input> = $props();
</script>

<div class="relative">
    <Input
        readonly
        type="text"
        {...restProps}
        class={cn(
            "h-8 w-[3.25rem] rounded-l-none bg-secondary px-2 text-xs shadow-none",
            className
        )}
    />
    <span class="-translate-y-1/2 absolute top-1/2 right-2 text-muted-foreground text-xs">
        %
    </span>
</div>
