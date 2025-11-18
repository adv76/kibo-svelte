<script lang="ts">
    import * as ColorPicker from "$lib/registry/components/color-picker";
</script>

<ColorPicker.Root class="aspect-square rounded-md border bg-background p-4">
    <ColorPicker.Selection class="aspect-auto size-full" />
    <div class="flex items-center gap-4">
        <ColorPicker.EyeDropper />
        <div class="grid w-full gap-1">
            <ColorPicker.Hue />
            <ColorPicker.Alpha />
        </div>
    </div>
    <div class="flex items-center gap-2">
        <ColorPicker.Output />
        <ColorPicker.Format />
    </div>
</ColorPicker.Root>
