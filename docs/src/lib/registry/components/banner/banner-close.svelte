<script lang="ts">
    import { Button, type ButtonProps } from "$lib/components/ui/button/";
    import { cn } from "$lib/utils";
    import { XIcon } from "@lucide/svelte"

    let {
        ref = $bindable(null),
        variant = "ghost",
        size = "icon",
        class: className,
        ...restProps
    }: ButtonProps = $props();

    // Todo add context for closing
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
>
    <XIcon size={18} />
</Button>
