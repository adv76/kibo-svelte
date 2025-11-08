<script lang="ts">
    import { Spinner } from "$lib/registry/components/spinner";
    import type { ComponentProps } from "svelte";

    const variants: ComponentProps<typeof Spinner>["variant"][] = [
        "default",
        "throbber",
        "pinwheel",
        "circle-filled",
        "ellipsis",
        "ring",
        "bars",
        "infinite",
    ];
</script>

<div class="grid h-screen w-full grid-cols-4 items-center justify-center gap-8">
    {#each variants as variant(variant)}
        <div class="flex flex-col items-center justify-center gap-4">
            <Spinner {variant} />
            <span class="font-mono text-muted-foreground text-xs">
                {variant}
            </span>
      </div>
    {/each}
</div>
