<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    let {
        src,
        fallback,
        name,
        class: className,
        ...restProps
    }: ComponentProps<typeof Avatar.Root> & {
        src?: string;
        name?: string;
        fallback?: string;
    } = $props();
</script>

<Avatar.Root class={cn("size-6 border border-white/20", className)} {...restProps}>
    {#if src}
        <Avatar.Image alt={name} src={src} />
        <Avatar.Fallback class="bg-white/10 text-white text-xs">
            {fallback || name?.charAt(0)?.toUpperCase()}
        </Avatar.Fallback>
    {/if}
</Avatar.Root>
