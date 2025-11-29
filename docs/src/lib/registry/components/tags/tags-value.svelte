<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { cn } from "$lib/utils";
    import { XIcon } from "@lucide/svelte";
    import type { ComponentProps } from "svelte";
    import type { MouseEventHandler } from "svelte/elements";

    let {
        class: className,
        children,
        onRemove,
        ...restProps
    }: ComponentProps<typeof Badge> & {
        onRemove?: () => void;
    } = $props();

    const handleRemove: MouseEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        event.stopPropagation();
        onRemove?.();
    };
</script>

<Badge class={cn("flex items-center gap-2", className)} {...restProps}>
    {@render children?.()}
    {#if onRemove}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="size-auto cursor-pointer hover:text-muted-foreground"
            onclick={handleRemove}
        >
            <XIcon size={12} />
        </div>
    {/if}
</Badge>
