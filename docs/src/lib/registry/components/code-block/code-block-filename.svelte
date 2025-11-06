<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { type WithElementRef } from "$lib/utils.js";
    import { getContext } from "./code-block-context.svelte";

    import { FileCode, type Icon as IconType } from "@lucide/svelte"; 

    let {
        ref = $bindable(null),
        icon,
        value,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        icon?: typeof IconType;
        value?: string;
    } = $props();

    const { value: activeValue } = getContext();

    // TODO find an icon lib
    // const defaultIcon = Object.entries(filenameIconMap).find(([pattern]) => {
    //     const regex = new RegExp(
    //     `^${pattern.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*")}$`
    //     );
    //     return regex.test(children as string);
    // })?.[1];

    const Icon = $derived(icon ?? FileCode);
</script>

{#if value === activeValue}
    <div
        bind:this={ref}
        class="flex items-center gap-2 bg-secondary px-4 py-1.5 text-muted-foreground text-xs"
        {...restProps}
    >
        <Icon class="h-4 w-4 shrink-0" />
        <span class="flex-1 truncate">
            {@render children?.()}
        </span>
    </div>
{/if}
