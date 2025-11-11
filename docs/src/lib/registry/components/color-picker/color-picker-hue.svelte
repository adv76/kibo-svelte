<script lang="ts">
    import { Slider } from "bits-ui";
    import { cn } from "$lib/utils";
    import { getContext } from "./color-picker-context.svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: Slider.RootProps = $props();

    const ctx = getContext();
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<Slider.Root
    bind:ref
    type="single"
    bind:value={ctx.hue as never}
    max={360}
    step={1}
    data-slot="slider"
    orientation="horizontal"
    class={cn(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
        className
    )}
    {...restProps}
>
	{#snippet children({ thumbItems })}
		<span
			data-slot="slider-track"
			class={cn(
				"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5",
                "relative my-0.5 h-3 w-full grow rounded-full bg-[linear-gradient(90deg,#FF0000,#FFFF00,#00FF00,#00FFFF,#0000FF,#FF00FF,#FF0000)]"
            )}
		>
		</span>
		{#each thumbItems as thumb (thumb)}
			<Slider.Thumb
				data-slot="slider-thumb"
				index={thumb.index}
				class="border-primary bg-background ring-ring/50 focus-visible:outline-hidden block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
			/>
		{/each}
	{/snippet}
</Slider.Root>
