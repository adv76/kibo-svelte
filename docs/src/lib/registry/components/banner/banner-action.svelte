<script lang="ts">
    import { Button, type ButtonProps } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";

    let {
        ref = $bindable(null),
        variant = "outline",
        size = "sm",
        class: className,
        ...restProps
    }: ButtonProps = $props();
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
/>
