<script lang="ts">
    import { Button, type ButtonProps } from "$lib/components/ui/button/";
    import { cn } from "$lib/utils";
    import { XIcon } from "@lucide/svelte"
    import { getContext } from "./banner-context.svelte";

    let {
        ref = $bindable(null),
        variant = "ghost",
        size = "icon",
        class: className,
        onclick,
        ...restProps
    }: ButtonProps = $props();

    const ctx = getContext();

    // ts shut up plz
    function handleClick(e: any) {
        ctx.show = false;
        onclick?.(e);
    }
</script>

<Button
    bind:ref
    class={cn(
        "shrink-0 bg-transparent hover:bg-background/10 hover:text-background",
        className
    )}
    {size}
    {variant}
    {...restProps}
    onclick={handleClick}
>
    <XIcon size={18} />
</Button>
