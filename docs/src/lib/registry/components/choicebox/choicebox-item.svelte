<script lang="ts">
    import * as Field from "$lib/components/ui/field";
    import type { ComponentProps } from "svelte";
    import { setupContext } from "./choicebox-context.svelte";

    let {
        id,
        value,
        class: className,
        children,
    }: Partial<ComponentProps<typeof Field.Field>> & {
        id?: string;
        value: string;
    } = $props();

    const ctx = setupContext({ id, value });
</script>

<Field.Label for={id}>
    <Field.Field class={className} orientation="horizontal">
        {@render children?.()}
    </Field.Field>
</Field.Label>
