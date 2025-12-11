<script lang="ts">
    import { cn } from "$lib/utils";
    import { CircleCheck, CircleX, Info, Sun, TriangleAlert } from "@lucide/svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type CalloutType =
    | 'info'
    | 'warn'
    | 'error'
    | 'success'
    | 'warning'
    | 'idea';

    let {
        title,
        type = "info",
        class: className,
        children,
        ...restProps
    }: HTMLAttributes<HTMLDivElement> & {
        title?: string;
        type: CalloutType;
    } = $props();

    function resolveAlias(type: CalloutType) {
        if (type === 'warn') return 'warning';
        if ((type as unknown) === 'tip') return 'info';
        return type;
    };

    const actualType = $derived(resolveAlias(type));

    const iconClass = 'size-5 -me-0.5 fill-(--callout-color) text-card';
    const Icon = $derived.by(() => {
        if (actualType == "info") return Info;
        if (actualType == "warning") return TriangleAlert;
        if (actualType == "error") return CircleX;
        if (actualType == "success") return CircleCheck;
        if (actualType == "idea") return Sun;
    });
    const color = $derived.by(() => {
        if (actualType == "info") return "lab(54.1736% 13.3369 -74.6839)";
        if (actualType == "warning") return "lab(72.7183% 31.8672 97.9407)";
        if (actualType == "error") return "lab(55.4814% 75.0732 48.8528)";
        if (actualType == "success") return "lab(70.5521% -66.5147 45.8073)";
        return "var(--muted)"
    })
</script>

<div
    class={cn(
        'flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md',
        className,
    )}
    style="--callout-color: {color};"
    {...restProps}
>
    <div role="none" class="w-0.5 bg-(--callout-color)/50 rounded-sm"></div>
    {#if Icon}
        <Icon class={iconClass} />
    {/if}
    <div class="flex flex-col gap-2 min-w-0 flex-1" {...restProps}>
        {#if title}
            <p class="font-medium my-0!">
                {title}
            </p>
        {/if}
        <div class="text-fd-muted-foreground prose-no-margin empty:hidden">
            {@render children?.()}
        </div>
    </div>
</div>




