<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { PopoverTrigger } from "$lib/components/ui/popover";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        class: className,
        children,
        ...restProps
    }: ComponentProps<typeof Button> = $props();
</script>

<PopoverTrigger>
    {#snippet child({ props })}
        <Button
            role="combobox"
            variant="outline"
            {...props}
            {...restProps}
            class={cn("h-auto w-full justify-between p-2", className)}
        >
            <div class="flex flex-wrap items-center gap-1">
                {@render children?.()}
                <span class="px-2 py-px text-muted-foreground">
                    Select a tag...
                </span>
            </div>
        </Button>
    {/snippet}
</PopoverTrigger>
