<script lang="ts">
    import Bars from "./spinners/bars.svelte";
    import CircleFilled from "./spinners/circle-filled.svelte";
    import Ellipsis from "./spinners/ellipsis.svelte";
    import Infinite from "./spinners/infinite.svelte";
    import Pinwheel from "./spinners/pinwheel.svelte";
    import Ring from "./spinners/ring.svelte";
    import Throbber from "./spinners/throbber.svelte";

    import { Spinner as ShadcnSpinner } from "$lib/components/ui/spinner";
    import { cn } from "$lib/utils";
    import type { SpinnerProps } from "./types";

    let {
        variant,
        ...restProps
    }: SpinnerProps = $props();
</script>

{#if variant == "throbber"}
    <Throbber {...restProps} />
{:else if variant == "pinwheel"}
    <Pinwheel {...restProps} />
{:else if variant == "circle-filled"}
    <CircleFilled {...restProps} />
{:else if variant == "ellipsis"}
    <Ellipsis {...restProps} />
{:else if variant =="ring"}
    <Ring {...restProps} />
{:else if variant == "bars"}
    <Bars {...restProps} />
{:else if variant == "infinite"}
    <Infinite {...restProps} />
{:else} <!-- Default -->
    <ShadcnSpinner
        class={cn("size-6", restProps.className)}
        {...restProps}
    />
{/if}
