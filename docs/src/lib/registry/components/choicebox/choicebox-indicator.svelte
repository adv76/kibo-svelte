<script lang="ts">
    import { RadioGroupItem } from "$lib/components/ui/radio-group";
    import type { ComponentProps } from "svelte";
    import { getContext } from "./choicebox-context.svelte";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: Partial<ComponentProps<typeof RadioGroupItem>> = $props();

    const ctx = getContext();
</script>

<RadioGroupItem {...restProps} value={ctx.value} />
