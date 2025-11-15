<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Kbd } from "$lib/components/ui/kbd";
    import { cn } from "$lib/utils";
    import { Search } from "@lucide/svelte";

    type SearchProps = {
        class?: string;
    };

    let {
        class: className = ""
    }: SearchProps = $props();
</script>

<Button
    class={cn(
        "relative text-muted-foreground has-[>svg]:pr-19",
        className
    )}
    onclick={() => 0}
    size="sm"
    variant="secondary"
>
    <Search class="size-4" />
    <p class="font-normal">Search...</p>
    <span class="-translate-y-1/2 absolute top-1/2 right-1.5 flex items-center gap-0.5">
    <Kbd class="border bg-background">⌘</Kbd>
    <Kbd class="border bg-background">K</Kbd>
    </span>
</Button>
