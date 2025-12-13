<script lang="ts">
    import type { Snippet } from "svelte";
    import type { Status } from "./types";
    import { cn } from "$lib/utils";

    type ListHeaderProps = {
        name?: never;
        color?: never;
        class?: never;
        children: Snippet;
    } | {
        name: Status["name"];
        color: Status["color"];
        class?: string;
        children?: never;
    };

    let {
        name,
        color, 
        class: className,
        children
    }: ListHeaderProps = $props();
</script>

{#if children}
    {@render children()}
{:else}
    <div
        class={cn(
            "flex shrink-0 items-center gap-2 bg-foreground/5 p-3",
            className
        )}
    >
        <div
            class="h-2 w-2 rounded-full"
            style="background-color: {color};"
        ></div>
      <p class="m-0 font-semibold text-sm">{name}</p>
    </div>
{/if}
