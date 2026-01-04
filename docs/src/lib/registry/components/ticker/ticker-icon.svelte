<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";
    
    let {
        src,
        symbol,
        class: className,
        children,
        ...props
    }: ComponentProps<typeof Avatar.Image> & {
        src?: string;
        symbol?: string;
    } = $props();
</script>

{#if children}
    <div
        class={cn(
            "overflow-hidden rounded-full border border-border bg-muted",
            className
        )}
    >
        {@render children?.()}
    </div>
{:else}
    <Avatar.Root class={cn("size-7 border border-border bg-muted", className)}>
        <Avatar.Image {src} {...props} />
        <Avatar.Fallback class="font-semibold text-muted-foreground text-sm">
            {symbol?.slice(0, 2).toUpperCase()}
        </Avatar.Fallback>
    </Avatar.Root>
{/if}
