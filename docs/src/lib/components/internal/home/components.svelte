<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    import CodeBlockDemo from "./demo-components/code-block-demo.svelte";
    import ColorPickerDemo from "./demo-components/color-picker-demo.svelte";
    import DropzoneDemo from "./demo-components/dropzone-demo.svelte";
    import ImageZoomDemo from "./demo-components/image-zoom-demo.svelte";
    import MarqueeDemo from "./demo-components/marquee-demo.svelte";
    import QRCodeDemo from "./demo-components/qr-code-demo.svelte";

    import { ArrowRightIcon } from "@lucide/svelte";

    const examples = [
        {
            // icon: imageZoom?.data.icon,
            name: "Color Picker",
            // description: imageZoom?.data.description,
            component: ColorPickerDemo
        },
        {
            // icon: imageZoom?.data.icon,
            name: "Image Zoom",
            // description: imageZoom?.data.description,
            component: ImageZoomDemo
        },
        {
            // icon: imageZoom?.data.icon,
            name: "QR Code",
            // description: imageZoom?.data.description,
            component: QRCodeDemo
        },
        {
            // icon: imageZoom?.data.icon,
            name: "Code Block",
            // description: imageZoom?.data.description,
            component: CodeBlockDemo
        },
        {
            // icon: imageZoom?.data.icon,
            name: "Drop Zone",
            // description: imageZoom?.data.description,
            component: DropzoneDemo
        },
        {
            // icon: imageZoom?.data.icon,
            name: "Marquee",
            // description: imageZoom?.data.description,
            component: MarqueeDemo
        },
    ]
</script>

<div class="container mx-auto grid gap-8">
    <div class="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
        <div class="grid gap-4">
            <h2 class="max-w-lg font-semibold text-3xl">
                Functional and fully composable
            </h2>
            <p class="max-w-lg text-balance text-lg text-muted-foreground">
                Kibo UI components are designed to be fully composable so you can
                build, customize and extend them to your own needs.
            </p>
        </div>
        <Button href="/components" size="lg">
            <span>Explore components</span>
            <ArrowRightIcon size={16} />
        </Button>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {#each examples as example(example.name)}
            <!-- Example Card -->
            <div class="flex h-full flex-col gap-8 rounded-lg bg-secondary p-4 sm:p-8">
                <div class="grid gap-4">
                    <div class="flex items-center gap-2">
                        <!-- {Icon && <Icon class="text-muted-foreground" size={16} />} -->
                        {#if example.name}
                            <p class="font-medium">{example.name}</p>
                        {/if}
                    </div>
                    {#if example.description}
                        <p class="text-balance text-muted-foreground">{example.description}</p>
                    {/if}
                </div>
                <div class="text-left">
                    <example.component />
                </div>
            </div>
            <!-- End Example Card -->
        {/each}
    </div>
</div>
