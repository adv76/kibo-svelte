<script lang="ts">
    import { Marquee } from "@selemondev/svelte-marquee";
    import "@selemondev/svelte-marquee/dist/style.css";
    import type { ComponentProps, Snippet } from "svelte";

    let {
        class: className = "",
        pauseOnHover = true,
        children,
        ...restProps
    }: ComponentProps<typeof Marquee> & {
        children?: Snippet;
    } = $props();
</script>

<Marquee
    class={className}
    {pauseOnHover}
    {...restProps}
>
    {@render children?.()}
</Marquee>
