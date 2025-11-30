<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { ChevronLeftIcon, ChevronRightIcon } from "@lucide/svelte";
    import type { ComponentProps, Snippet } from "svelte";
    import type { HTMLAttributes, MouseEventHandler } from "svelte/elements";
    import { getContext } from "./mini-calendar-context.svelte";


    let {
        direction,
        children,
        child,
        onclick,
        ...restProps
    }: ComponentProps<typeof Button> & {
        direction: "prev" | "next";
        child?: Snippet<[{ props: HTMLAttributes<HTMLButtonElement> }]>
    } = $props();

    const ctx = getContext();

    const Icon = $derived(direction === "prev" ? ChevronLeftIcon : ChevronRightIcon);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        ctx.onNavigate(direction);
        onclick?.(event);
    };
</script>

{#if child}
    {@render child({ onclick: handleClick, ...restProps })}
{:else}
    <Button
        onclick={handleClick}
        size="icon"
        type="button"
        variant="ghost"
        {...restProps}
    >
        {#if children}
            {@render children()}
        {:else}
            <Icon class="size-4" />
        {/if}
    </Button>
{/if}
